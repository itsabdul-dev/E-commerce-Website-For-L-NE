import React, { useEffect, useRef, useState } from 'react';
import { useTransform, useMotionValueEvent } from 'framer-motion';
import './TeapotSequence.css';

const frameCount = 34;
const pad = (n) => String(n).padStart(3, '0');

const TeapotSequence = ({ scrollYProgress }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const [loaded, setLoaded] = useState(false);

    const frameIndex = useTransform(scrollYProgress, [0, 0.85], [0, frameCount - 1]);

    useEffect(() => {
        let cancelled = false;
        const imgs = [];
        let count = 0;
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/images/teapot-sequence/ezgif-frame-${pad(i + 1)}.jpg`;
            img.onload = () => { count++; if (count === frameCount && !cancelled) { imagesRef.current = imgs; setLoaded(true); } };
            img.onerror = () => { count++; if (count === frameCount && !cancelled) { imagesRef.current = imgs; setLoaded(true); } };
            imgs.push(img);
        }
        return () => { cancelled = true; };
    }, []);

    const draw = (index) => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!canvas || !img || !img.complete) return;
        const ctx = canvas.getContext('2d');
        const cW = canvas.width, cH = canvas.height;
        const iR = img.width / img.height, cR = cW / cH;
        let dW, dH, oX, oY;
        if (cR > iR) { dH = cH; dW = img.width * (cH / img.height); oX = (cW - dW) / 2; oY = 0; }
        else { dW = cW; dH = img.height * (cW / img.width); oX = 0; oY = (cH - dH) / 2; }
        ctx.clearRect(0, 0, cW, cH);
        ctx.drawImage(img, oX, oY, dW, dH);
    };

    useMotionValueEvent(frameIndex, 'change', (v) => {
        if (!loaded) return;
        requestAnimationFrame(() => draw(Math.min(Math.max(Math.round(v), 0), frameCount - 1)));
    });

    useEffect(() => { if (loaded) draw(0); }, [loaded]);

    useEffect(() => {
        const resize = () => {
            const c = canvasRef.current; if (!c) return;
            const dpr = window.devicePixelRatio || 1;
            const r = c.getBoundingClientRect();
            c.width = r.width * dpr; c.height = r.height * dpr;
            if (loaded) draw(Math.min(Math.max(Math.round(frameIndex.get()), 0), frameCount - 1));
        };
        window.addEventListener('resize', resize);
        resize();
        return () => window.removeEventListener('resize', resize);
    }, [loaded]);

    return (
        <div className="teapot-wrap">
            {!loaded && <div className="teapot-loading">Loading Ritual...</div>}
            <canvas ref={canvasRef} className="teapot-canvas" />
        </div>
    );
};
export default TeapotSequence;
