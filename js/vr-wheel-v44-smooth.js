/* VANTA RIPS pack wheel v44 smooth. Load from the footer stub in src/vr-wheel-v44-inject.html */
(function(){try{
if(!document.getElementById('vr-wheel-css')){var __s=document.createElement('style');__s.id='vr-wheel-css';__s.textContent="#vr-wheel{position:relative;background:#07080b;color:#f2f0ea;font-family:Sora,system-ui,sans-serif;overflow:hidden;text-align:center;-webkit-user-select:none;user-select:none}#vr-wheel .vw-h{position:relative;margin:0 16px 4px;font-size:clamp(22px,4.4vw,36px);font-weight:800;letter-spacing:.04em;color:#f2f0ea}#vr-wheel .vw-h b{color:#e8b84b}#vr-wheel .vw-s{position:relative;margin:0 16px;font-size:13px;opacity:.7}#vr-wheel.m3d{height:var(--v3h,640px);background:radial-gradient(70% 60% at 50% 52%,#24252b 0%,#111216 45%,#050507 100%)}#vr-wheel .v3-bg{position:absolute;inset:0;background:radial-gradient(75% 85% at 62% 50%,var(--acc,#e8b84b) 0%,var(--acc2,#3a2c10) 45%,#050507 100%);opacity:0;transition:opacity var(--v3z,900ms) ease;pointer-events:none}#vr-wheel.zoom .v3-bg{opacity:1}#vr-wheel .v3-c{position:absolute;inset:0;touch-action:pan-y;cursor:grab;outline:none}#vr-wheel .v3-c.drag{cursor:grabbing}#vr-wheel .v3-c:focus-visible{box-shadow:inset 0 0 0 2px rgba(232,184,75,.5)}#vr-wheel .v3-c canvas{display:block;width:100%!important;height:100%!important}#vr-wheel .v3-ui{position:absolute;left:0;right:0;bottom:26px;pointer-events:none;transition:opacity .35s ease}#vr-wheel .v3-e{margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.32em;color:rgba(242,240,234,.55)}#vr-wheel .v3-e b{color:#e8b84b;font-weight:700}#vr-wheel .v3-e:empty{display:none}#vr-wheel .v3-n{font-size:clamp(22px,3.4vw,34px);font-weight:800;letter-spacing:.05em;text-transform:uppercase;text-shadow:0 2px 18px rgba(0,0,0,.6)}#vr-wheel .v3-p{font-size:14px;font-weight:600;color:#e8b84b;margin-top:2px;opacity:.9}#vr-wheel .v3-b{pointer-events:auto;display:inline-block;margin-top:10px;font-size:12px;font-weight:800;letter-spacing:.12em;color:#1a1206!important;background:linear-gradient(180deg,#f4cf6e,#e0a93a);padding:10px 20px;border-radius:999px;text-decoration:none!important;box-shadow:0 6px 22px rgba(232,184,75,.3)}#vr-wheel .v3-ch{position:absolute;top:var(--v3cy,46%);transform:translateY(-50%);z-index:3;background:none;border:0;color:rgba(242,240,234,.45);font-size:30px;line-height:1;padding:10px 12px;cursor:pointer;transition:color .2s,opacity .35s}#vr-wheel .v3-ch:hover{color:#e8b84b}#vr-wheel .v3-ch.l{left:calc(50% - var(--v3cx,170px))}#vr-wheel .v3-ch.r{right:calc(50% - var(--v3cx,170px))}#vr-wheel.zoom .v3-c{box-shadow:none;cursor:default}#vr-wheel.zoom .v3-ui,#vr-wheel.zoom .v3-ch{opacity:0}#vr-wheel .v3-ld{position:absolute;left:50%;top:46%;width:34px;height:34px;margin:-17px;border-radius:50%;border:2px solid rgba(232,184,75,.25);border-top-color:#e8b84b;animation:v3spin .9s linear infinite}@keyframes v3spin{to{transform:rotate(360deg)}}#vr-wheel.mcss{padding:46px 0 40px}#vr-wheel.mcss::before{content:\"\";position:absolute;left:50%;top:38%;width:min(900px,120vw);height:420px;transform:translate(-50%,-50%);background:radial-gradient(closest-side,rgba(232,184,75,.20),rgba(232,184,75,.05) 60%,transparent);pointer-events:none}#vr-wheel .vw-stage{position:relative;height:var(--vw-sh,400px);perspective:1100px;perspective-origin:50% 40%;touch-action:pan-y;cursor:grab;outline:none;margin-top:6px}#vr-wheel .vw-ring{position:absolute;left:50%;top:34px;width:0;height:0;transform-style:preserve-3d;transition:transform 700ms cubic-bezier(.22,.8,.2,1)}#vr-wheel .vw-ring.nt,#vr-wheel .vw-ring.nt .vw-card{transition:none}#vr-wheel .vw-card{position:absolute;left:calc(var(--vw-w,200px)/-2);top:0;width:var(--vw-w,200px);height:var(--vw-ch,260px);transform-style:preserve-3d;transition:opacity .7s ease,filter .7s ease;display:block;color:inherit;text-decoration:none!important}#vr-wheel .vw-obj{position:absolute;inset:0;transition:transform .7s cubic-bezier(.22,.8,.2,1);transform:scale(.86)}#vr-wheel .vw-card.on .vw-obj{transform:scale(1.1) translateZ(30px)}#vr-wheel .vw-face{position:absolute;inset:0;border-radius:16px;background:linear-gradient(160deg,#1b1c22,#0d0e12 55%,#16130b);border:1px solid rgba(232,184,75,.35);box-shadow:0 18px 40px rgba(0,0,0,.55);overflow:hidden;-webkit-box-reflect:below 10px linear-gradient(transparent 62%,rgba(255,255,255,.22))}#vr-wheel .vw-card.on .vw-face{border-color:#e8b84b;box-shadow:0 0 46px rgba(232,184,75,.25)}#vr-wheel .vw-face img{position:absolute;inset:8%;width:84%;height:84%;object-fit:contain;pointer-events:none}#vr-wheel .vw-info{position:relative;min-height:118px}#vr-wheel .vw-n{font-size:clamp(20px,3.6vw,28px);font-weight:800;letter-spacing:.06em}#vr-wheel .vw-p{font-size:18px;font-weight:700;color:#e8b84b;margin:3px 0 12px}#vr-wheel .vw-btn{display:inline-block;background:linear-gradient(180deg,#f4cf6e,#e0a93a);color:#1a1206!important;font-weight:800;letter-spacing:.06em;font-size:15px;padding:14px 28px;border-radius:999px;text-decoration:none!important}#vr-wheel .vw-arr{position:absolute;top:calc(var(--vw-sh,400px)/2 + 20px);transform:translateY(-50%);z-index:5;width:44px;height:44px;border-radius:50%;border:1px solid rgba(232,184,75,.55);background:rgba(7,8,11,.75);color:#e8b84b;font-size:22px;cursor:pointer;padding:0}#vr-wheel .vw-prev{left:max(10px,calc(50% - 460px))}#vr-wheel .vw-next{right:max(10px,calc(50% - 460px))}#vr-wheel .vw-dots{display:flex;justify-content:center;gap:6px;margin-top:16px;flex-wrap:wrap}#vr-wheel .vw-dot{width:8px;height:8px;border-radius:99px;border:0;padding:0;background:rgba(242,240,234,.28);cursor:pointer}#vr-wheel .vw-dot.on{width:22px;background:#e8b84b}#vr-wheel.flat .vw-stage{perspective:none}#vr-wheel.flat .vw-ring,#vr-wheel.flat .vw-card,#vr-wheel.flat .vw-obj{transition:none}#vr-wheel.flat .vw-face{-webkit-box-reflect:unset}#vr-wheel.v2{height:100vh;height:100svh;min-height:520px;background:radial-gradient(115% 58% at 50% 64%,#a9aaae 0%,#76777b 22%,#3c3d41 44%,#151619 64%,#050506 86%)}#vr-wheel.v2 .v3-bg{background:radial-gradient(110% 80% at 58% 100%,var(--acc,#e8b84b) 0%,var(--acc2,#3a2c10) 42%,#050506 82%)}#vr-wheel.v2 .v3-c{z-index:2}#vr-wheel.v2 .v2-flash{position:absolute;inset:0;z-index:0;opacity:0;pointer-events:none;background:radial-gradient(80% 75% at 50% 55%,#fff 0%,var(--acc,#e8b84b) 30%,var(--acc2,#3a2c10) 75%,#050506 100%)}#vr-wheel.v2 .v2-big{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0;overflow:hidden}#vr-wheel.v2 .v2-big span{font-family:Anton,Oswald,Impact,sans-serif;font-size:clamp(90px,22vw,340px);line-height:.85;letter-spacing:.02em;color:rgba(255,255,255,.55);text-shadow:0 0 40px rgba(255,255,255,.35);filter:blur(1px);white-space:nowrap}#vr-wheel.v2 .v2-logo{position:absolute;left:50%;top:var(--v2hy,120px);z-index:3;width:clamp(70px,8vw,112px);transform:translate(-50%,-78%);pointer-events:none;transition:opacity .35s ease}#vr-wheel.v2 .v2-logo img{display:block;width:100%;height:auto;filter:drop-shadow(0 0 10px rgba(255,214,140,.45)) drop-shadow(0 6px 10px rgba(0,0,0,.6))}#vr-wheel.v2 .v2-bar{position:absolute;left:50%;bottom:3.2%;z-index:3;width:min(44vw,560px);height:5px;border-radius:9px;transform:translateX(-50%);background:linear-gradient(90deg,transparent,var(--acc,#e8b84b) 18%,#fff 50%,var(--acc,#e8b84b) 82%,transparent);box-shadow:0 0 22px 4px var(--acc,#e8b84b),0 -10px 90px 30px rgba(232,184,75,.35);box-shadow:0 0 22px 4px var(--acc,#e8b84b),0 -10px 90px 30px color-mix(in srgb,var(--acc,#e8b84b) 45%,transparent);transition:opacity .35s ease,background .6s ease}#vr-wheel.v2 .v3-ui{top:var(--v2ty,70%);bottom:auto;z-index:3;transform:translateY(-38%)}#vr-wheel.v2 .v3-n{font-family:Anton,Oswald,Impact,sans-serif;font-weight:400;font-size:clamp(34px,5.2vw,74px);line-height:.92;letter-spacing:.015em;max-width:9ch;margin:0 auto;color:#fff;text-shadow:0 3px 22px rgba(0,0,0,.55)}#vr-wheel.v2 .v2-sub{pointer-events:auto;margin-top:8px;display:flex;gap:12px;align-items:center;justify-content:center;font-size:12px;letter-spacing:.14em;opacity:.78}#vr-wheel.v2 .v2-sub .v3-p{font-size:12px;color:#fff;margin:0;font-weight:600}#vr-wheel.v2 .v2-sub .v3-b{margin:0;background:none;box-shadow:none;padding:0;color:#e8b84b!important;font-size:11px;border-bottom:1px solid rgba(232,184,75,.5);border-radius:0}#vr-wheel.v2 .v3-ch{font-size:22px;color:rgba(255,255,255,.4);z-index:4}#vr-wheel.v2.zoom .v2-logo,#vr-wheel.v2.zoom .v2-bar{opacity:0}#vr-wheel.v2 .v2-d{position:absolute;inset:0;z-index:5;pointer-events:none;opacity:0;transition:opacity .4s ease}#vr-wheel.v2.detail .v2-d{opacity:1}#vr-wheel.v2.detail .v2-d .v2-back,#vr-wheel.v2.detail .v2-d .v2-cta{pointer-events:auto}#vr-wheel.v2 .v2-back{position:absolute;left:clamp(14px,4vw,56px);top:calc(var(--hdr,44px) + 18px);background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.25);color:#fff;font:700 11px/1 Sora,system-ui,sans-serif;letter-spacing:.16em;padding:10px 14px;border-radius:999px;cursor:pointer}#vr-wheel.v2 .v2-back:hover{background:#fff;color:#000}#vr-wheel.v2 .v2-prog{position:absolute;left:0;top:var(--hdr,44px);width:38vw;height:2px;background:rgba(255,255,255,.08)}#vr-wheel.v2 .v2-prog i{display:block;height:100%;background:#fff;box-shadow:0 0 12px #fff;transform-origin:left;transform:scaleX(0)}#vr-wheel.v2 .v2-blk{position:absolute;left:clamp(18px,7vw,110px);top:50%;width:min(420px,40vw);margin-top:-80px;text-align:left;opacity:0;visibility:hidden}#vr-wheel.v2 .v2-tag{display:inline-block;font:700 10px/1 Sora,system-ui,sans-serif;letter-spacing:.2em;color:#111;background:rgba(255,255,255,.85);padding:5px 8px;border-radius:3px;margin-bottom:12px}#vr-wheel.v2 .v2-blk h3{margin:0 0 12px;font-family:Anton,Oswald,Impact,sans-serif;font-weight:400;font-size:clamp(34px,4.6vw,64px);line-height:.92;color:#fff;text-transform:uppercase;text-shadow:0 2px 18px rgba(0,0,0,.4)}#vr-wheel.v2 .v2-blk p{margin:0;font:400 15px/1.55 Sora,system-ui,sans-serif;color:rgba(255,255,255,.88);max-width:36ch}#vr-wheel.v2 .v2-cta{position:absolute;left:clamp(18px,7vw,110px);bottom:9%;display:inline-block;background:linear-gradient(180deg,#f4cf6e,#e0a93a);color:#1a1206!important;font:800 14px/1 Sora,system-ui,sans-serif;letter-spacing:.1em;padding:15px 26px;border-radius:999px;text-decoration:none!important;box-shadow:0 8px 28px rgba(0,0,0,.35)}#vr-wheel.v2.outro .v2-cta,#vr-wheel.v2.outro .v2-back{opacity:0;transition:opacity .3s}#vr-wheel.v2.detail .v3-c{cursor:default}html.vr-hero-on #vhero{padding-top:56px}html.vr-hero-top #header .header-title-logo,html.vr-hero-top #header .header-title{opacity:0;transition:opacity .3s}html.vr-hdr-clear #header .header-background-solid{opacity:0!important;transition:opacity .3s}@media(max-width:700px){ #vr-wheel.v2 .v3-n{font-size:clamp(34px,11vw,52px)} #vr-wheel.v2 .v2-bar{width:70vw;bottom:2.5%} #vr-wheel.v2 .v2-blk{left:20px;right:20px;width:auto;top:auto;bottom:calc(9% + 64px);margin-top:0} #vr-wheel.v2 .v2-blk h3{font-size:38px} #vr-wheel.v2 .v2-blk p{font-size:14px} #vr-wheel.v2 .v2-cta{left:20px;right:20px;text-align:center;bottom:6%} #vr-wheel.v2 .v2-prog{width:60vw}}#vr-wheel.v2css{min-height:100vh;min-height:100svh;padding-top:calc(var(--hdr,44px) + 40px);box-sizing:border-box}#vr-wheel.v3 .v3-bg{background:radial-gradient(90% 85% at 32% 70%,var(--acc,#e8b84b) 0%,var(--acc2,#3a2c10) 42%,#050506 82%)}#vr-wheel.v3 .v2-blk,#vr-wheel.v3 .v2-cta{display:none}#vr-wheel.v3 .v3-gp{position:absolute;right:clamp(16px,4vw,64px);top:calc(var(--hdr,44px) + 22px);bottom:22px;width:min(460px,40vw);box-sizing:border-box;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch; padding:22px 22px 18px;border-radius:18px;background:rgba(8,8,10,.62);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 60px rgba(0,0,0,.45); text-align:left;color:#fff;font:400 14px/1.5 Sora,system-ui,sans-serif;opacity:0;transform:translate3d(48px,0,0);visibility:hidden;pointer-events:none;transition:opacity .45s ease .12s,transform .55s cubic-bezier(.2,.8,.2,1) .12s,visibility 0s linear .7s}#vr-wheel.v3.detail .v3-gp{opacity:1;transform:none;visibility:visible;pointer-events:auto;transition:opacity .45s ease .12s,transform .55s cubic-bezier(.2,.8,.2,1) .12s,visibility 0s}#vr-wheel.v3.outro .v3-gp{opacity:0;transition:opacity .3s}#vr-wheel.v3 .v3-gp h3{margin:0 0 8px;font:400 clamp(30px,3.4vw,48px)/.95 Anton,Oswald,Impact,sans-serif;text-transform:uppercase;color:#fff}#vr-wheel.v3 .v3-gp-sel p{margin:0 0 14px;color:rgba(255,255,255,.82);font-size:13px}#vr-wheel.v3 .v3-gp-hd{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:16px 0 10px;padding-top:14px;border-top:1px solid rgba(255,255,255,.12)}#vr-wheel.v3 .v3-gp-hd h4{margin:0;font:400 20px/1 Anton,Oswald,Impact,sans-serif;letter-spacing:.04em;color:#f4cf6e}#vr-wheel.v3 .v3-gp-hd span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;opacity:.55}#vr-wheel.v3 .v3-gc{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;margin-bottom:12px}#vr-wheel.v3 .v3-gc-top{display:flex;gap:12px;align-items:center;color:#fff!important;text-decoration:none!important}#vr-wheel.v3 .v3-gc-top img,#vr-wheel.v3 .v3-gc-ph{width:72px;height:90px;object-fit:contain;flex:none;border-radius:8px;background:rgba(0,0,0,.3)}#vr-wheel.v3 .v3-gc-tx{display:flex;flex-direction:column;gap:3px;min-width:0}#vr-wheel.v3 .v3-gc-tx b{font:700 14px/1.25 Sora,system-ui,sans-serif;letter-spacing:.03em}#vr-wheel.v3 .v3-gc-pr{font-weight:700;color:#f4cf6e}#vr-wheel.v3 .v3-gc-lk{font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.6}#vr-wheel.v3 .v3-opt{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 8px}#vr-wheel.v3 .v3-opt button{display:flex;flex-direction:column;gap:3px;align-items:flex-start;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.25);color:#fff;cursor:pointer;font:400 12px/1.2 Sora,system-ui,sans-serif;text-align:left}#vr-wheel.v3 .v3-opt button b{font-size:11px;letter-spacing:.12em}#vr-wheel.v3 .v3-opt button small{font-size:13px;font-weight:700}#vr-wheel.v3 .v3-opt button em{font-style:normal;font-size:8px;letter-spacing:.1em;background:#ffcf4a;color:#1a1206;padding:2px 4px;border-radius:3px;vertical-align:middle}#vr-wheel.v3 .v3-opt button[aria-checked=\"true\"]{border-color:#f4cf6e;background:rgba(244,207,110,.14);box-shadow:0 0 0 1px #f4cf6e inset}#vr-wheel.v3 .v3-save,#vr-wheel.v3 .v3-note{margin:6px 0 8px;font-size:12px;color:rgba(255,255,255,.85)}#vr-wheel.v3 .v3-note{opacity:.75;font-size:11px}#vr-wheel.v3 .v3-ph{display:inline-block;font:800 9px/1 Sora,system-ui,sans-serif;letter-spacing:.12em;background:#ffcf4a;color:#1a1206;padding:3px 5px;border-radius:3px;vertical-align:1px}#vr-wheel.v3 .v3-act{display:block;text-align:center;margin-top:8px;background:linear-gradient(180deg,#f4cf6e,#e0a93a);color:#1a1206!important;font:800 13px/1 Sora,system-ui,sans-serif;letter-spacing:.1em;padding:13px 18px;border-radius:999px;text-decoration:none!important}#vr-wheel.v3 .v3-gc.case .v3-act{background:#fff}#vr-wheel.v3 .v3-sel-act span{opacity:.7;margin-left:6px}#vr-wheel.v3 .v3-gp-msg{padding:12px;border:1px dashed rgba(255,255,255,.3);border-radius:12px;font-size:13px}#vr-wheel.v3 .v3-gp-msg a,#vr-wheel.v3 .v3-gp-ck a{color:#f4cf6e!important}#vr-wheel.v3 .v3-gp-ck{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;opacity:.8;margin-top:4px}@media(max-width:700px){ #vr-wheel.v3 .v3-bg{background:radial-gradient(120% 60% at 50% 24%,var(--acc,#e8b84b) 0%,var(--acc2,#3a2c10) 45%,#050506 85%)} #vr-wheel.v3 .v3-gp{left:10px;right:10px;width:auto;top:47%;bottom:10px;padding:16px 14px 12px;border-radius:16px;transform:translate3d(0,60px,0)} #vr-wheel.v3 .v3-gp h3{font-size:30px} #vr-wheel.v3 .v3-gp-sel p{font-size:12px;margin-bottom:10px} #vr-wheel.v3 .v2-back{top:calc(var(--hdr,44px) + 12px)}}html.vr-hero-on #vhero>h1,html.vr-hero-on #vhero>.cta{display:none}html.vr-hero-boot,html.vr-hero-boot body{background:#050506}#vr-wheel.v4{background:#050506}#vr-wheel.v4::before{content:\"\";position:absolute;inset:0;background:radial-gradient(115% 58% at 50% 64%,#9fa0a4 0%,#6c6d71 20%,#36373b 42%,#121316 63%,#050506 86%);pointer-events:none}#vr-wheel.v4::after{content:\"\";position:absolute;inset:0;z-index:8;background:#050506;opacity:0;pointer-events:none;transition:opacity .9s cubic-bezier(.22,1,.36,1)}#vr-wheel.v4.boot::after{opacity:1;transition:none}#vr-wheel.v4 .v3-bg{transition:none;opacity:var(--ze,0)}#vr-wheel.v4.zoom .v3-bg{opacity:var(--ze,0)}#vr-wheel.v4 .v3-ui,#vr-wheel.v4 .v3-ch,#vr-wheel.v4 .v2-logo,#vr-wheel.v4 .v2-bar{transition:none;opacity:var(--fo,1)}#vr-wheel.v4.zoom .v3-ui,#vr-wheel.v4.zoom .v3-ch,#vr-wheel.v4.zoom .v2-logo,#vr-wheel.v4.zoom .v2-bar{opacity:var(--fo,1)}#vr-wheel.v4 .v3-ui{transform:translateY(calc(-38% + var(--ze,0) * 26px))}#vr-wheel.v4 .v2-logo{transform:translate(-50%,calc(-78% - var(--ze,0) * 20px))}#vr-wheel.v4 .v2-bar{box-shadow:0 0 14px 2px var(--acc,#e8b84b),0 0 46px 10px rgba(232,184,75,.45),0 -14px 120px 40px rgba(232,184,75,.3);box-shadow:0 0 14px 2px var(--acc,#e8b84b),0 0 46px 10px color-mix(in srgb,var(--acc,#e8b84b) 55%,transparent),0 -14px 120px 40px color-mix(in srgb,var(--acc,#e8b84b) 32%,transparent)}#vr-wheel.v4 .v4-fx{position:absolute;inset:0;z-index:4;pointer-events:none; background:radial-gradient(130% 95% at 50% 50%,transparent 55%,rgba(0,0,0,calc(var(--vg,.55))) 100%)}#vr-wheel.v4 .v4-fx::after{content:\"\";position:absolute;inset:-64px;background-image:var(--gimg,none);background-size:128px 128px;opacity:var(--gr,.06);mix-blend-mode:overlay;animation:v4gr 1s steps(6) infinite}@keyframes v4gr{0%{transform:translate(0,0)}17%{transform:translate(-31px,17px)}33%{transform:translate(23px,-41px)}50%{transform:translate(-13px,47px)}67%{transform:translate(41px,9px)}83%{transform:translate(-45px,-23px)}100%{transform:translate(0,0)}}#vr-wheel.v4 .v3-gp{transform:translate3d(56px,0,0) scale(.985);transform-origin:100% 50%;transition:opacity .38s cubic-bezier(.4,0,1,1),transform .42s cubic-bezier(.4,0,1,1),visibility 0s linear .42s;will-change:transform,opacity}#vr-wheel.v4.panel .v3-gp{opacity:1;transform:none;visibility:visible;pointer-events:auto;transition:opacity .62s cubic-bezier(.22,1,.36,1),transform .78s cubic-bezier(.22,1,.36,1),visibility 0s}#vr-wheel.v4 .v3-gp>*,#vr-wheel.v4 .v3-gp-list>*{opacity:0;transform:translate3d(18px,0,0);transition:opacity .25s ease,transform .3s ease}#vr-wheel.v4.panel .v3-gp>*,#vr-wheel.v4.panel .v3-gp-list>*{opacity:1;transform:none;transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}#vr-wheel.v4.panel .v3-gp>:nth-child(1){transition-delay:.12s}#vr-wheel.v4.panel .v3-gp>:nth-child(2){transition-delay:.19s}#vr-wheel.v4.panel .v3-gp>:nth-child(3),#vr-wheel.v4.panel .v3-gp-list>:nth-child(1){transition-delay:.26s}#vr-wheel.v4.panel .v3-gp-list>:nth-child(2){transition-delay:.32s}#vr-wheel.v4.panel .v3-gp-list>:nth-child(n+3){transition-delay:.38s}#vr-wheel.v4.panel .v3-gp>:nth-child(4){transition-delay:.4s}#vr-wheel.v4 .v2-d{transition:opacity .5s cubic-bezier(.22,1,.36,1)}#vr-wheel.v4 .v2-back{opacity:0;transform:translate3d(-10px,0,0);transition:opacity .3s ease,transform .3s ease}#vr-wheel.v4.panel .v2-back{opacity:1;transform:none;transition:opacity .5s ease .2s,transform .6s cubic-bezier(.22,1,.36,1) .2s}@media(max-width:700px){ #vr-wheel.v4 .v3-gp{transform:translate3d(0,72px,0) scale(.985);transform-origin:50% 100%} #vr-wheel.v4 .v3-gp>*,#vr-wheel.v4 .v3-gp-list>*{transform:translate3d(0,14px,0)}}@media(prefers-reduced-motion:reduce){#vr-wheel.v4 *,#vr-wheel.v4::after{transition-duration:.01ms!important;transition-delay:0s!important;animation:none!important}}#vr-intro{position:relative;background:#07080b;color:#f2f0ea;text-align:center;padding:64px 22px 34px;font-family:Sora,system-ui,sans-serif}#vr-intro h1{font-family:Anton,Oswald,Impact,sans-serif;font-weight:400;margin:0 0 22px;font-size:clamp(38px,7vw,84px);line-height:.9;letter-spacing:.01em;background:linear-gradient(180deg,#fff,#f6d477 68%,#b8892b);-webkit-background-clip:text;background-clip:text;color:transparent}#vr-intro .cta{display:inline-flex;gap:12px;flex-wrap:wrap;justify-content:center}#vr-intro .btn{border-radius:12px;padding:15px 30px;font-weight:800;font-size:13px;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;text-decoration:none;border:none;transition:transform .16s;display:inline-block}#vr-intro .btn.g{background:linear-gradient(135deg,#f6d477,#b8892b);color:#1a1206}#vr-intro .btn.o{background:transparent;border:1px solid rgba(255,255,255,.18);color:#f2f0ea}#vr-wheel.v41{box-sizing:border-box;flex:none;height:100vh!important;height:100svh!important;height:100dvh!important;min-height:0!important;max-height:none!important;margin:0!important;padding:0!important}#vr-wheel.v41 .v3-n{font-size:var(--v41-title,46px)}#vr-wheel.v41 .v2-logo{width:clamp(62px,9vh,105px)}#vr-wheel.v42::before{background:radial-gradient(60% 52% at 50% 40%,#2b2417 0%,#17140e 34%,#0a0a0b 66%,#040405 100%),linear-gradient(180deg,transparent 62%,rgba(232,184,75,.05) 80%,transparent 100%)}#vr-wheel.v42 .v2-bar{display:none}#vr-wheel.v42 .v2-logo,#vr-wheel.v42.zoom .v2-logo{display:none}#vr-wheel.vclean,#vr-wheel.vclean canvas{filter:none!important;opacity:1!important;mix-blend-mode:normal!important;isolation:isolate}#vr-wheel.vclean .v4-fx::after{display:none}#vr-wheel.vclean .v4-fx{background:radial-gradient(130% 95% at 50% 50%,transparent 62%,rgba(0,0,0,.35) 100%)}#vr-wheel.vclean .v2-flash{background:radial-gradient(80% 75% at 50% 55%,#2a2110 0%,#120e07 45%,#050506 100%)}#vr-wheel.vclean .v2-big span{color:rgba(232,184,75,.22);text-shadow:none;filter:none}#vr-wheel.vclean .v3-bg{background:radial-gradient(90% 85% at 32% 70%,#1d1a14 0%,#0c0b09 50%,#050506 85%)}#vr-wheel.vclean .v3-gp{background:rgba(10,10,12,.94);-webkit-backdrop-filter:none;backdrop-filter:none}#vr-wheel.vclean .v2-logo img{filter:none}html.vr-packs.vr-hero-on .vr-glare{display:none!important}#vr-wheel.vclean .v3-sel-act span{opacity:1;color:#3a2a0c!important}#vr-wheel.v43 .v3-sel-act,#vr-wheel.v43 .v3-opt,#vr-wheel.v43 .v3-save,#vr-wheel.v43 .v3-note{display:none!important}#vr-wheel.v43 .v43-lad{display:flex;flex-direction:column;gap:8px;margin:12px 0 4px}#vr-wheel.v43 .v43-r{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;box-sizing:border-box;padding:8px 16px;border-radius:14px;background:#15161a;border:1px solid rgba(255,255,255,.14);color:#fff!important;text-decoration:none!important;font:700 13px/1.2 Sora,system-ui,sans-serif;letter-spacing:.06em;transition:border-color .2s ease,background .2s ease}#vr-wheel.v43 .v43-r:hover,#vr-wheel.v43 .v43-r:focus-visible{border-color:#e8b84b;background:#1c1a14;outline:none}#vr-wheel.v43 .v43-r.v43-p1{background:linear-gradient(180deg,#f4cf6e,#e0a93a);border-color:transparent;color:#1a1206!important}#vr-wheel.v43 .v43-r.v43-p1 .v43-ph{background:#1a1206;color:#f4cf6e}#vr-wheel.v43 .v43-l{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px}#vr-wheel.v43 .v43-l small{font-weight:600;font-size:11px;opacity:.75;letter-spacing:.04em}#vr-wheel.v43 .v43-p{white-space:nowrap;font-weight:800;font-size:15px;text-align:right}#vr-wheel.v43 .v43-p s{opacity:.55;font-weight:600;font-size:12px;margin-right:2px}#vr-wheel.v43 .v43-save{font-style:normal;font-size:10px;font-weight:800;letter-spacing:.08em;padding:3px 6px;border-radius:6px;background:#2f7d43;color:#fff;margin-left:4px;vertical-align:2px}#vr-wheel.v43 .v43-ph{font-style:normal;font-size:9px;font-weight:800;letter-spacing:.08em;padding:2px 6px;border-radius:5px;background:#e8b84b;color:#1a1206;text-transform:uppercase}#vr-wheel.v43 .v43-tbd{font-size:12px;letter-spacing:.08em;color:#e8b84b}#vr-wheel.v43 .v43-msg{margin:2px 0 0;font-size:12px;color:rgba(255,255,255,.75)}#vr-wheel.v43 .v43-sheet{display:none}@media(max-width:700px){ #vr-wheel.v43 .v3-gp .v43-lad{display:none} #vr-wheel.v43 .v3-gp{bottom:74px} #vr-wheel.v43 .v2-back{min-height:44px;min-width:88px;box-sizing:border-box} #vr-wheel.v43 .v43-sheet{display:block;position:absolute;left:0;right:0;bottom:0;z-index:7;background:#0d0d10;border-top:1px solid rgba(255,255,255,.14);border-radius:18px 18px 0 0;box-shadow:0 -18px 40px rgba(0,0,0,.55);padding:0 14px calc(12px + env(safe-area-inset-bottom,0px));transform:translate3d(0,105%,0);visibility:hidden;transition:transform .45s cubic-bezier(.22,1,.36,1),visibility 0s linear .45s} #vr-wheel.v43.panel .v43-sheet{transform:none;visibility:visible;transition:transform .55s cubic-bezier(.22,1,.36,1) .1s,visibility 0s} #vr-wheel.v43.panel.v43-closed .v43-sheet{transform:translate3d(0,calc(100% - 64px),0)} #vr-wheel.v43 .v43-sh-hd{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:56px;height:64px;padding:0;margin:0;border:0;background:none;color:#fff;font:800 13px/1 Sora,system-ui,sans-serif;letter-spacing:.12em;cursor:pointer;position:relative} #vr-wheel.v43 .v43-sh-hd i{position:absolute;top:8px;left:50%;width:40px;height:4px;margin-left:-20px;border-radius:4px;background:rgba(255,255,255,.3)} #vr-wheel.v43 .v43-sh-hd b{color:#e8b84b;transition:transform .3s ease} #vr-wheel.v43.v43-closed .v43-sh-hd b{transform:rotate(180deg)} #vr-wheel.v43 .v43-sheet .v43-lad{margin:0 0 4px}}#vr-wheel.v43 .v43-rip{display:block;width:100%;min-height:48px;margin:4px 0 0;border-radius:14px;border:1px dashed rgba(232,184,75,.7);background:transparent;color:#f4cf6e;font:800 12px/1 Sora,system-ui,sans-serif;letter-spacing:.14em;cursor:pointer}#vr-wheel.v43 .v43-rip:hover,#vr-wheel.v43 .v43-rip:focus-visible{background:rgba(232,184,75,.1);outline:none}#vr-wheel.v43 .v43-ripnote{margin:4px 0 0;font-size:11px;color:rgba(255,255,255,.7)}#vr-wheel.v43 .v43-result{display:none;position:absolute;left:28%;bottom:5%;transform:translateX(-50%);z-index:4;pointer-events:none;color:#e8b84b;background:#101014;border:1px solid #514025;border-radius:8px;padding:7px 12px;font:800 10px/1.2 Sora,system-ui,sans-serif;letter-spacing:.12em;white-space:nowrap}#vr-wheel.v43.v43-ripped .v43-result{display:block}@media(max-width:700px){#vr-wheel.v43 .v43-result{left:50%;top:calc(var(--hdr,48px) + 60px);bottom:auto;font-size:8px;padding:4px 8px}}@media(prefers-reduced-motion:reduce){#vr-wheel.v43 .v43-sheet{transition:none!important}}";(document.head||document.documentElement).appendChild(__s);}

/* ===== CONFIG - values marked PLACEHOLDER are undecided; Jacob to confirm ===== */
var CONFIG={
  LIVE_MODE:'v2',                   /* 'v1' = 3D wheel under the pack grid | 'v2' = (live now) 'v2' = full-screen reel-style hero at top | 'off' */
                                    /* preview: ?vr_hero=1 shows v2 (sessionStorage), ?vr_hero=0 clears; ?vr_wheel=1/0 same for v1 when LIVE_MODE is not 'v1' */
  /* ===== v4.3 BUY LADDER - per-pack config (LIVE; ?vr_sealed=0 = emergency off). Drop real values in here; no logic changes needed. =====
     Pricing rule (Jacob, Nov 24 11:47 AM ET): 1 / 3 / 5 packs = unit x qty, NO discount. Case = CASE_QTY x unit x (1 - CASE_DISCOUNT), rounded to whole dollars.
     UNIT_PRICE : 'auto' = the pack's current price (live shop feed, else the price in PACKS below) | a number to override | null = shows PRICE TBD
     CASE_QTY   : packs per case. 50 = REAL (Jacob, Nov 24 12:46 PM ET: "A case is 50 packs."). 0 = no case rung for that pack.
     CASE_PRICE : final case price in dollars (Jacob, Nov 24 12:38 PM ET for MINNOW/SILVER/PLATINUM/THE MEG). When set it OVERRIDES the formula; strike-through + SAVE % only show once CASE_QTY is real.
     CASE_DISCOUNT : null = use the global default below | a rate (0.10 = 10 pct off) to override for that pack.
     HREF       : p1/p3/p5/case links. 'auto' = the pack's product page. '' = PLACEHOLDER link (rung shows a placeholder tag and does not navigate).
     Any rung that still depends on a placeholder shows a visible PLACEHOLDER tag in the preview. */
  LADDER:{
    CASE_DISCOUNT:0.10, CASE_DISCOUNT_PLACEHOLDER:true,  /* PLACEHOLDER global default case discount rate (each pack can override) */
    PACKS:{
     'MINNOW':      {UNIT_PRICE:'auto', CASE_PRICE:1500, CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $35.00 */
     'SILVER':      {UNIT_PRICE:'auto', CASE_PRICE:3500, CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $85.00 */
     'GOLD':        {UNIT_PRICE:'auto', CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $200.00 */
     'PLATINUM':    {UNIT_PRICE:'auto', CASE_PRICE:30000, CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $750.00 */
     'THE MEG':     {UNIT_PRICE:'auto', CASE_PRICE:100000, CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $2,500.00 */
     'GOATED':      {UNIT_PRICE:'auto', CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $250.00 */
     'JERSEY PACK': {UNIT_PRICE:'auto', CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $150.00 */
     'ICONS':       {UNIT_PRICE:'auto', CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $400.00 */
     'FUSION':      {UNIT_PRICE:'auto', CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $65.00 */
     'WAXXED':      {UNIT_PRICE:'auto', CASE_QTY:50, CASE_QTY_PLACEHOLDER:false, CASE_DISCOUNT:null, HREF:{p1:'auto', p3:'', p5:'', 'case':''}}, /* unit now $200.00 */
    }
  },
  THREE_URL:'https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js', /* pinned */
  EASE_MS:520,                      /* PLACEHOLDER snap duration (ease-out cubic, no bounce) */
  VISIBLE_DESKTOP:7, VISIBLE_MOBILE:5, /* PLACEHOLDER items visible */
  IDLE_SPIN:'sway',                 /* PLACEHOLDER 'sway' (+/-SPIN_DEG on Y) or 'full' (continuous 360 deg) */
  SPIN_DEG:28, SPIN_SPEED:.45,      /* PLACEHOLDER idle spin amount/speed */
  BOB:.05,                          /* PLACEHOLDER bob height */
  TILT_DEG:7,                       /* PLACEHOLDER side-item tilt (reel look) */
  DEPTH:.16,                        /* PLACEHOLDER pack thickness (pack height = 1.6) */
  DRAG_THRESHOLD:40,                /* PLACEHOLDER px to count as swipe */
  WHEEL_STEP:60,                    /* PLACEHOLDER horizontal trackpad delta per step */
  ZOOM_MS:900,                      /* PLACEHOLDER tap -> zoom/gradient duration (v1: then navigates; v2: then detail view) */
  ZOOM_HEIGHT:.7, ZOOM_SHIFT:.18,   /* PLACEHOLDER zoomed pack = 70% of height, shifted right */
  DETAIL_SECTION:false,             /* v1 only: no detail section */
  SHOW_BUTTON:true,                 /* PLACEHOLDER small "RIP THIS PACK" under title */
  BUTTON:'RIP THIS PACK \u2192',
  HEADING:'SPIN THE <b>LINEUP</b>', /* PLACEHOLDER copy (v1 eyebrow; '' to hide) */
  INCLUDE_WAXXED:true,              /* PLACEHOLDER */
  LIVE_PRICES:true,                 /* price + description from /shop?format=json */
  HERO:{                            /* ---- v2 only ---- */
    LOGO:'https://images.squarespace-cdn.com/content/v1/6a07374cb09a4817b12ca574/ec8a26b8-0015-463d-ae86-cf8fb7e5c900/1FC667DF-0CEC-492B-AE35-57E615F4CECC.png?format=300w', /* centered logo in the halo ('' = use header logo) */
    DOF:true, DOF_PX:7,             /* PLACEHOLDER depth blur on side packs (WebGL2 pass; else blurred textures) */
    SHOW_PRICE:true,                /* PLACEHOLDER small price + RIP THIS PACK under the title (reel has none) */
    DETAIL_PX:2600,                 /* PLACEHOLDER scroll distance to go through the 3 detail blocks */
    DETAIL_TURNS:1,                 /* PLACEHOLDER pack Y turns across the detail scroll */
    OUTRO:.45,                      /* PLACEHOLDER outro length (big text scales toward camera, then page scroll resumes) */
    OUTRO_TEXT:'VANTA',             /* PLACEHOLDER big outro text ('{NAME}' = pack name) */
    BACK_MS:850,                    /* back-to-wheel animation (same cinematic curve, reversed) */
    ZOOM_MS:950,                    /* tap -> pack slides aside (one eased tween, cubic-bezier(.65,0,.35,1)) */
    PANEL_AT:.28,                   /* panel starts sliding in at this point of the pack tween (overlap = one motion) */
    SPRING_K:58, SPRING_DAMP:1.0,   /* wheel spin spring (stiffness, 1 = critically damped, no bounce) */
    IDLE_K:.62,                     /* idle sway amount vs CONFIG.SPIN_DEG (slower, more refined) */
    EXPOSURE:1.0, ENV_FRONT:.75,    /* tone-mapping exposure, studio reflection strength on the art */
    FOIL:.22,                       /* foil/iridescent sheen strength (desktop only; 0 = off) */
    CLEAN:false,                    /* LIVE: forced true at runtime for everyone. v4.2 glare fix: packs render unlit at true art colors (no sheen, clearcoat, foil, bloom, env reflections, tone-map wash, white flash, grain overlay, panel blur). false = v4.1 look */
    BLOOM:.9,                       /* glow/bloom on bright areas (floor bar, highlights); post pass, WebGL2 only */
    GRAIN:.035, VIGNETTE:.5,        /* film grain / vignette strength (CSS overlay, 0 = off) */
    REFLECT:.09,                    /* floor reflection strength */
    BOOT_MAX_MS:3500,               /* dark backdrop until the first packs are textured (or this timeout) */
    STAGE:'pedestal',               /* LIVE: forced 'reveal' at runtime for everyone. v4.2: 'reveal' = dark stage, gold rim light, spotlight cone, foil dust, big faint logo | 'pedestal' = v4.1 ring + pedestal + light bar */
    STAGE_GOLD:'#e8b84b', CONE:.06, POOL:.12, DUST:.7, BACK_GLOW:.10, LOGO_MARK:.18, /* reveal-stage strengths (PLACEHOLDER tuning) */
    INTRO_MOVE:true,                /* hero mode: move the "EVERY PACK IS A SHOT AT GREATNESS" title + buttons from #vhero to just above the shop section */
    HEADER_CLEAR:true,              /* PLACEHOLDER header background transparent while the hero is on screen */
    HIDE_HEADER_LOGO:true,  /* GATED: flag on = false */          /* PLACEHOLDER hide the header's left logo while the hero is on screen (logo shows centered in the halo instead) */
    TITLES:['','WHAT\'S INSIDE',''],/* PLACEHOLDER detail headings (1 = pack name, 3 = price) */
    FALLBACK:['A multi-sport card mystery repack built for the thrill of the rip.','Each pack contains one randomly selected raw or professionally graded sports card.','Every pack is a shot at greatness. Rip it and chase the hit.'], /* PLACEHOLDER copy */
    COPY:{},                        /* PLACEHOLDER per-pack overrides: {'/shop/p/vanta-icons':{h1:'',p1:'',h2:'',p2:'',h3:'',p3:''}} */
    /* ---- v3 detail: pack shifts aside, Gold panel + case option ---- */
    SHIFT_X:.2,                     /* desktop: pack moves LEFT by this share of the view width */
    MOB_Y:1.0, MOB_SCALE:.5,        /* 390px phone: pack moves UP (scene units) and shrinks so the panel fits below */
    GOLD_PANEL:true,                /* panel of VANTA Gold packs, live from /shop?format=json */
    GOLD_MATCH:'gold',              /* matched as a whole word in product title / categories / tags */
    GOLD_TITLE:'VANTA GOLD PACKS',
    GOLD_LINKS:[['Vol. 1 checklist','/vanta-gold-vol-1'],['Vol. 2 checklist','/vanta-gold-vol-2'],['Vol. 3 checklist','/vanta-gold-vol-3']], /* existing site pages ([] to hide) */
    CASE:{                          /* full-case option - PLACEHOLDER until Jacob confirms */
      PRICE:7500,                   /* PLACEHOLDER case price in USD (the one constant to change) */
      PACKS_PER_CASE:50,           /* PLACEHOLDER packs per case (NOT confirmed) for the "case saves" line; 0 = show "discount TBD" */
      FOR:'gold',                   /* products offered as a case (word match on product title) */
      LINK:'/contact',              /* PLACEHOLDER action: no case product exists, so the case button opens the Contact page */
      BTN:'REQUEST A CASE \u2192',
      NOTE:'Case checkout isn\'t set up yet. This opens our Contact page so you can request a full case. Price shown is a placeholder.'
    }
  },
  /* PLACEHOLDER PACK_ORDER - reorder/delete lines. [name, path, image, fallback price, accent color ('auto' = sample image)] */
  PACKS:[
   ['MINNOW','/shop/p/vanta-minnow-edition-multi-sport','f35257e4-b1ac-45d2-9ec6-9e4b043eca44/11E55D8A-91EE-4E2A-B156-555C6DBBF59E.PNG','$35.00','#2b9ed8'],
   ['SILVER','/shop/p/vanta-leviathan-multi-sports','d9717e83-8f84-462f-853d-526bce921361/528996AC-481B-4338-AD45-2F80239C8F9F.png','$85.00','#c9d2de'],
   ['GOLD','/shop/p/vanta-halo-multi-sports','7da6e972-a8d7-4d23-9a26-1154a74a3d37/207C76C6-1986-417C-B386-1BAA9D32879D.png','$200.00','#e8a81c'],
   ['PLATINUM','/shop/p/vanta-genesis-multi-sports','86735acf-0856-4826-a952-3d6a98f6da29/C21D411E-4492-4EC7-9B67-072ADBA5BEA0.png','$750.00','#8fa9d8'],
   ['THE MEG','/shop/p/vanta-the-meg-edition-multi-sport','bec02eca-eb67-495a-8d8f-6ef2d6f9ee84/5CB7E55B-BE45-43C9-9AA6-A30397A72DF2.PNG','$2,500.00','#3193d8'],
   ['GOATED','/shop/p/vanta-goated-edition','51f49510-767c-42f6-848b-bcb9b8695225/492D2233-A223-42AC-B488-93144FC6146D.png','$250.00','#d8ab61'],
   ['JERSEY PACK','/shop/p/vanta-jersy-pack-multi-sports','da5a4acc-4530-42a6-9f73-b5cae03fac20/vanta-jersey-box-v2.png','$150.00','#d89a50'],
   ['ICONS','/shop/p/vanta-icons','b79d7c99-b317-4ede-9bba-02226fed4e60/vanta-icons-box.png','$400.00','#c98d5a'],
   ['FUSION','/shop/p/vanta-fusion','dc1fa0e0-2f99-423f-a282-11263ddf3892/VANTA-FUSION.png','$65.00','#c75fd8'],
   ['WAXXED','/shop/p/vanta-waxxed','2495f257-a60c-4b2b-8a2b-af07ab9663e6/vanta-waxxed.png','$200.00','#e0b040']
  ]
};
var IMG='https://images.squarespace-cdn.com/content/v1/6a07374cb09a4817b12ca574/';
var ss;try{ss=window.sessionStorage;}catch(e){}
function QS(){return location.search;}
function flag(k){var q=QS();if(new RegExp('[?&]'+k+'=0\\b').test(q)){try{ss&&ss.removeItem(k);}catch(e){}}else if(new RegExp('[?&]'+k+'=1\\b').test(q)){try{ss&&ss.setItem(k,'1');}catch(e){}}}
flag('vr_wheel');flag('vr_hero');flag('vr_packs');flag('vr_sealed');
function has(k){if(new RegExp('[?&]'+k+'=0\\b').test(QS()))return false;if(new RegExp('[?&]'+k+'=1\\b').test(QS()))return true;try{return !!(ss&&ss.getItem(k)==='1');}catch(e){return false;}}
function home(){var p=location.pathname;return p==='/'||p==='';}
function heroOn(){if(!home()||/[?&]vr_hero=0\b/.test(QS()))return false;return CONFIG.LIVE_MODE==='v2'||has('vr_hero')||has('vr_packs');}
/* v4.2 preview gate: ?vr_packs=1 (sessionStorage; ?vr_packs=0 clears). ALL v4.2 changes key off this. Off = exact v4.1 hero. */
var VR_PACKS=home(); /* LIVE: v4.2 on for everyone (Jacob approved Nov 24 10:26 AM ET); ?vr_packs is now a harmless no-op flag */CONFIG.HERO.CLEAN=VR_PACKS;CONFIG.HERO.STAGE=VR_PACKS?'reveal':'pedestal';CONFIG.HERO.HIDE_HEADER_LOGO=!VR_PACKS;
/* v4.3 LIVE (Jacob approved Nov 24 2:04 PM ET): sealed packs + ladder + phone fit + rip ON for everyone. Emergency off: ?vr_sealed=0 (rest of the tab session; ?vr_sealed=1 turns it back on). Off = exact v4.2. */
var VR_V43=home()&&(function(){var q=QS();try{if(/[?&]vr_sealed=0\b/.test(q)){ss&&ss.setItem('vr_sealed_off','1');return false;}if(/[?&]vr_sealed=1\b/.test(q)){ss&&ss.removeItem('vr_sealed_off');return true;}return !(ss&&ss.getItem('vr_sealed_off')==='1');}catch(e){return !/[?&]vr_sealed=0\b/.test(q);}})();CONFIG.HERO.V43=VR_V43;if(VR_V43){try{document.documentElement.classList.add('vr-v43');}catch(e){}}if(VR_PACKS){try{document.documentElement.classList.add('vr-packs');}catch(e){}}
function on(){if(!home()||heroOn()||/[?&]vr_wheel=0\b/.test(location.search))return false;return CONFIG.LIVE_MODE==='v1'||has('vr_wheel');}
/* hero mode: flag the page immediately (before anything else builds) so intro copy never shows before the wheel */
if(!heroOn()){try{document.documentElement.classList.remove('vr-hero-boot');}catch(e){}}
if(heroOn()){setTimeout(function(){document.documentElement.classList.remove('vr-hero-boot');},6000);try{var de0=document.documentElement;de0.classList.add('vr-hero-on','vr-hero-boot');if(CONFIG.HERO.HIDE_HEADER_LOGO)de0.classList.add('vr-hero-top');if(CONFIG.HERO.HEADER_CLEAR)de0.classList.add('vr-hdr-clear');}catch(e){}}
var packs=CONFIG.PACKS.filter(function(p){return CONFIG.INCLUDE_WAXXED||!/waxxed/i.test(p[1]);}).map(function(p){return{n:p[0],u:p[1],img:IMG+p[2],pr:p[3],acc:p[4]||'auto'};});
var N=packs.length;if(N<3)return;
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function mod(a){return((a%N)+N)%N;}
function wrapD(d){return d-N*Math.round(d/N);}
var priceCbs=[];
function prices(){if(!CONFIG.LIVE_PRICES||!window.fetch){shopErr=true;return;}fetch('/shop?format=json',{credentials:'same-origin'}).then(function(r){return r.ok?r.json():null;}).then(function(j){
  if(!j||!Array.isArray(j.items))throw new Error('Invalid shop feed');var by={};j.items.forEach(function(it){if(it&&it.fullUrl)by[it.fullUrl]=it;});
  packs.forEach(function(p){var it=by[p.u];if(!it)return;var vs=(it.variants||[]).map(function(v){var m=v.onSale?v.salePriceMoney:v.priceMoney;return m&&parseFloat(m.value);}).filter(function(x){return x>0;});
    if(vs.length){var lo=Math.min.apply(null,vs),hi=Math.max.apply(null,vs);p.pr=(hi>lo?'From ':'')+'$'+lo.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
    var v=it.variants||[];p.sold=v.length&&v.every(function(x){return !x.unlimited&&!(x.qtyInStock>0);});
    if(typeof cleanEx==='function')p.ex=cleanEx(it.excerpt||it.body||'');});
  shopItems=j.items;priceCbs.forEach(function(f){try{f();}catch(e){}});}).catch(function(){shopErr=true;priceCbs.forEach(function(f){try{f();}catch(e){}});});}
var shopItems=null,shopErr=false;
function cleanEx(s){s=String(s||'').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#39;|&rsquo;/g,"'").replace(/[\u2600-\u27BF]|[\uD800-\uDFFF]|\uFE0F/g,'').replace(/\s+/g,' ').trim();
  if(s.indexOf('|')>=0)s=s.replace(/^[^a-z]*?(?=[A-Z][a-z])/,'');return s.replace(/^.*?COMING SOON\s*/i,'');}
function hasGL(){try{var c=document.createElement('canvas');return !!(window.WebGLRenderingContext&&(c.getContext('webgl2')||c.getContext('webgl')));}catch(e){return false;}}

/* ---- v1 (unchanged): 3D wheel under the pack grid ---- */
function build(){
  if(heroOn())return buildHero();
  if(!on()||document.getElementById('vr-wheel'))return true;
  var hero=document.getElementById('vhero');if(!hero)return false;
  var W=document.createElement('section');W.id='vr-wheel';W.setAttribute('aria-roledescription','carousel');W.setAttribute('aria-label','VANTA pack lineup');
  hero.parentNode.insertBefore(W,hero.nextSibling);
  prices();
  if(reduce||!hasGL()){cssWheel(W,reduce);return true;}
  W.className='m3d';
  W.innerHTML='<div class="v3-bg"></div><div class="v3-c" tabindex="0" aria-label="Pack wheel. Left and right arrow keys to browse, Enter to open."></div><div class="v3-ld"></div>'+
   '<button type="button" class="v3-ch l" aria-label="Previous pack">&#8249;</button><button type="button" class="v3-ch r" aria-label="Next pack">&#8250;</button>'+
   '<div class="v3-ui" aria-live="polite"><h2 class="v3-e">'+CONFIG.HEADING+'</h2><div class="v3-n"></div><div class="v3-p"></div>'+(CONFIG.SHOW_BUTTON?'<a class="v3-b" href="#">'+esc(CONFIG.BUTTON)+'</a>':'')+'</div>';
  var started=false;
  function start(){if(started)return;started=true;loadThree(function(ok){if(!ok||!W.isConnected){fallback();return;}try{gl3d(W,fallback);}catch(e){if(window.console)console.warn('vr-wheel 3d',e);fallback();}});}
  function fallback(){if(!W.isConnected)return;if(W.__gl)try{W.__gl();}catch(e){}W.className='';W.innerHTML='';cssWheel(W,false);}
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){if(e.some(function(x){return x.isIntersecting;})){io.disconnect();start();}},{rootMargin:'600px 0px'});io.observe(W);}else start();
  return true;
}
/* ---- v2: full-screen hero at the very top (before #vhero) ---- */
function buildHero(){
  if(document.getElementById('vr-wheel'))return true;
  var hero=document.getElementById('vhero'),pg=document.getElementById('page')||document.querySelector('main'),anc=hero||pg;if(!anc||!anc.parentNode)return false;
  var W=document.createElement('section');W.id='vr-wheel';W.setAttribute('aria-roledescription','carousel');W.setAttribute('aria-label','VANTA pack lineup');
  anc.parentNode.insertBefore(W,anc);document.documentElement.classList.add('vr-hero-on');
  keepFirst(W);
  /* A restored scroll offset made the fullscreen hero appear cropped on short screens. Only reset the INITIAL hero visit, never user scrolling. */
  if(!location.hash){var touched=false;function userMoved(){touched=true;}['wheel','touchstart','pointerdown','keydown'].forEach(function(ev){addEventListener(ev,userMoved,{once:true,passive:true});});
    function firstTop(){if(!touched&&W.isConnected)window.scrollTo(0,0);}firstTop();addEventListener('load',firstTop,{once:true});addEventListener('pageshow',firstTop,{once:true});}
  prices();
  function css(){W.className='';W.innerHTML='';cssWheel(W,reduce);W.classList.add('v2css');document.documentElement.classList.remove('vr-hero-boot');}
  if(reduce||!hasGL()){css();return true;}
  W.className='m3d v2 v3 v4 v41'+(CONFIG.HERO.STAGE==='pedestal'?'':' v42')+(CONFIG.HERO.CLEAN?' vclean':'')+(CONFIG.HERO.V43?' v43':'')+' boot';var B=esc(CONFIG.BUTTON);
  W.innerHTML='<div class="v3-bg"></div><div class="v2-flash"></div><div class="v2-big" aria-hidden="true"><span>VANTA</span></div><div class="v3-c" tabindex="0" aria-label="Pack wheel. Left and right arrow keys to browse, Enter to open."></div><div class="v3-ld"></div>'+
   '<div class="v4-fx" aria-hidden="true"></div><div class="v2-logo" aria-hidden="true"><img alt=""></div><div class="v2-bar" aria-hidden="true"></div>'+
   '<button type="button" class="v3-ch l" aria-label="Previous pack">&#8249;</button><button type="button" class="v3-ch r" aria-label="Next pack">&#8250;</button>'+
   '<div class="v3-ui v2-ui" aria-live="polite"><div class="v3-n"></div>'+(CONFIG.HERO.SHOW_PRICE?'<div class="v2-sub"><span class="v3-p"></span><a class="v3-b" href="#">'+B+'</a></div>':'<span class="v3-p" hidden></span>')+'</div>'+
   '<div class="v2-d" aria-label="Pack details"><button type="button" class="v2-back">&#8592; BACK</button><div class="v2-prog"><i></i></div>'+
   [0,1,2].map(function(){return '<div class="v2-blk"><div class="v2-tag"></div><h3></h3><p></p></div>';}).join('')+'<a class="v2-cta" href="#">'+B+'</a><aside class="v3-gp" aria-label="VANTA Gold packs"></aside></div>';
  var fx=W.querySelector('.v4-fx'),gu=(CONFIG.HERO.GRAIN>0&&!CONFIG.HERO.CLEAN)?grainURL():'';if(VR_PACKS)W.style.setProperty('--vr-mark',CONFIG.HERO.LOGO_MARK);if(fx){fx.style.setProperty('--gr',CONFIG.HERO.GRAIN);fx.style.setProperty('--vg',CONFIG.HERO.VIGNETTE);if(gu)fx.style.setProperty('--gimg','url('+gu+')');}
  loadThree(function(ok){if(!ok||!W.isConnected){css();return;}try{hero3d(W,css);}catch(e){if(window.console)console.warn('vr-wheel v2',e);css();}});
  return true;
}
function loadThree(cb){
  if(window.THREE&&THREE.WebGLRenderer)return cb(true);
  var done=false,s=document.createElement('script');s.src=CONFIG.THREE_URL;s.async=true;s.crossOrigin='anonymous';
  var t=setTimeout(function(){if(!done){done=true;cb(false);}},12000);
  s.onload=function(){if(done)return;done=true;clearTimeout(t);cb(!!(window.THREE&&THREE.WebGLRenderer));};
  s.onerror=function(){if(done)return;done=true;clearTimeout(t);cb(false);};
  document.head.appendChild(s);
}
/* hero mode: wheel stays first (site polish inserts #vhero later at the top), intro copy moves down above the shop */
function keepFirst(W){var par=W.parentNode;function fix(){var v=document.getElementById('vhero');if(v&&v.parentNode===par&&(W.compareDocumentPosition(v)&Node.DOCUMENT_POSITION_PRECEDING))par.insertBefore(W,v);if(v)moveIntro(v);}
  fix();if('MutationObserver' in window){var mo=new MutationObserver(fix);mo.observe(par,{childList:true});setTimeout(function(){mo.disconnect();},20000);}}
function moveIntro(v){if(!CONFIG.HERO.INTRO_MOVE||document.getElementById('vr-intro'))return;var h1=v.querySelector(':scope>h1'),cta=v.querySelector(':scope>.cta');if(!h1&&!cta)return;
  var pg=document.getElementById('page')||document.querySelector('main');if(!pg||!pg.parentNode)return;var box=document.createElement('div');box.id='vr-intro';
  if(h1)box.appendChild(h1);if(cta)box.appendChild(cta);
  pg.parentNode.insertBefore(box,pg);}
function grainURL(){try{var c=document.createElement('canvas');c.width=c.height=128;var g=c.getContext('2d'),d=g.createImageData(128,128);for(var i=0;i<d.data.length;i+=4){var v=Math.random()*255|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255;}g.putImageData(d,0,0);return c.toDataURL();}catch(e){return '';}}
/* ---- WebGL wheel (Three.js r149) ---- */
function gl3d(W,fallback){
  var T=THREE,box=W.querySelector('.v3-c'),nE=W.querySelector('.v3-n'),pE=W.querySelector('.v3-p'),bE=W.querySelector('.v3-b');
  var R=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
  R.setPixelRatio(Math.min(window.devicePixelRatio||1,2));R.outputEncoding=T.sRGBEncoding;R.toneMapping=T.ACESFilmicToneMapping;R.setClearColor(0,0);
  box.appendChild(R.domElement);var ld=W.querySelector('.v3-ld');if(ld)ld.remove();
  var S=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,60);S.fog=new T.Fog(0x0b0c10,7.6,12);
  function cv(w,h,f){var c=document.createElement('canvas');c.width=w;c.height=h;f(c.getContext('2d'),w,h);return c;}
  var env=new T.CanvasTexture(cv(256,128,function(g,w,h){var gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#000');gr.addColorStop(.36,'#4a4a4a');gr.addColorStop(.48,'#fff');gr.addColorStop(.56,'#2a2a2a');gr.addColorStop(1,'#000');g.fillStyle=gr;g.fillRect(0,0,w,h);g.fillStyle='#fff';g.fillRect(w*.18,h*.12,w*.1,h*.14);g.fillRect(w*.66,h*.14,w*.12,h*.1);}));
  env.mapping=T.EquirectangularReflectionMapping;env.encoding=T.sRGBEncoding;var pm=new T.PMREMGenerator(R);S.environment=pm.fromEquirectangular(env).texture;env.dispose();pm.dispose();
  S.add(new T.AmbientLight(0xffffff,.22));
  var spot=new T.SpotLight(0xffffff,1.7,22,.34,.6,1);spot.position.set(0,5.5,4.5);S.add(spot,spot.target);
  var key=new T.DirectionalLight(0xffffff,.3);key.position.set(-3,2,5);S.add(key);
  var glow=new T.PointLight(0xe8b84b,2.4,6,2);glow.position.set(0,-1.25,1.1);S.add(glow);
  var FY=-1.05,H=1.6,geo=new T.BoxGeometry(1,1,1),loader=new T.TextureLoader();loader.setCrossOrigin('anonymous');
  var mirror=new T.Group();mirror.scale.y=-1;mirror.position.y=2*FY;S.add(mirror);
  var items=[],meshes=[],fades=[];
  function fm(m){fades.push(m);return m;}
  packs.forEach(function(p,i){
    var acc=new T.Color(p.acc==='auto'?'#e8b84b':p.acc);
    var front=new T.MeshStandardMaterial({color:0xffffff,roughness:.32,metalness:.12,envMapIntensity:.55}),
        back=new T.MeshStandardMaterial({color:0x555555,roughness:.4,metalness:.2,envMapIntensity:.5}),
        side=new T.MeshStandardMaterial({color:acc.clone().multiplyScalar(.5),roughness:.26,metalness:.9});
    var mats=[side,side,side,side,front,back],g=new T.Group(),m=new T.Mesh(geo,mats);m.userData.i=i;g.add(m);S.add(g);meshes.push(m);
    var rm=mats.map(function(x){var c=x.clone();c.transparent=true;c.opacity=.09;c.depthWrite=false;return c;}),rg=new T.Group(),r=new T.Mesh(geo,rm);rg.add(r);mirror.add(rg);
    var it={g:g,m:m,rg:rg,r:r,mats:[side,front,back],rm:rm,acc:acc,w:H*.72,h:H,ph:i*1.37};items.push(it);
    loader.load(p.img+'?format=750w',function(t){t.encoding=T.sRGBEncoding;t.anisotropy=Math.min(8,R.capabilities.getMaxAnisotropy());
      [front,back,rm[4],rm[5]].forEach(function(x){x.map=t;x.needsUpdate=true;});it.ok=1;
      var a=t.image.width/t.image.height;if(a<1){it.h=H;it.w=H*a;}else{it.w=Math.min(1.35,H*a);it.h=it.w/a;}
      if(p.acc==='auto'){var c=sample(t.image);if(c){it.acc=c;side.color.copy(c).multiplyScalar(.5);}}
      chev();});
  });
  function sample(img){try{var d=cv(24,24,function(g){g.drawImage(img,0,0,24,24);}).getContext('2d').getImageData(0,0,24,24).data,r=0,g=0,b=0,w=0;
    for(var i=0;i<d.length;i+=4){var mx=Math.max(d[i],d[i+1],d[i+2]),mn=Math.min(d[i],d[i+1],d[i+2]),s=mx?(mx-mn)/mx:0,k=s*s*mx/255+.02;r+=d[i]*k;g+=d[i+1]*k;b+=d[i+2]*k;w+=k;}
    var c=new T.Color(r/w/255,g/w/255,b/w/255),h={};c.getHSL(h);c.setHSL(h.h,Math.max(h.s,.5),.55);return c;}catch(e){return null;}}
  /* pedestal, halo, light bar, back glow */
  var metal=fm(new T.MeshStandardMaterial({color:0xb0b3ba,metalness:1,roughness:.22})),dark=fm(new T.MeshStandardMaterial({color:0x17181c,metalness:.8,roughness:.35}));
  var ped=new T.Group(),p1=new T.Mesh(new T.CylinderGeometry(.62,.74,.16,56),dark),p2=new T.Mesh(new T.CylinderGeometry(.5,.56,.06,56),metal),p3=new T.Mesh(new T.TorusGeometry(.67,.022,12,72),metal);
  p2.position.y=.11;p3.rotation.x=Math.PI/2;p3.position.y=.07;ped.add(p1,p2,p3);ped.position.y=FY+.08;S.add(ped);
  var halo=new T.Group(),h1=new T.Mesh(new T.TorusGeometry(.56,.035,16,80),metal),h2=new T.Mesh(new T.TorusGeometry(.4,.018,12,64),metal),h3=new T.Mesh(new T.CylinderGeometry(.44,.5,.03,56),dark);
  h1.rotation.x=h2.rotation.x=Math.PI/2;h2.position.y=.03;halo.add(h1,h2,h3);halo.position.y=1.36;S.add(halo);
  var pill=new T.CanvasTexture(cv(256,64,function(g,w,h){g.shadowColor='#fff';g.shadowBlur=18;g.fillStyle='#fff';g.beginPath();var r=10,x=28,y=h/2-r,ww=w-56;g.moveTo(x+r,y);g.arc(x+ww-r,y+r,r,-Math.PI/2,Math.PI/2);g.arc(x+r,y+r,r,Math.PI/2,Math.PI*1.5);g.fill();g.fill();}));
  var soft=new T.CanvasTexture(cv(128,128,function(g,w,h){var gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.4,'rgba(255,255,255,.35)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,w,h);}));
  function add(mat){mat.transparent=true;mat.depthWrite=false;mat.blending=T.AdditiveBlending;mat.fog=false;return fm(mat);}
  var barM=add(new T.MeshBasicMaterial({map:pill,color:0xe8b84b})),bar=new T.Mesh(new T.PlaneGeometry(2.6,.65),barM);bar.rotation.x=-Math.PI/2;bar.position.set(0,FY+.002,.75);S.add(bar);
  var barM2=add(new T.MeshBasicMaterial({map:pill,color:0xffffff,opacity:.35})),bar2=new T.Mesh(new T.PlaneGeometry(1.7,.3),barM2);bar2.rotation.x=-Math.PI/2;bar2.position.set(0,FY+.004,.75);S.add(bar2);
  var bgM=add(new T.MeshBasicMaterial({map:soft,color:0xe8b84b,opacity:.32})),bg=new T.Mesh(new T.PlaneGeometry(6,4),bgM);bg.position.set(0,-.7,-1.6);S.add(bg);
  var floorT=new T.CanvasTexture(cv(4,128,function(g,w,h){var gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(7,8,11,0)');gr.addColorStop(.45,'rgba(7,8,11,.45)');gr.addColorStop(1,'rgba(7,8,11,.97)');g.fillStyle=gr;g.fillRect(0,0,w,h);}));floorT.encoding=T.sRGBEncoding;
  var flM=fm(new T.MeshBasicMaterial({map:floorT,transparent:true,depthWrite:false,fog:false})),fl=new T.Mesh(new T.PlaneGeometry(30,8),flM);fl.rotation.x=-Math.PI/2;fl.position.set(0,FY-.001,0);fl.renderOrder=1;S.add(fl);
  bar.renderOrder=bar2.renderOrder=2;
  var ray=new T.Raycaster(),v2=new T.Vector2(),accNow=new T.Color(0xe8b84b);
  /* layout */
  var L={R:5.2,S:.32,V:3},cur=0,from=0,to=0,t0=0,anim=false,act=-1,zoom=null,mob=false,cw=1,ch=1;
  function size(){cw=W.clientWidth||innerWidth;mob=cw<700;ch=mob?Math.round(Math.max(540,Math.min(620,cw*1.5))):Math.round(Math.min(780,Math.max(680,cw*.56)));
    W.style.setProperty('--v3h',ch+'px');W.style.setProperty('--v3z',CONFIG.ZOOM_MS+'ms');R.setSize(cw,ch,false);cam.aspect=cw/ch;cam.position.set(0,.25,mob?8.4:7.4);cam.lookAt(0,-.28,0);cam.updateProjectionMatrix();
    L=mob?{R:2.2,S:.48,V:Math.floor(CONFIG.VISIBLE_MOBILE/2)}:{R:5.2,S:.3,V:Math.floor(CONFIG.VISIBLE_DESKTOP/2)};chev();}
  function chev(){var it=items[act<0?0:act];if(!it)return;var visH=2*cam.position.z*Math.tan(cam.fov*Math.PI/360),px=ch/visH;
    W.style.setProperty('--v3cx',Math.round(it.w*px/2+(mob?34:56))+'px');W.style.setProperty('--v3cy',Math.round(ch*.47)+'px');}
  function ui(){var p=packs[act];nE.textContent=p.n;pE.textContent=p.pr+(p.sold?' \u00b7 SOLD OUT':'');if(bE){bE.href=p.u;bE.setAttribute('aria-label',CONFIG.BUTTON.replace(/\W+$/,'')+': '+p.n);}
    var c=items[act].acc;W.style.setProperty('--acc','#'+c.getHexString());W.style.setProperty('--acc2','#'+c.clone().multiplyScalar(.32).getHexString());chev();}
  priceCbs.push(function(){if(act>=0)ui();});
  function go(n){if(zoom)return;from=cur;to=Math.round(anim?to:cur)+n;t0=performance.now();anim=true;kick();}
  function goTo(i){go(wrapD(i-mod(Math.round(anim?to:cur))));}
  function startZoom(i,url){if(zoom)return;zoom={i:i,t0:performance.now()};W.classList.add('zoom');fades.concat.apply(fades,items.filter(function(x,k){return k!==i;}).map(function(x){return x.mats.concat(x.rm);})).forEach(function(m){m.transparent=true;m.needsUpdate=true;});kick();setTimeout(function(){if(!window.__vrNoNav)location.href=url;},CONFIG.ZOOM_MS);}
  function reset(){zoom=null;W.classList.remove('zoom');items.forEach(function(x){x.mats.forEach(function(m){m.transparent=false;m.opacity=1;m.needsUpdate=true;});});[metal,dark].forEach(function(m){m.transparent=false;m.opacity=1;m.needsUpdate=true;});kick();}
  window.addEventListener('pageshow',function(e){if(e.persisted)reset();});
  function ease(k){return 1-Math.pow(1-k,3);}
  function frame(now){
    var t=now/1000;
    if(anim&&!drag){var k=Math.min(1,(now-t0)/CONFIG.EASE_MS);cur=from+(to-from)*ease(k);if(k>=1){anim=false;cur=to;}}
    var a=mod(Math.round(cur));if(a!==act){act=a;ui();}
    accNow.lerp(items[act].acc,.08);glow.color.copy(accNow);barM.color.copy(accNow);bgM.color.copy(accNow);
    var z=zoom?Math.min(1,(now-zoom.t0)/CONFIG.ZOOM_MS):0,ze=z<.5?2*z*z:1-Math.pow(-2*z+2,2)/2,fo=1-ze;
    var visH=2*cam.position.z*Math.tan(cam.fov*Math.PI/360),visW=visH*cam.aspect,sp=CONFIG.SPIN_DEG*Math.PI/180;
    items.forEach(function(it,i){
      var d=wrapD(i-cur),ad=Math.abs(d),g=it.g,show=ad<=L.V+.6;
      if(zoom&&i!==zoom.i)show=show&&fo>.01;g.visible=it.rg.visible=show;if(!show)return;
      var an=d*L.S,s=Math.max(.55,1-.09*ad),bob=Math.sin(t*.9+it.ph*1.7)*CONFIG.BOB,spin=CONFIG.IDLE_SPIN==='full'?t*CONFIG.SPIN_SPEED*.7+it.ph:Math.sin(t*CONFIG.SPIN_SPEED+it.ph)*sp*Math.min(1,.45+ad*.4);
      var x=L.R*Math.sin(an),zz=L.R*(Math.cos(an)-1),y=.1+bob,ry=an+spin,rz=Math.sin(it.ph*2.3)*CONFIG.TILT_DEG*Math.PI/180*Math.min(1,ad),sc=s;
      if(zoom&&i===zoom.i){var f=CONFIG.ZOOM_HEIGHT*visH/it.h;x+=(visW*CONFIG.ZOOM_SHIFT*(mob?.35:1)-x)*ze;zz+=(0-zz)*ze;y+=(-.28-y)*ze;ry+=(-.32-ry)*ze;rz*=fo;sc=s+(f-s)*ze;}
      g.position.set(x,y,zz);g.rotation.set(0,ry,rz);it.m.scale.set(it.w*sc,it.h*sc,CONFIG.DEPTH*sc);
      it.rg.position.copy(g.position);it.rg.rotation.copy(g.rotation);it.r.scale.copy(it.m.scale);
      var b=Math.pow(Math.max(.22,1-.3*ad),2.2),op=(zoom&&i!==zoom.i)?fo:1;
      if(!it.ok)b*=.04;it.mats[1].color.setScalar(b);it.mats[1].envMapIntensity=.55*b;it.mats[2].color.setScalar(b*.45);
      it.mats.forEach(function(m){m.opacity=op;});it.rm.forEach(function(m){m.opacity=.09*Math.max(0,1-ad*.3)*(zoom?fo:1);});
    });
    fades.forEach(function(m){if(m.transparent&&m.blending!==T.AdditiveBlending)m.opacity=fo;});
    barM.opacity=fo;barM2.opacity=.35*fo;bgM.opacity=.32*fo;
    halo.visible=ped.visible=fo>.01;halo.rotation.y=t*.4;halo.position.y=1.36+Math.sin(t*1.1)*.04;ped.rotation.y=-t*.25;
    R.render(S,cam);
  }
  /* loop + pause offscreen / hidden */
  var raf=0,vis=true,dead=false;
  function loop(now){raf=0;if(dead||!vis||document.hidden||!W.isConnected)return;try{frame(now);}catch(e){dead=true;if(window.console)console.warn('vr-wheel',e);fallback();return;}raf=requestAnimationFrame(loop);}
  function kick(){if(!raf&&!dead&&vis&&!document.hidden)raf=requestAnimationFrame(loop);}
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[e.length-1].isIntersecting;kick();},{rootMargin:'100px 0px'}).observe(W);
  document.addEventListener('visibilitychange',kick);
  R.domElement.addEventListener('webglcontextlost',function(e){e.preventDefault();dead=true;fallback();});
  W.__gl=function(){dead=true;if(raf)cancelAnimationFrame(raf);try{R.dispose();}catch(e){}};
  /* input */
  W.querySelector('.v3-ch.l').onclick=function(){go(-1);};W.querySelector('.v3-ch.r').onclick=function(){go(1);};
  if(bE)bE.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();startZoom(act,packs[act].u);});
  box.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}else if(e.key==='ArrowRight'){e.preventDefault();go(1);}else if(e.key==='Enter'){e.preventDefault();startZoom(act,packs[act].u);}});
  var wAcc=0,wLock=0;
  box.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return;e.preventDefault();coast=true;anim=true;vel+=-e.deltaX/(cw*(mob?.2:.12));vel=Math.max(-7.5,Math.min(7.5,vel));kick();},{passive:false});
  var drag=null;
  box.addEventListener('pointerdown',function(e){if(zoom||(e.pointerType==='mouse'&&e.button!==0))return;drag={x:e.clientX,y:e.clientY,p:anim?to:cur,id:e.pointerId,lock:false,moved:false};});
  box.addEventListener('pointermove',function(e){if(!drag||e.pointerId!==drag.id)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.lock){if(Math.abs(dx)<8)return;if(Math.abs(dy)>Math.abs(dx)){drag=null;return;}drag.lock=true;anim=false;try{box.setPointerCapture(e.pointerId);}catch(x){}box.classList.add('drag');}
    if(Math.abs(dx)>=CONFIG.DRAG_THRESHOLD)drag.moved=true;cur=drag.p-dx/(cw*(mob?.42:.16));kick();});
  box.addEventListener('pointerup',function(e){if(!drag||e.pointerId!==drag.id)return;var d=drag,dx=e.clientX-d.x;drag=null;box.classList.remove('drag');
    if(d.lock){var st=Math.round(d.p),tg=Math.round(cur);if(Math.abs(dx)>=CONFIG.DRAG_THRESHOLD){if(tg===st)tg=st+(dx<0?1:-1);}else tg=st;from=cur;to=tg;t0=performance.now();anim=true;kick();return;}
    var r=R.domElement.getBoundingClientRect();v2.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(v2,cam);
    var hit=ray.intersectObjects(meshes.filter(function(m){return m.parent.visible;}),false)[0];if(!hit)return;var i=hit.object.userData.i;
    if(i===act&&!anim)startZoom(i,packs[i].u);else goTo(i);});
  box.addEventListener('pointercancel',function(){if(drag){var p=drag.p;drag=null;box.classList.remove('drag');from=cur;to=Math.round(p);t0=performance.now();anim=true;kick();}});
  var lw=innerWidth;addEventListener('resize',function(){if(innerWidth!==lw){lw=innerWidth;size();kick();}});
  size();kick();
  W.__state=function(){return{act:act,cur:cur,zoom:!!zoom,name:packs[act].n,loaded:items.filter(function(x){return x.ok;}).length};};
  W.__proj=function(i){var v=items[i].g.position.clone().project(cam);return{x:(v.x+1)/2*cw,y:(1-v.y)/2*ch,vis:items[i].g.visible};};
}

/* ---- v2: full-screen reel-style hero wheel + detail view (Three.js r149) ---- */
function hero3d(W,fallback){
  function clk(){return window.__vrClock?window.__vrClock():performance.now();} /* __vrClock = test hook for frame-exact captures */
  var T=THREE,H2=CONFIG.HERO,box=W.querySelector('.v3-c'),nE=W.querySelector('.v3-n'),pE=W.querySelector('.v3-p'),bE=W.querySelector('.v3-b'),
      D=W.querySelector('.v2-d'),blks=[].slice.call(W.querySelectorAll('.v2-blk')),prog=W.querySelector('.v2-prog i'),big=W.querySelector('.v2-big'),bigS=big.querySelector('span'),
      cta=W.querySelector('.v2-cta'),logo=W.querySelector('.v2-logo'),flash=W.querySelector('.v2-flash'),gp=W.querySelector('.v3-gp');
  var MOB0=(W.clientWidth||innerWidth)<700,DPR=Math.min(window.devicePixelRatio||1,MOB0?1.5:1.75);
  var R=new T.WebGLRenderer({antialias:!MOB0,alpha:true,powerPreference:'high-performance'});
  R.setPixelRatio(DPR);R.outputEncoding=T.sRGBEncoding;R.toneMapping=H2.CLEAN?T.NoToneMapping:T.ACESFilmicToneMapping;R.toneMappingExposure=H2.EXPOSURE||1;R.setClearColor(0,0);
  box.appendChild(R.domElement);var ld=W.querySelector('.v3-ld');if(ld)ld.remove();
  var S=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,60);S.fog=new T.Fog(0x2a2b30,9,15);
  function cv(w,h,f){var c=document.createElement('canvas');c.width=w;c.height=h;f(c.getContext('2d'),w,h);return c;}
  /* studio environment (RoomEnvironment-style: dark room + HDR softboxes), prefiltered with PMREM -> glossy reflections */
  function studio(){var s=new T.Scene(),bx=new T.BoxGeometry(1,1,1),room=new T.Mesh(bx,new T.MeshBasicMaterial({color:0x0b0b0d,side:T.BackSide}));room.scale.set(18,10,18);room.position.y=2;s.add(room);
    function lp(c,i,x,y,z,sx,sy,sz){var m=new T.Mesh(bx,new T.MeshBasicMaterial({color:new T.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);m.scale.set(sx,sy,sz);s.add(m);}
    lp(0xffffff,9,0,6.8,1.5,7,.1,3.2);lp(0xfff1de,5,-8.8,2.4,1.5,.1,5,1.4);lp(0xe2ecff,5,8.8,2.4,1.5,.1,5,1.4);lp(0xffffff,2.2,0,2.2,8.8,8,2.6,.1);
    lp(0xffffff,7,-4,2.6,-8.8,1.1,5,.1);lp(0xffffff,7,4.2,2.6,-8.8,.8,5,.1);lp(0xffffff,1.2,0,-2.9,0,10,.1,10);return s;}
  var pm=new T.PMREMGenerator(R),envS=studio();S.environment=pm.fromScene(envS,.04).texture;pm.dispose();
  S.add(new T.HemisphereLight(0xdfe6ff,0x0a0806,.35));
  var spot=new T.SpotLight(0xffffff,1.6,24,.32,.7,1);spot.position.set(0,6,5);S.add(spot,spot.target);
  var key=new T.DirectionalLight(0xfff3e4,.85);key.position.set(-3.5,4,6);S.add(key);
  var rimL=new T.DirectionalLight(H2.STAGE!=='pedestal'?0xffd78c:0xffffff,H2.STAGE!=='pedestal'?1.3:1.1),rimR=new T.DirectionalLight(0xe8b84b,1.4);rimL.position.set(-4,2.5,-4);rimR.position.set(4,2,-4);S.add(rimL,rimR);
  var glow=new T.PointLight(0xe8b84b,H2.STAGE!=='pedestal'?1.4:2.6,6,2);glow.position.set(0,-1.4,1.2);S.add(glow);
  var FY=-1.15,HH=1.6,geo=new T.BoxGeometry(1,1,1),loader=new T.TextureLoader();loader.setCrossOrigin('anonymous');
  var TEXF=MOB0?'500w':'750w',ANISO=Math.min(MOB0?1:4,R.capabilities.getMaxAnisotropy());
  /* ---- v4.3 sealed pack (LIVE; ?vr_sealed=0 off) ---- */
  var V43S=!!H2.V43,CR=.06,SD=.26,hideM=null,rip=null,RIP_MS=1400;
  if(V43S){geo=new T.BoxGeometry(1,1,1,16,24,1);var gp0=geo.attributes.position;for(var q=0;q<gp0.count;q++){var X=gp0.getX(q),Y=gp0.getY(q),Zz=gp0.getZ(q);if(Math.abs(Zz)<.49)continue;
      var ax=1-Math.pow(Math.abs(2*X),3),yy=Math.abs(2*Y),ay=yy<1-2*CR?1-Math.pow(yy/(1-2*CR),3):0;gp0.setZ(q,(Zz>0?.5:-.5)*(.22+.78*Math.max(0,ax)*Math.max(0,ay)));}
    geo.computeVertexNormals();hideM=new T.MeshBasicMaterial({visible:false});}
  function foil(g,x,y,w,h,acc,vert){var gr=vert?g.createLinearGradient(x,y,x,y+h):g.createLinearGradient(x,y,x+w,y+h),c='#'+acc.clone().multiplyScalar(.55).getHexString(),c2='#'+acc.clone().lerp(new T.Color(0xffffff),.35).getHexString();
    gr.addColorStop(0,'#1b1c20');gr.addColorStop(.22,c);gr.addColorStop(.48,c2);gr.addColorStop(.55,'#d9dce2');gr.addColorStop(.62,c2);gr.addColorStop(.85,c);gr.addColorStop(1,'#141518');g.fillStyle=gr;g.fillRect(x,y,w,h);}
  function crimp(g,W,y,h,acc,top){foil(g,0,y,W,h,acc,true);for(var x=0;x<W;x+=6){g.fillStyle='rgba(255,255,255,.16)';g.fillRect(x,y,2,h);g.fillStyle='rgba(0,0,0,.28)';g.fillRect(x+3,y,2,h);}
    g.fillStyle='rgba(0,0,0,.45)';g.fillRect(0,top?y+h-3:y,W,3);g.fillStyle='rgba(255,255,255,.22)';g.fillRect(0,top?y+h-5:y+3,W,2);
    g.save();g.globalCompositeOperation='destination-out';var tw=W/30,th=h*.34;g.beginPath();for(var x=0;x<=W;x+=tw){var ey=top?y:y+h;g.moveTo(x,ey);g.lineTo(x+tw/2,top?ey+th:ey-th);g.lineTo(x+tw,ey);}g.lineTo(W,top?y-2:y+h+2);g.lineTo(0,top?y-2:y+h+2);g.closePath();g.fill();g.restore();}
  function pill(g,x,y,txt,sz,bg,fg){g.font='800 '+sz+'px Sora, Arial, sans-serif';var w=g.measureText(txt).width+sz*1.2,h=sz*1.7;g.fillStyle=bg;g.beginPath();if(g.roundRect)g.roundRect(x-w/2,y-h/2,w,h,h/2);else g.rect(x-w/2,y-h/2,w,h);g.fill();g.fillStyle=fg;g.textAlign='center';g.textBaseline='middle';g.fillText(txt,x,y+1);return w;}
  /* v4.3 art-keep (Jacob 12:47 PM ET): his pack art is drawn 1:1 at native size, untouched - no tint, overlay, label or crop.
     The digital rip-pack treatment is added AROUND it only: thin foil rim, serrated crimps above/below (extending the pack), tear notch. */
  function sealCanvas(img,p,acc,back){var aw=img.width,ah=img.height,rim=Math.max(6,Math.round(aw*.012)),crH=Math.round(ah*.065),Wc=aw+2*rim,Hc=ah+2*rim+2*crH;
    var c=cv(Wc,Hc,function(g){foil(g,0,crH,Wc,Hc-2*crH,acc,false);
      if(back){g.fillStyle='rgba(0,0,0,.35)';g.fillRect(Wc*.08,Hc*.35,Wc*.84,Hc*.3);g.fillStyle='#e8b84b';g.textAlign='center';g.textBaseline='middle';g.font='900 '+Math.round(Wc*.16)+'px Anton, Impact, Arial, sans-serif';g.fillText('VANTA',Wc/2,Hc*.47);
        g.font='800 '+Math.round(Wc*.045)+'px Sora, Arial, sans-serif';g.fillStyle='#f2f0ea';g.fillText('SEALED PACK - OPEN AT THE NOTCH',Wc/2,Hc*.58);}
      crimp(g,Wc,0,crH,acc,true);crimp(g,Wc,Hc-crH,crH,acc,false);
      g.save();g.globalCompositeOperation='destination-out';g.beginPath();var ny=crH*.55,nd=Math.min(crH*.7,Wc*.05);g.moveTo(-1,ny-nd*.5);g.lineTo(nd,ny);g.lineTo(-1,ny+nd*.5);g.closePath();g.fill();g.restore();
});
    if(!back){var g2=c.getContext('2d');g2.clearRect(rim,crH+rim,aw,ah);g2.drawImage(img,rim,crH+rim);} /* art last, 1:1, nothing drawn over it */
    c.__m={W:Wc,H:Hc,ax:rim,ay:crH+rim,aw:aw,ah:ah,cH:(crH+rim)/Hc};return c;}
  function sealTex(c){var t=new T.CanvasTexture(c);t.encoding=T.sRGBEncoding;t.anisotropy=Math.min(8,R.capabilities.getMaxAnisotropy());return t;}

  var mirror=new T.Group();mirror.scale.y=-1;mirror.position.y=2*FY;S.add(mirror);
  var items=[],meshes=[],fades=[];function fm(m){fades.push(m);return m;}
  /* blurred copy of the art for side packs (cheap depth-of-field on the texture) */
  function blurTex(img){var w=256,h=Math.round(256*img.height/img.width),t=new T.CanvasTexture(cv(w,h,function(g){g.filter='blur(5px)';g.drawImage(img,-6,-6,w+12,h+12);}));t.encoding=T.sRGBEncoding;return t;}
  function mixMat(m){m.userData.u={uB:{value:null},uM:{value:0}};m.onBeforeCompile=function(s){s.uniforms.uB=m.userData.u.uB;s.uniforms.uM=m.userData.u.uM;
    s.fragmentShader='uniform sampler2D uB;uniform float uM;\n'+s.fragmentShader.replace('#include <map_fragment>','#ifdef USE_MAP\n vec4 sampledDiffuseColor=mix(texture2D(map,vUv),texture2D(uB,vUv),uM);\n diffuseColor*=sampledDiffuseColor;\n#endif');};m.customProgramCacheKey=function(){return 'vrmix';};return m;}
  /* soft contact shadow texture (one per pack, on the floor) */
  var shTex=new T.CanvasTexture(cv(128,64,function(g,w,h){var gr=g.createRadialGradient(64,32,0,64,32,64);gr.addColorStop(0,'rgba(0,0,0,.95)');gr.addColorStop(.35,'rgba(0,0,0,.55)');gr.addColorStop(1,'rgba(0,0,0,0)');g.setTransform(1,0,0,.5,0,16);g.fillStyle=gr;g.fillRect(0,-32,w,h*2);})),shGeo=new T.PlaneGeometry(1,1);
  packs.forEach(function(p,i){
    var acc=new T.Color(p.acc==='auto'?'#e8b84b':p.acc);
    var front=mixMat(H2.CLEAN?new T.MeshBasicMaterial({color:0xffffff}):new T.MeshPhysicalMaterial({color:0xffffff,roughness:.32,metalness:.05,envMapIntensity:H2.ENV_FRONT,clearcoat:1,clearcoatRoughness:.07,iridescence:MOB0?0:H2.FOIL,iridescenceIOR:1.25,iridescenceThicknessRange:[120,420]})),
        back=H2.CLEAN?new T.MeshStandardMaterial({color:0x555555,roughness:.6,metalness:.1,envMapIntensity:.25}):new T.MeshPhysicalMaterial({color:0x555555,roughness:.4,metalness:.2,envMapIntensity:.5,clearcoat:.6,clearcoatRoughness:.15}),
        side=H2.CLEAN?new T.MeshStandardMaterial({color:acc.clone().multiplyScalar(.3),roughness:.55,metalness:.25,envMapIntensity:.3}):new T.MeshPhysicalMaterial({color:acc.clone().multiplyScalar(.5),roughness:.2,metalness:1,clearcoat:.5,clearcoatRoughness:.1,iridescence:MOB0?0:H2.FOIL*1.6,iridescenceIOR:1.4,iridescenceThicknessRange:[200,600]});
    [front,back,side].forEach(function(x){x.transparent=true;});
    if(V43S){front.alphaTest=.45;back.alphaTest=.45;}var mats=V43S?[side,side,hideM,hideM,front,back]:[side,side,side,side,front,back],g=new T.Group(),m=new T.Mesh(geo,mats);m.userData.i=i;g.add(m);S.add(g);meshes.push(m);
    var rm=mats.map(function(x){var c=new T.MeshStandardMaterial({color:x.color.clone(),roughness:x.roughness,metalness:x.metalness});c.visible=x.visible!==false;c.transparent=true;c.opacity=.06;c.depthWrite=false;return c;}),rg=new T.Group(),r=new T.Mesh(geo,rm);rg.add(r);mirror.add(rg);
    var sh=new T.Mesh(shGeo,new T.MeshBasicMaterial({map:shTex,color:0,transparent:true,depthWrite:false,opacity:0}));sh.rotation.x=-Math.PI/2;sh.renderOrder=-1;S.add(sh);
    var it={g:g,m:m,rg:rg,r:r,sh:sh,mats:[side,front,back],rm:rm,acc:acc,w:HH*.72,h:HH,ph:i*1.37};items.push(it);
    loader.load(p.img+'?format='+TEXF,function(t){t.encoding=T.sRGBEncoding;t.anisotropy=ANISO;
      var tf=t,tb=t;if(V43S){it.img=t.image;it.p=p;var sc0=sealCanvas(t.image,p,it.acc,false);tf=sealTex(sc0);tb=sealTex(sealCanvas(t.image,p,it.acc,true));it.sealTex=tf;it.sealPr=p.pr;it.sealC=sc0;rm[4].alphaTest=rm[5].alphaTest=.45;}
      [front,rm[4]].forEach(function(x){x.map=tf;x.needsUpdate=true;});[back,rm[5]].forEach(function(x){x.map=tb;x.needsUpdate=true;});if(i===0||Math.abs(wrapD(i))<=2)bootN++;bootChk();try{front.userData.u.uB.value=blurTex(V43S?it.sealC:t.image);}catch(e){front.userData.u.uB.value=t;}it.ok=1;
      var a=t.image.width/t.image.height;if(V43S)a=it.sealC.width/it.sealC.height;if(a<1){it.h=HH;it.w=HH*a;}else{it.w=Math.min(1.35,HH*a);it.h=it.w/a;}
      if(p.acc==='auto'){var c=sample(t.image);if(c){it.acc=c;side.color.copy(c).multiplyScalar(.5);}}lay();});
  });
  function sample(img){try{var d=cv(24,24,function(g){g.drawImage(img,0,0,24,24);}).getContext('2d').getImageData(0,0,24,24).data,r=0,g=0,b=0,w=0;
    for(var i=0;i<d.length;i+=4){var mx=Math.max(d[i],d[i+1],d[i+2]),mn=Math.min(d[i],d[i+1],d[i+2]),s=mx?(mx-mn)/mx:0,k=s*s*mx/255+.02;r+=d[i]*k;g+=d[i+1]*k;b+=d[i+2]*k;w+=k;}
    var c=new T.Color(r/w/255,g/w/255,b/w/255),h={};c.getHSL(h);c.setHSL(h.h,Math.max(h.s,.5),.55);return c;}catch(e){return null;}}
  /* pedestal (black puck, metal top) + halo (UFO ring) + floor glow */
  var metal=fm(new T.MeshPhysicalMaterial({color:0xc4c6cc,metalness:1,roughness:.14,clearcoat:.6,clearcoatRoughness:.08,transparent:true})),dark=fm(new T.MeshPhysicalMaterial({color:0x0c0c0e,metalness:.6,roughness:.32,clearcoat:1,clearcoatRoughness:.12,transparent:true}));
  var ped=new T.Group(),p1=new T.Mesh(new T.CylinderGeometry(.66,.8,.26,64),dark),p2=new T.Mesh(new T.CylinderGeometry(.56,.6,.07,64),metal),p3=new T.Mesh(new T.TorusGeometry(.6,.03,12,72),metal),p4=new T.Mesh(new T.CylinderGeometry(.28,.34,.05,48),metal);
  p2.position.y=.16;p3.rotation.x=Math.PI/2;p3.position.y=.14;p4.position.y=.21;ped.add(p1,p2,p3,p4);ped.position.y=FY+.13;var REV=H2.STAGE!=='pedestal';if(!REV)S.add(ped);
  var halo=new T.Group(),h1=new T.Mesh(new T.TorusGeometry(.7,.04,16,90),metal),h2=new T.Mesh(new T.TorusGeometry(.5,.02,12,72),metal),h3=new T.Mesh(new T.CylinderGeometry(.68,.5,.06,64),metal),h4=new T.Mesh(new T.CylinderGeometry(.4,.4,.08,48),dark);
  h1.rotation.x=h2.rotation.x=Math.PI/2;h2.position.y=-.03;h4.position.y=.03;halo.add(h1,h2,h3,h4);if(!REV)S.add(halo);
  var soft=new T.CanvasTexture(cv(128,128,function(g,w,h){var gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.4,'rgba(255,255,255,.35)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,w,h);}));
  function add(mat){mat.transparent=true;mat.depthWrite=false;mat.blending=T.AdditiveBlending;mat.fog=false;return fm(mat);}
  var bgM=add(new T.MeshBasicMaterial({map:soft,color:0xe8b84b,opacity:.22})),bg=new T.Mesh(new T.PlaneGeometry(5,2.2),bgM);bg.position.set(0,FY+.2,-1);if(REV){bg.scale.set(2.2,2.6,1);bg.position.set(0,.25,-3);}S.add(bg);var markM=add(new T.MeshBasicMaterial({color:0xf3cf7a,opacity:0})),mark=new T.Mesh(new T.PlaneGeometry(3.3,3.3),markM);mark.position.set(0,.35,-2.6);mark.visible=false;if(REV)S.add(mark);
  /* v4.2 reveal stage: warm spotlight cone + floor pool + drifting foil dust (replaces ring / pedestal / cyan disc) */
  var GOLD=new T.Color(H2.STAGE_GOLD||'#e8b84b'),cone=null,pool=null,dust=null,dustV=null,DN=0;
  if(REV){var cM=new T.ShaderMaterial({uniforms:{c:{value:GOLD},a:{value:H2.CONE}},transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,
      vertexShader:'varying float vy;varying float vf;void main(){vy=uv.y;vec4 mv=modelViewMatrix*vec4(position,1.);vec3 n=normalize(normalMatrix*normal);vf=abs(dot(n,normalize(-mv.xyz)));gl_Position=projectionMatrix*mv;}',
      fragmentShader:'uniform vec3 c;uniform float a;varying float vy;varying float vf;void main(){float k=pow(vf,4.)*smoothstep(.3,.95,vy)*(1.-smoothstep(.86,1.,vy));gl_FragColor=vec4(c*k*a,1.);}'});
    cone=new T.Mesh(new T.CylinderGeometry(.1,1.25,3.6,48,1,true),cM);cM.side=H2.CLEAN?T.BackSide:T.FrontSide;cone.position.set(0,FY+1.8,-.15);S.add(cone);
    pool=new T.Mesh(new T.PlaneGeometry(3.4,1.5),add(new T.MeshBasicMaterial({map:soft,color:GOLD,opacity:H2.POOL})));pool.rotation.x=-Math.PI/2;pool.position.set(0,FY+.006,0);S.add(pool);
    DN=MOB0?90:260;var dp0=new Float32Array(DN*3);dustV=new Float32Array(DN);for(var q=0;q<DN;q++){dp0[q*3]=(Math.random()*2-1)*(MOB0?2.4:5);dp0[q*3+1]=FY+Math.random()*3.4;dp0[q*3+2]=-2.6+Math.random()*(H2.CLEAN?2.1:3.6);dustV[q]=.04+Math.random()*.1;}
    var dg=new T.BufferGeometry();dg.setAttribute('position',new T.BufferAttribute(dp0,3));
    dust=new T.Points(dg,add(new T.PointsMaterial({map:soft,color:0xf6d88f,size:MOB0?.06:.055,sizeAttenuation:true,opacity:H2.DUST})));S.add(dust);}
  var barM=add(new T.MeshBasicMaterial({map:soft,color:0xe8b84b,opacity:.0})),bar=new T.Mesh(new T.PlaneGeometry(4.2,.5),barM);bar.rotation.x=-Math.PI/2;bar.position.set(0,FY+.01,.35);if(!REV)S.add(bar);
  /* screen-space depth blur pass: sharp in the middle, blur grows toward the sides */
  var useDOF=H2.DOF&&R.capabilities.isWebGL2&&!!window.__vrHQ,rt=null,post=null,pcam=null,pmat=null;
  if(useDOF){rt=new T.WebGLRenderTarget(4,4,{samples:4});pcam=new T.OrthographicCamera(-1,1,1,-1,0,1);
    pmat=new T.ShaderMaterial({defines:{BT:MOB0?6:10},uniforms:{t:{value:rt.texture},px:{value:new T.Vector2()},amt:{value:H2.DOF_PX},bl:{value:H2.CLEAN?0:H2.BLOOM},br:{value:(MOB0?10:16)*DPR}},depthTest:false,depthWrite:false,blending:T.NoBlending,
      vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader:'uniform sampler2D t;uniform vec2 px;uniform float amt;uniform float bl;uniform float br;varying vec2 vUv;\nvoid main(){float r=smoothstep(.11,.46,abs(vUv.x-.5))*amt;vec4 c=texture2D(t,vUv);if(r>.3){float w=1.;for(int i=0;i<12;i++){float a=float(i)*2.39996,d=sqrt((float(i)+.5)/12.);c+=texture2D(t,vUv+vec2(cos(a),sin(a))*d*r*px);w+=1.;}c/=w;}\nvec3 b=vec3(0.);if(bl>0.){for(int i=0;i<BT;i++){float a=float(i)*2.39996+.7,d=sqrt((float(i)+.5)/float(BT));vec4 s=texture2D(t,vUv+vec2(cos(a),sin(a))*d*br*px);b+=max(s.rgb-vec3(.62),0.);}b*=bl/float(BT);}\nc.rgb+=b;c.a=max(c.a,min(1.,dot(b,vec3(.6))));\nif(c.a>0.){c.rgb/=c.a;}gl_FragColor=c;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\ngl_FragColor.rgb*=c.a;}'});
    post=new T.Scene();post.add(new T.Mesh(new T.PlaneGeometry(2,2),pmat));}
  var ray=new T.Raycaster(),vv=new T.Vector2(),accNow=new T.Color(0xe8b84b);
  /* layout */
  var L={R:6,S:.27,V:3},cur=0,from=0,to=0,t0=0,anim=false,act=-1,mob=false,cw=1,ch=1,hdr=0;
  var Z=null; /* zoom/detail state {i,k,dir,t0,k0,detail,dp,dpT,out} */
  var vel=0,coast=false,idleLeft=240,fitDone=0,lastT=0,camZ=7,camLY=0,wheelZ=7,wheelLY=0,wheelY=.15,wheelFOV=30,detailZ=7,detailLY=0,pX=0,pY=0,pXs=0,pYs=0,bootN=0,booted=false,uiK=-1;
  function bootChk(){if(booted||bootN<3)return;booted=true;setTimeout(function(){W.classList.remove('boot');document.documentElement.classList.remove('vr-hero-boot');},60);}
  setTimeout(function(){bootN=9;bootChk();},H2.BOOT_MAX_MS||3500);
  /* v4.3 mobile detail fit: keep the whole tapped pack (crimp to crimp) between the header/BACK button and the panel/buy sheet */
  var fbx=null,fv=null;
  function fitPack(it,visH){if(!fbx){fbx=new T.Box3();fv=new T.Vector3();}cam.updateMatrixWorld();it.m.updateWorldMatrix(true,false);fbx.setFromObject(it.m);
    var t=1e9,b=-1e9,l=1e9,r=-1e9;for(var q=0;q<8;q++){fv.set(q&1?fbx.max.x:fbx.min.x,q&2?fbx.max.y:fbx.min.y,q&4?fbx.max.z:fbx.min.z).project(cam);var px=(fv.x+1)/2*cw,py=(1-fv.y)/2*ch;t=Math.min(t,py);b=Math.max(b,py);l=Math.min(l,px);r=Math.max(r,px);}
    var bk=W.querySelector('.v2-back'),bkB=bk?bk.offsetTop+bk.offsetHeight:0,sht=sh?(W.classList.contains('v43-closed')?ch-64:ch-sh.offsetHeight):ch,gpt=gp?gp.offsetTop:ch;
    var bt=Math.max(hdr,bkB)+12,bb=Math.min(gpt,sht)-12,H=Math.max(60,bb-bt),k=Math.min(H/(b-t),(cw-24)/(r-l));
    fitS=Math.max(.2,Math.min(1.5,fitS*(1+(k*.97-1)*.45)));fitDY+=-(((bt+bb)/2)-((t+b)/2))*visH/ch*.45;
    pbox={top:Math.round(t),bottom:Math.round(b),left:Math.round(l),right:Math.round(r),bandTop:Math.round(bt),bandBottom:Math.round(bb),header:hdr,back:bkB,panelTop:gpt,sheetTop:sht,fitS:+fitS.toFixed(3),fitDY:+fitDY.toFixed(3)};}
  function size(){fitDone=0;cw=W.clientWidth||innerWidth;ch=W.clientHeight||innerHeight;mob=cw<700;var h=document.getElementById('header');hdr=h?h.offsetHeight:0;
    W.style.setProperty('--v3z',H2.ZOOM_MS+'ms');W.classList.toggle('v3m',cw<700);W.style.setProperty('--hdr',hdr+'px');R.setSize(cw,ch,false);cam.aspect=cw/ch;
    var asp=cw/ch;detailZ=mob?Math.max(8.2,9*(.5/asp)*.8):(asp>1.9?6.9:6.4);detailLY=mob?-.12:.12;
    /* Fit the idle studio (halo through puck) inside the viewport BELOW the fixed header. Detail camera is unchanged. */
    var topPx=hdr+Math.max(18,ch*.025),bottomPx=Math.max(66,ch*.09),safeH=Math.max(180,ch-topPx-bottomPx),span=HY()+.2-(FY-.2);
    var viewH=span*ch/safeH;viewH=Math.max(viewH,mob?2.1/asp:2.6/asp);wheelFOV=mob?32:Math.max(27,Math.min(32,28+(1.8-asp)*3));
    wheelZ=viewH/(2*Math.tan(wheelFOV*Math.PI/360));var midWorld=(HY()+.2+FY-.2)/2,midPx=(topPx+ch-bottomPx)/2;
    wheelLY=midWorld-(.5-midPx/ch)*viewH;wheelY=wheelLY+.03;camZ=wheelZ;camLY=wheelLY;
    cam.fov=wheelFOV;cam.position.set(0,wheelY,wheelZ);cam.lookAt(0,wheelLY,0);cam.updateProjectionMatrix();
    if(rt){rt.setSize(Math.round(cw*DPR),Math.round(ch*DPR));pmat.uniforms.px.value.set(1/(cw*DPR),1/(ch*DPR));pmat.uniforms.amt.value=H2.DOF_PX*DPR;}
    L=mob?{R:2.3,S:.5,V:Math.floor(CONFIG.VISIBLE_MOBILE/2)}:{R:5.4,S:.255,V:Math.floor(CONFIG.VISIBLE_DESKTOP/2)};halo.position.y=HY();lay();}
  function HY(){return REV?(mob?1.12:1.0):(mob?1.5:1.3);}
  function proj(x,y,z){var v=new T.Vector3(x,y,z).project(cam);return{x:(v.x+1)/2*cw,y:(1-v.y)/2*ch};}
  function lay(){var it=items[act<0?0:act];if(!it)return;var visH=2*cam.position.z*Math.tan(cam.fov*Math.PI/360),px=ch/visH;
    W.style.setProperty('--v41-title',Math.round(Math.max(30,Math.min(mob?46:66,(ch-hdr)*.075)))+'px');W.style.setProperty('--v3cx',Math.round(it.w*px/2+(mob?26:60))+'px');W.style.setProperty('--v3cy',Math.round(proj(0,.1,0).y)+'px');
    W.style.setProperty('--v2hy',Math.round(proj(0,HY()+.06,0).y)+'px');W.style.setProperty('--v2ty',Math.round(proj(0,FY+.05,0).y)+'px');}
  function ui(){var p=packs[act];nE.textContent=p.n;pE.textContent=p.pr+(p.sold?' \u00b7 SOLD OUT':'');if(bE){bE.href=p.u;}
    var c=items[act].acc;W.style.setProperty('--acc','#'+c.getHexString());W.style.setProperty('--acc2','#'+c.clone().multiplyScalar(.3).getHexString());lay();}
  priceCbs.push(function(){if(act>=0)ui();if(Z)fill(Z.i);});
  /* ---- v3: Gold panel + full-case option ---- */
  var gpSt='loading',gpOpt='single',C=H2.CASE||{};
  function money(v){return '$'+Number(v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
  function wre(w){return new RegExp('(^|[^a-z])'+String(w).toLowerCase()+'([^a-z]|$)');}
  function price(it){var vs=(it.variants||[]).map(function(v){var m=v.onSale?v.salePriceMoney:v.priceMoney;return m&&parseFloat(m.value);}).filter(function(x){return x>0;});return vs.length?Math.min.apply(null,vs):0;}
  function golds(){if(!shopItems)return null;var re=wre(H2.GOLD_MATCH||'gold');return shopItems.filter(function(it){if(!it||!it.fullUrl)return false;
    var s=[it.title||''].concat(it.categories||[],it.tags||[]).join(' | ').toLowerCase();return re.test(s);});}
  function caseOk(it){return C.PRICE>0&&wre(C.FOR||'gold').test(String(it.title||'').toLowerCase());}
  function card(it){var pr=price(it),img=it.assetUrl?it.assetUrl+'?format=300w':'',sold=(it.variants||[]).length&&(it.variants||[]).every(function(x){return !x.unlimited&&!(x.qtyInStock>0);}),ok=caseOk(it),sv='';
    if(ok&&C.PACKS_PER_CASE>0&&pr>0){var full=pr*C.PACKS_PER_CASE,off=full-C.PRICE;if(off>0)sv=C.PACKS_PER_CASE+' packs at '+money(pr)+' = '+money(full)+'. Case saves <b>'+money(off)+' ('+Math.round(off/full*100)+'% off)</b>.';}
    return '<div class="v3-gc" data-u="'+esc(it.fullUrl)+'" data-pr="'+pr+'"><a class="v3-gc-top" href="'+esc(it.fullUrl)+'">'+(img?'<img src="'+esc(img)+'" alt="" loading="lazy">':'<i class="v3-gc-ph"></i>')+
      '<span class="v3-gc-tx"><b>'+esc(it.title||'')+'</b><span class="v3-gc-pr">'+(pr?money(pr):'')+(sold?' &middot; SOLD OUT':'')+'</span><span class="v3-gc-lk">View pack &#8250;</span></span></a>'+
      (ok?'<div class="v3-opt" role="radiogroup" aria-label="Pack or case"><button type="button" role="radio" aria-checked="true" data-o="single"><b>SINGLE PACK</b><small>'+(pr?money(pr):'')+'</small></button>'+
        '<button type="button" role="radio" aria-checked="false" data-o="case"><b>FULL CASE</b><small>'+money(C.PRICE)+' <em>PLACEHOLDER</em></small></button></div>'+
        '<div class="v3-save" hidden><span class="v3-ph">PLACEHOLDER</span> '+(sv||'Case discount: TBD (packs per case not confirmed).')+'</div>':'')+
      '<a class="v3-act" href="'+esc(it.fullUrl)+'">'+esc(CONFIG.BUTTON)+'</a>'+(ok?'<p class="v3-note" hidden><span class="v3-ph">PLACEHOLDER</span> '+esc(C.NOTE||'')+'</p>':'')+'</div>';}
  /* ---- v4.3 buy ladder (LIVE; ?vr_sealed=0 off): renders from the tapped pack's own CONFIG.LADDER.PACKS entry ---- */
  var V43=!!H2.V43,LAD=CONFIG.LADDER||{},sh=null,shB=null,shT=null,fitS=.85,fitDY=-.2,pbox=null;
  function unitOf(p,e){var u=e?e.UNIT_PRICE:null;if(typeof u==='number'&&u>0)return{v:u,from:false};if(u!=='auto')return null;var m=String(p.pr||'').replace(/,/g,'').match(/(\d+(?:\.\d+)?)/);return m&&parseFloat(m[1])>0?{v:parseFloat(m[1]),from:/from/i.test(p.pr||'')}:null;}
  function fmt(v){return v%1?money(v):'$'+Number(v).toLocaleString('en-US');}
  function ladder(i){var p=packs[i],e=(LAD.PACKS||{})[p.n]||null,u=unitOf(p,e),hr=(e&&e.HREF)||{},out=[];
    function href(k){var h=hr[k];if(h==='auto')return{u:p.u,ph:false};if(h)return{u:h,ph:false};return{u:'#vr-ladder-placeholder-'+k,ph:true};}
    [[1,'p1','GET 1 PACK'],[3,'p3','GET A 3-COUNT'],[5,'p5','GET A 5-COUNT']].forEach(function(r){var h=href(r[1]),why=[];if(!u)why.push('price');if(u&&u.from)why.push('price varies');if(h.ph)why.push('link');
      out.push({k:r[1],label:r[2],qty:r[0],price:u?u.v*r[0]:null,href:h.u,why:why});});
    var q=e?e.CASE_QTY:0;if(q>0){var d=(e&&e.CASE_DISCOUNT!=null)?e.CASE_DISCOUNT:LAD.CASE_DISCOUNT,dph=!(e&&e.CASE_DISCOUNT!=null)&&LAD.CASE_DISCOUNT_PLACEHOLDER,h=href('case'),why=[];
      if(e.CASE_QTY_PLACEHOLDER)why.push('packs per case TBD');if(dph)why.push('case price TBD');if(!u)why.push('price');if(h.ph)why.push('link');
      var full=u?q*u.v:null,cp=e.CASE_PRICE>0?e.CASE_PRICE:null;
      if(cp){why=[];if(e.CASE_QTY_PLACEHOLDER)why.push('packs per case TBD');if(h.ph)why.push('link');var real=!e.CASE_QTY_PLACEHOLDER&&full>cp;
        out.push({k:'case',label:'FULL CASE',qty:q,qtyReal:!e.CASE_QTY_PLACEHOLDER,full:real?full:null,price:cp,save:real?Math.round((full-cp)/full*100):0,href:h.u,why:why,fixed:true});}
      else out.push({k:'case',label:'FULL CASE',qty:q,qtyReal:!e.CASE_QTY_PLACEHOLDER,full:full,price:u?Math.round(full*(1-(d||0))):null,save:Math.round((d||0)*100),href:h.u,why:why});}
    return{name:p.n,unit:u?u.v:null,rungs:out};}
  function ladderHTML(i){var L=ladder(i);return '<div class="v43-lad" data-pack="'+esc(L.name)+'">'+L.rungs.map(function(r){var ph=r.why.length;
      var pr=r.price==null?'<span class="v43-tbd">PRICE TBD</span>':(r.k==='case'&&r.full!=null?'<s>'+fmt(r.full)+'</s> '+fmt(r.price)+(r.save>0?' <i class="v43-save">SAVE '+r.save+'%</i>':''):fmt(r.price));
      return '<a class="v43-r v43-'+r.k+'" href="'+esc(r.href)+'"'+(r.href.charAt(0)==='#'?' data-ph="1"':'')+'><span class="v43-l">'+r.label+(r.k==='case'&&!r.fixed?' <small>'+r.qty+' packs</small>':'')+(ph?' <em class="v43-ph" title="Placeholder: '+esc(r.why.join(', '))+'">PLACEHOLDER: '+esc(r.why.join(', '))+'</em>':'')+'</span><span class="v43-p">'+pr+'</span></a>';}).join('')+
      '<p class="v43-msg" hidden><span class="v3-ph">PLACEHOLDER</span> Checkout for this option is not set up yet.</p>'+(V43S?'<button type="button" class="v43-rip">PREVIEW THE RIP</button><p class="v43-ripnote" hidden><span class="v3-ph">PLACEHOLDER</span> Generic card backs - real pulls not connected.</p>':'')+'</div>';}
  function ladClick(e){var rb=e.target.closest&&e.target.closest('.v43-rip');if(rb){e.preventDefault();if(rip&&rip.done)ripReset();else ripStart();return;}
    var a=e.target.closest&&e.target.closest('.v43-r');if(!a||e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();var ph=a.getAttribute('data-ph'),m=a.parentNode.querySelector('.v43-msg'),hr=a.getAttribute('href');
    var after=function(){if(ph){if(m)m.hidden=false;}else if(!window.__vrNoNav){location.href=hr;}};if(!(rip&&rip.done)&&ripStart(after))return;after();}
  if(V43){var rsl=document.createElement('div');rsl.className='v43-result';rsl.textContent='GENERIC CARD BACKS - PREVIEW ONLY';W.appendChild(rsl);sh=document.createElement('div');sh.className='v43-sheet';sh.setAttribute('aria-label','Buy options');sh.innerHTML='<button type="button" class="v43-sh-hd" aria-expanded="true"><i aria-hidden="true"></i><span class="v43-sh-t">BUY OPTIONS</span><b aria-hidden="true">&#9662;</b></button><div class="v43-sh-b"></div>';W.appendChild(sh);
    shB=sh.querySelector('.v43-sh-b');shT=sh.querySelector('.v43-sh-t');sh.addEventListener('click',ladClick);if(gp)gp.addEventListener('click',ladClick);
    sh.querySelector('.v43-sh-hd').addEventListener('click',function(){var c=W.classList.toggle('v43-closed');this.setAttribute('aria-expanded',c?'false':'true');});}
  function ladRender(i){if(!V43)return;var h=ladderHTML(i);if(shB){shB.innerHTML=h;shT.textContent='BUY '+packs[i].n;}var s=gp&&gp.querySelector('.v3-gp-sel');if(s){var o=s.querySelector('.v43-lad');if(o)o.remove();s.insertAdjacentHTML('beforeend',h);}W.classList.remove('v43-closed');var hd=sh&&sh.querySelector('.v43-sh-hd');if(hd)hd.setAttribute('aria-expanded','true');}
  W.__zbox=function(){if(!Z)return null;var it=items[Z.i],bx=new T.Box3(),v=new T.Vector3();cam.updateMatrixWorld();it.m.updateWorldMatrix(true,false);bx.setFromObject(it.m);var t=1e9,b=-1e9,l=1e9,r=-1e9;for(var q=0;q<8;q++){v.set(q&1?bx.max.x:bx.min.x,q&2?bx.max.y:bx.min.y,q&4?bx.max.z:bx.min.z).project(cam);var px=(v.x+1)/2*cw,py=(1-v.y)/2*ch;t=Math.min(t,py);b=Math.max(b,py);l=Math.min(l,px);r=Math.max(r,px);}var bk=W.querySelector('.v2-back');return{top:Math.round(t),bottom:Math.round(b),left:Math.round(l),right:Math.round(r),header:hdr,back:bk?bk.offsetTop+bk.offsetHeight:0,panelTop:gp?gp.offsetTop:0,sheetTop:sh?(W.classList.contains('v43-closed')?ch-64:ch-sh.offsetHeight):null,vw:cw,vh:ch};};
  W.__artProof=function(i){var it=items[i];if(!it||!it.sealC)return null;var m=it.sealC.__m,Wd=m.W,Hd=m.H,sc2=new T.Scene(),oc=new T.OrthographicCamera(-it.w/2,it.w/2,it.h/2,-it.h/2,-5,5),fm1=it.mats[1],c0=fm1.color.clone(),u0=fm1.userData.u.uM.value,o0=fm1.opacity;
    fm1.color.setScalar(1);fm1.userData.u.uM.value=0;fm1.opacity=1;var mm=new T.Mesh(geo,[hideM,hideM,hideM,hideM,fm1,hideM]);mm.scale.set(it.w,it.h,SD);sc2.add(mm);
    var t2=new T.WebGLRenderTarget(Wd,Hd);t2.texture.encoding=T.sRGBEncoding;var px=new Uint8Array(Wd*Hd*4);R.setRenderTarget(t2);R.setClearColor(0,0);R.clear();R.render(sc2,oc);R.readRenderTargetPixels(t2,0,0,Wd,Hd,px);R.setRenderTarget(null);t2.dispose();
    fm1.color.copy(c0);fm1.userData.u.uM.value=u0;fm1.opacity=o0;var c=document.createElement('canvas');c.width=Wd;c.height=Hd;var g=c.getContext('2d'),id=g.createImageData(Wd,Hd);
    for(var y=0;y<Hd;y++){id.data.set(px.subarray((Hd-1-y)*Wd*4,(Hd-y)*Wd*4),y*Wd*4);}g.putImageData(id,0,0);return{name:packs[i].n,src:it.img.currentSrc||it.img.src,m:m,png:c.toDataURL('image/png')};};
  W.__ladder=function(i){return ladder(i==null?act:i);};W.__packBox=function(){return pbox;};
  /* ---- v4.3 rip: tear the top crimp, split the wrapper, slide + fan generic card backs into the spotlight (<=1.4s, no flash) ---- */
  var cardTex=null,RM=false;try{RM=matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){}
  function cardBack(){if(cardTex)return cardTex;cardTex=sealTex(cv(256,358,function(g,w,h){g.fillStyle='#0c0d12';g.fillRect(0,0,w,h);g.strokeStyle='#e8b84b';g.lineWidth=8;g.strokeRect(8,8,w-16,h-16);g.lineWidth=2;g.strokeRect(20,20,w-40,h-40);
    g.strokeStyle='rgba(232,184,75,.16)';g.lineWidth=1;for(var k=-h;k<w+h;k+=18){g.beginPath();g.moveTo(k,20);g.lineTo(k+h,h-20);g.stroke();g.beginPath();g.moveTo(k+h,20);g.lineTo(k,h-20);g.stroke();}
    g.fillStyle='#0c0d12';g.fillRect(48,h/2-34,w-96,68);g.fillStyle='#e8b84b';g.font='900 44px Anton, Impact, Arial, sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText('VANTA',w/2,h/2+2);}));return cardTex;}
  function pieceGeo(w,h,u0,u1,v0,v1){var pg=new T.PlaneGeometry(w,h),uv=pg.attributes.uv;for(var q=0;q<uv.count;q++){uv.setXY(q,u0+uv.getX(q)*(u1-u0),v0+uv.getY(q)*(v1-v0));}return pg;}
  function bm(map){return new T.MeshBasicMaterial({map:map,transparent:true,alphaTest:.08,side:T.DoubleSide,toneMapped:false});}
  function buildRig(it){var w=it.w,h=it.h,cH=it.sealC.__m.cH,zf=SD*.3,rig=new T.Group(),tex=it.sealTex;
    var cap=new T.Mesh(pieceGeo(w,h*cH,0,1,1-cH,1),bm(tex));var capP=new T.Group();capP.position.set(0,h/2-h*cH,zf);cap.position.y=h*cH/2;capP.add(cap);rig.add(capP);
    var bh=h*(1-cH),L=new T.Group(),Rg=new T.Group(),lm=new T.Mesh(pieceGeo(w/2,bh,0,.5,0,1-cH),bm(tex)),rmh=new T.Mesh(pieceGeo(w/2,bh,.5,1,0,1-cH),bm(tex));
    L.position.set(-w/2,-h/2+bh/2,zf);lm.position.x=w/4;L.add(lm);Rg.position.set(w/2,-h/2+bh/2,zf);rmh.position.x=-w/4;Rg.add(rmh);rig.add(L,Rg);
    var inner=new T.Mesh(new T.PlaneGeometry(w*.98,h*.98),new T.MeshBasicMaterial({color:0x1a1712,transparent:true,side:T.DoubleSide}));inner.position.z=-zf*.6;rig.add(inner);
    var cards=[],cw2=w*.64,chh=cw2/.714;for(var k=0;k<5;k++){var cm=new T.Mesh(new T.PlaneGeometry(cw2,chh),new T.MeshBasicMaterial({map:cardBack(),transparent:true,side:T.DoubleSide,toneMapped:false}));cm.position.set(0,-h*.06,-zf*.3+k*.002);cm.renderOrder=2+k;rig.add(cm);cards.push(cm);}
    return{rig:rig,capP:capP,cap:cap,L:L,R:Rg,inner:inner,cards:cards,w:w,h:h,cH:cH};}
  function seg(r,a,b){return Math.max(0,Math.min(1,(r-a)/(b-a)));}
  function eo(x){return 1-Math.pow(1-x,3);}function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function ripPose(r){var P=rip.P,w=P.w,h=P.h,a=eo(seg(r,0,.28)),b=eio(seg(r,.14,.6)),c=eio(seg(r,.22,.7)),d=eio(seg(r,.5,1));rip.flat=eo(seg(r,0,.3));
    P.capP.position.y=h/2-h*P.cH+h*.22*a+h*.15*b;P.capP.rotation.x=-1.35*a;P.capP.rotation.z=.35*a;P.cap.material.opacity=1-seg(r,.3,.55);
    P.L.rotation.y=-1.45*b;P.L.position.x=-P.w/2-w*.35*b;P.R.rotation.y=1.45*b;P.R.position.x=P.w/2+w*.35*b;P.L.children[0].material.opacity=P.R.children[0].material.opacity=1-seg(r,.42,.7);P.inner.material.opacity=1-seg(r,.3,.6);
    P.cards.forEach(function(cm,k){var o=k-2;cm.visible=r>.12;cm.position.y=-h*.06+h*.12*c-Math.abs(o)*h*.025*d;cm.position.x=o*w*.17*d+(mob?0:w*.12*d);cm.position.z=-SD*.09+(k*.004)+SD*.2*c;cm.rotation.z=-o*.14*d;});}
  function ripTick(){if(!rip)return;var r=rip.force!=null?rip.force:(RM?1:Math.min(1,(clk()-rip.t0)/RIP_MS));rip.r=r;ripPose(r);if(r>=1&&!rip.done){rip.done=true;ripUI();if(rip.cb){var f=rip.cb;rip.cb=null;setTimeout(f,RM?0:250);}}}
  function ripStart(cb){if(!V43S||!Z||!Z.detail)return false;var it=items[Z.i];if(!it.sealTex)return false;if(rip){ripReset();}
    var P=buildRig(it);it.g.add(P.rig);it.m.visible=false;it.r.visible=false;rip={it:it,P:P,rig:P.rig,t0:clk(),r:0,flat:0,done:false,cb:cb||null,force:null};W.classList.add('v43-ripping');if(mob&&!W.classList.contains('v43-closed'))W.classList.add('v43-closed');ripTick();kick();return true;}
  function ripReset(){if(!rip)return;var it=rip.it;it.g.remove(rip.rig);rip.rig.traverse(function(o){if(o.geometry)o.geometry.dispose();if(o.material&&o.material.map!==cardTex)o.material.dispose&&o.material.dispose();});it.m.visible=true;it.r.visible=true;rip=null;W.classList.remove('v43-ripping','v43-ripped');ripUI();}
  function ripUI(){W.classList.toggle('v43-ripped',!!(rip&&rip.done));[].forEach.call(W.querySelectorAll('.v43-rip'),function(b){b.textContent=rip&&rip.done?'RESEAL PACK':'PREVIEW THE RIP';});[].forEach.call(W.querySelectorAll('.v43-ripnote'),function(n){n.hidden=!(rip&&rip.done);});}
  W.__rip=function(r){if(r==='start')return ripStart();if(r==='reset'){ripReset();return true;}if(!rip)ripStart();if(rip){rip.force=r;ripTick();kick();}return rip?{r:rip.r,done:rip.done}:null;};
  function gpRender(i){if(!gp)return;if(!H2.GOLD_PANEL){gp.hidden=true;return;}var p=packs[i],c=copy(i),list=golds(),body;gpOpt='single';
    if(!list&&!shopErr){gpSt='loading';body='<p class="v3-gp-msg">Loading Gold packs&hellip;</p>';}
    else if(!list||!list.length){gpSt='placeholder';body='<div class="v3-gp-msg"><span class="v3-ph">PLACEHOLDER</span> No Gold products found in the live shop feed'+(shopErr?' (feed did not load)':'')+'. <a href="/shop">Browse the shop &#8250;</a></div>';}
    else{gpSt='ok';body=list.map(card).join('');}
    var links=(H2.GOLD_LINKS||[]).map(function(l){return '<a href="'+esc(l[1])+'">'+esc(l[0])+'</a>';}).join('');
    gp.innerHTML='<div class="v3-gp-sel"><span class="v2-tag">'+esc(p.n)+'</span><h3>'+esc(p.n)+'</h3><p>'+esc(c[0][1])+'</p>'+(/gold/i.test(p.n)?'':'<a class="v3-act v3-sel-act" href="'+esc(p.u)+'">'+esc(CONFIG.BUTTON)+' <span>'+esc(p.pr||'')+'</span></a>')+'</div>'+
      '<div class="v3-gp-hd"><h4>'+esc(H2.GOLD_TITLE||'VANTA GOLD PACKS')+'</h4><span>Live from the shop</span></div><div class="v3-gp-list">'+body+'</div>'+(links?'<div class="v3-gp-ck">'+links+'</div>':'');
    gp.scrollTop=0;ladRender(i);}
  if(gp)gp.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-o]');if(!b)return;var c=b.closest('.v3-gc'),o=b.getAttribute('data-o'),a=c.querySelector('.v3-act');gpOpt=o;
    [].forEach.call(c.querySelectorAll('[data-o]'),function(x){x.setAttribute('aria-checked',x===b?'true':'false');});c.classList.toggle('case',o==='case');
    var sv=c.querySelector('.v3-save'),nt=c.querySelector('.v3-note');if(sv)sv.hidden=o!=='case';if(nt)nt.hidden=o!=='case';
    a.href=o==='case'?(C.LINK||'/contact'):c.getAttribute('data-u');a.textContent=o==='case'?(C.BTN||'REQUEST A CASE'):CONFIG.BUTTON;});
  function go(n){if(Z)return;to=Math.round(anim?to:cur)+n;anim=true;kick();}
  function goTo(i){go(wrapD(i-mod(Math.round(anim?to:cur))));}
  /* ---- detail copy ---- */
  function cut(s,n){if(!s)return '';if(s.length<=n)return s;s=s.slice(0,n);return s.slice(0,s.lastIndexOf(' '))+'\u2026';}
  function copy(i){var p=packs[i],o=(H2.COPY&&H2.COPY[p.u])||{},ss=((p.ex||'').match(/[^.!?]+[.!?]+/g)||[]).map(function(x){return x.trim();}).filter(function(x){return x.length>25;});
    var s1=ss.filter(function(x){return / is (a|an) /i.test(x);})[0]||ss[0]||H2.FALLBACK[0],s2=ss.filter(function(x){return /contains|includes/i.test(x);})[0]||ss[1]||H2.FALLBACK[1];
    return [[o.h1||p.n,o.p1||cut(s1,170)],[o.h2||H2.TITLES[1],o.p2||cut(s2,170)],[o.h3||(p.pr||''),o.p3||H2.FALLBACK[2]]];}
  function fill(i){var c=copy(i);blks.forEach(function(b,k){b.querySelector('h3').textContent=c[k][0];b.querySelector('p').textContent=c[k][1];b.querySelector('.v2-tag').textContent=k===0?'VANTA':k===1?'THE RIP':packs[i].n;});
    cta.href=packs[i].u;gpRender(i);bigS.textContent=(H2.OUTRO_TEXT==='{NAME}'?packs[i].n:H2.OUTRO_TEXT);}
  /* ---- tap -> zoom -> detail ---- */
  function startZoom(i){if(Z)return;fitDone=0;var top=W.getBoundingClientRect().top+scrollY;if(Math.abs(scrollY-top)>2){try{window.scrollTo({top:top,behavior:'smooth'});}catch(e){window.scrollTo(0,top);}}
    Z={i:i,k:0,dir:1,t0:clk(),k0:0,detail:false,dp:0,dpT:0,out:false};fill(i);
    W.classList.add('zoom');lock(true);kick();}
  function closeDetail(){fitDone=0;if(rip)ripReset();if(!Z||Z.dir<0)return;Z.k0=Z.k;Z.dir=-1;Z.t0=clk();Z.detail=false;Z.dpT=0;W.classList.remove('detail','outro','panel');kick();}
  function done(){Z=null;W.classList.remove('zoom','detail','outro','panel');lock(false);big.style.opacity=0;flash.style.opacity=0;
    items.forEach(function(x){x.mats.forEach(function(m){m.opacity=1;});});[metal,dark].forEach(function(m){m.opacity=1;});kick();}
  function release(){var y=W.getBoundingClientRect().top+scrollY+W.offsetHeight-hdr;done();try{window.scrollTo({top:y,behavior:'smooth'});}catch(e){window.scrollTo(0,y);}}
  window.addEventListener('pageshow',function(e){if(e.persisted&&Z)done();});
  /* scroll capture ONLY while zoom/detail is open */
  var locked=false,ty=null;
  function inGp(t){return !!(t&&t.nodeType===1&&((gp&&gp.contains(t))||(sh&&sh.contains(t))));}
  function onWheel(e){if(!Z)return;e.preventDefault();if(Z.detail&&inGp(e.target)){gp.scrollTop+=e.deltaY*(e.deltaMode===1?40:1);return;}if(Z.detail)scrub(e.deltaY*(e.deltaMode===1?40:1));}
  var tIn=false;function onTS(e){tIn=inGp(e.target);if(Z&&e.touches[0])ty=e.touches[0].clientY;}
  function onTM(e){if(!Z)return;if(tIn&&Z.detail){if(gp.scrollHeight>gp.clientHeight+2)return;if(e.cancelable)e.preventDefault();return;}if(e.cancelable)e.preventDefault();var y=e.touches[0]?e.touches[0].clientY:ty;if(ty!=null&&Z.detail)scrub((ty-y)*2.2);ty=y;}
  function onKey(e){if(!Z)return;var k=e.key;if(k!=='Escape'&&inGp(document.activeElement))return;if(k==='Escape'){e.preventDefault();closeDetail();}else if(/^(ArrowDown|PageDown| |Spacebar)$/.test(k)){e.preventDefault();scrub(240);}else if(/^(ArrowUp|PageUp)$/.test(k)){e.preventDefault();scrub(-240);}}
  function lock(on){if(on===locked)return;locked=on;var f=on?'addEventListener':'removeEventListener',o={passive:false};window[f]('wheel',onWheel,o);window[f]('touchstart',onTS,o);window[f]('touchmove',onTM,o);window[f]('keydown',onKey,false);}
  function scrub(dy){if(!Z||!Z.detail)return;Z.dpT=Math.max(-.12,Math.min(1+H2.OUTRO,Z.dpT+dy/H2.DETAIL_PX));if(Z.dpT<=-.1)closeDetail();kick();}
  function ease(k){return 1-Math.pow(1-k,3);}
  function cine(k){return k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;} /* cubic-bezier(.65,0,.35,1)-like */
  function frame(now){
    var t=now/1000,dt=lastT?Math.min(.25,(now-lastT)/1000):.016;lastT=now;
    if(anim&&!drag){var n2=Math.max(1,Math.ceil(dt/.012)),q,hd;if(coast){for(q=0;q<n2;q++){hd=dt/n2;vel*=Math.exp(-2.4*hd);cur+=vel*hd;}if(Math.abs(vel)<.45){to=Math.round(cur+(vel>0?.18:vel<0?-.18:0));coast=false;}}if(!coast){var sk=H2.SPRING_K,sc2=2*Math.sqrt(sk)*H2.SPRING_DAMP;for(q=0;q<n2;q++){hd=dt/n2;vel+=(sk*(to-cur)-sc2*vel)*hd;cur+=vel*hd;}if(Math.abs(to-cur)<6e-4&&Math.abs(vel)<6e-3){cur=to;vel=0;anim=false;coast=false;}}}
    var a=mod(Math.round(cur));if(a!==act){act=a;ui();}
    accNow.lerp(items[Z?Z.i:act].acc,.08);if(REV){glow.color.copy(GOLD);bgM.color.copy(GOLD);}else{glow.color.copy(accNow);bgM.color.copy(accNow);}
    var ze=0,dp=0;
    if(Z){var dur=Z.dir>0?H2.ZOOM_MS:H2.BACK_MS,k2=Math.min(1,(now-Z.t0)/(dur*(Z.dir>0?1-Z.k0:Math.max(.25,Z.k0))));Z.k=Z.dir>0?Z.k0+(1-Z.k0)*k2:Z.k0*(1-k2);
      if(Z.dir>0&&Z.k>=H2.PANEL_AT&&!Z.pan){Z.pan=1;W.classList.add('panel','detail');}
      if(Z.dir>0&&Z.k>=1&&!Z.detail&&!Z.done1){Z.detail=true;Z.done1=1;}
      if(Z.dir<0&&Z.k<=0){done();}}
    if(Z){var kk=Z.k;ze=cine(kk);Z.dp+=(Z.dpT-Z.dp)*.12;if(Math.abs(Z.dpT-Z.dp)<1e-4)Z.dp=Z.dpT;dp=Math.max(0,Z.dp);
      if(Z.detail&&Z.dp>=1+H2.OUTRO-.02){release();return frame(now);}}
    var fo=1-ze,sp=CONFIG.SPIN_DEG*H2.IDLE_K*Math.PI/180;
    var dq=Math.min(.05,dt);pXs+=(pX-pXs)*Math.min(1,dq*2.2);pYs+=(pY-pYs)*Math.min(1,dq*2.2);var dr=fo*(mob?.5:1);
    camZ=wheelZ+(detailZ-wheelZ)*ze;camLY=wheelLY+(detailLY-wheelLY)*ze;var baseY=wheelY+(.15-wheelY)*ze,newFov=wheelFOV+(30-wheelFOV)*ze;
    if(Math.abs(cam.fov-newFov)>.001){cam.fov=newFov;cam.updateProjectionMatrix();}
    cam.position.set((Math.sin(t*.13)*.05+pXs*.16)*dr,baseY+(Math.sin(t*.11+1)*.03-pYs*.08)*dr,camZ);cam.lookAt(0,camLY,0);
    var visH=2*cam.position.z*Math.tan(cam.fov*Math.PI/360),visW=visH*cam.aspect;
    if(Math.abs(ze-uiK)>1e-4){uiK=ze;W.style.setProperty('--fo',fo.toFixed(4));W.style.setProperty('--ze',ze.toFixed(4));}
    var dd=Math.min(1,dp),out=Math.max(0,(dp-1)/H2.OUTRO);
    if(rip)ripTick();
    items.forEach(function(it,i){
      var d=wrapD(i-cur),ad=Math.abs(d),g=it.g,show=ad<=L.V+.6,isZ=Z&&i===Z.i;
      if(Z&&!isZ)show=show&&fo>.01;g.visible=it.rg.visible=show;if(!show)return;
      var an=d*L.S,s=Math.max(.6,1-.06*ad);if(mob)s*=1+.22*Math.max(0,1-ad);var bob=(Math.sin(t*.62+it.ph*1.7)+.35*Math.sin(t*1.31+it.ph))*CONFIG.BOB*.8,spin=CONFIG.IDLE_SPIN==='full'?t*CONFIG.SPIN_SPEED*.5+it.ph:(Math.sin(t*CONFIG.SPIN_SPEED*.62+it.ph)+.25*Math.sin(t*CONFIG.SPIN_SPEED*1.7+it.ph*2))*sp*Math.min(1,.45+ad*.4),idl=Math.sin(t*.5+it.ph)*.07;
      var x=L.R*Math.sin(an),zz=L.R*(Math.cos(an)-1),y=.1+bob,ry=an+spin,rz=Math.sin(it.ph*2.3)*CONFIG.TILT_DEG*Math.PI/180*(ad<.5?.5:1),sc=s;
      if(isZ){var f=CONFIG.ZOOM_HEIGHT*visH/it.h,tx=mob?0:-visW*H2.SHIFT_X,tyy=mob?H2.MOB_Y:-.05,r0=mob?-.32:.32;
        x+=(tx-x)*ze;zz+=(0-zz)*ze;y+=(tyy-y)*ze;ry+=(r0+idl+spin*.2-ry)*ze;rz=rz*fo+((mob?.2:-.2)*ze);sc=s+(f*(mob?.85:1)-s)*ze;
        if(dp>0){ry=r0+idl-dd*H2.DETAIL_TURNS*Math.PI*2+spin*.2;rz=(mob?.2:-.2)+dd*(mob?-.32:.32);x=tx*(1-out)+Math.sin(dd*Math.PI)*visW*.03;sc*=1-out*.45;y=tyy*(1-out);}
        if(V43&&mob){sc*=1+(fitS-1)*ze;y+=fitDY*ze*(1-out);}
        if(rip&&rip.it===it){var fl=1-rip.flat;ry=r0*fl+(ry-r0)*fl;rz=rz*fl;}}
      g.position.set(x,y,zz);g.rotation.set(0,ry,rz);it.m.scale.set(it.w*sc,it.h*sc,(V43S?SD:CONFIG.DEPTH)*sc);if(isZ&&rip&&rip.it===it){rip.rig.scale.setScalar(sc);}if(isZ&&V43&&mob&&ze>.97&&dp<.05&&!rip&&!fitDone){fitPack(it,visH);fitDone=1;}
      it.rg.position.copy(g.position);it.rg.rotation.copy(g.rotation);it.r.scale.copy(it.m.scale);
      var b=Math.pow(Math.max(.14,1-.4*ad),2.2),op=(Z&&!isZ)?fo:1;
      if(!it.ok)b*=.04;it.mats[1].color.setScalar(b);if(H2.CLEAN){it.mats[0].envMapIntensity=.3*b;it.mats[2].envMapIntensity=.25*b;}else{it.mats[1].envMapIntensity=H2.ENV_FRONT*b;it.mats[1].clearcoat=b;it.mats[0].envMapIntensity=b;it.mats[2].clearcoat=.6*b;}
      var hy=Math.max(.05,y-it.h*sc/2-FY),so=(Z&&!isZ?fo:1)*(isZ?fo:1)*Math.min(1,.5/hy)*.55*Math.max(.25,1-.22*ad);it.sh.visible=so>.01;it.sh.position.set(x,FY+.004,zz+.05);it.sh.scale.set(it.w*sc*(1.2+hy*.5),.7*(1+hy*.5),1);it.sh.material.opacity=so;it.mats[2].color.setScalar(b*.45);it.mats[1].userData.u.uM.value=useDOF?0:Math.min(1,ad*(Z?fo:1));
      it.mats.forEach(function(m){m.opacity=op;});it.rm.forEach(function(m){m.opacity=H2.REFLECT*Math.max(0,1-ad*.3)*(Z?fo:1);});
    });
    fades.forEach(function(m){if(m.transparent&&m.blending!==T.AdditiveBlending)m.opacity=fo;});bgM.opacity=.22*fo;barM.color.copy(accNow);barM.opacity=.55*fo*(.85+.15*Math.sin(t*1.4));
    if(REV){markM.opacity=H2.LOGO_MARK*fo;bgM.opacity=H2.BACK_GLOW*fo;cone.material.uniforms.a.value=H2.CONE*fo*(.92+.08*Math.sin(t*.7));cone.visible=pool.visible=fo>.01;pool.material.opacity=H2.POOL*.6*fo;
      if(!mob){var pa=dust.geometry.attributes.position,ar=pa.array,dq2=Math.min(.05,dt);for(var q=0;q<DN;q++){ar[q*3+1]+=dustV[q]*dq2;ar[q*3]+=Math.sin(t*.3+q)*.0015;if(ar[q*3+1]>FY+3.4)ar[q*3+1]=FY;}pa.needsUpdate=true;}dust.material.opacity=H2.DUST*(1-.55*ze)*(mob?.55:1);dust.rotation.y=Math.sin(t*.05)*.15;dust.visible=!mob||fo>.2;}
    halo.visible=ped.visible=!REV&&fo>.01;halo.rotation.y=t*.4;halo.position.y=HY()+Math.sin(t*1.1)*.03;ped.rotation.y=-t*.25;
    /* detail UI */
    if(Z){prog.style.transform='scaleX('+dd.toFixed(3)+')';blks.forEach(function(b,k){var l=dd*3-k,o=k===2?Math.min(1,Math.max(0,l/.25)):Math.max(0,Math.min(l/.25,(1-l)/.25,1));if(dp<=0&&k===0&&Z.detail)o=1;
        o*=1-Math.min(1,out*2.5);b.style.opacity=o.toFixed(3);b.style.transform='translate3d('+((1-Math.min(1,o))*-24).toFixed(1)+'px,'+((1-Math.min(1,o))*18).toFixed(1)+'px,0)';b.style.visibility=o>.01?'visible':'hidden';});
      W.classList.toggle('outro',out>0);flash.style.opacity=(Math.min(1,out*2.2)*.95).toFixed(3);big.style.opacity=out>0?Math.min(1,out*3)*(1-Math.max(0,out-.6)/.4):0;bigS.style.transform='scale('+(.7+out*out*5.5).toFixed(3)+')';}
    if(!(drag||anim||coast||Z||rip)) idleLeft=Math.max(0,idleLeft-1);
    perf(dt);if(rt){pmat.uniforms.amt.value=H2.DOF_PX*DPR*fo;R.setRenderTarget(rt);R.clear();R.render(S,cam);R.setRenderTarget(null);R.render(post,pcam);}else R.render(S,cam);
  }
  var raf=0,vis=true,dead=false,pf={n:0,s:0,low:false};
  /* adaptive quality: if the first ~32 frames average > 26ms, drop the post pass + pixel ratio (no jank on slow phones) */
  function perf(dt){if(pf.low||pf.n>=32||window.__vrHQ)return;pf.n++;if(pf.n>6)pf.s+=dt;if(pf.n===32&&pf.s/26>.026){pf.low=true;if(rt){rt.dispose();rt=null;}DPR=Math.min(DPR,1.25);R.setPixelRatio(DPR);R.setSize(cw,ch,false);}}
  function loop(now){raf=0;if(dead||!vis||document.hidden||!W.isConnected)return;try{frame(clk());}catch(e){dead=true;if(window.console)console.warn('vr-wheel',e);lock(false);fallback();return;}if(drag||anim||coast||Z||rip||idleLeft>0)raf=requestAnimationFrame(loop);}
  function kick(){idleLeft=240;if(!raf&&!dead&&vis&&!document.hidden)raf=requestAnimationFrame(loop);}
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[e.length-1].isIntersecting;kick();},{rootMargin:'100px 0px'}).observe(W);
  document.addEventListener('visibilitychange',kick);
  R.domElement.addEventListener('webglcontextlost',function(e){e.preventDefault();dead=true;lock(false);fallback();});
  W.__gl=function(){dead=true;lock(false);if(raf)cancelAnimationFrame(raf);try{R.dispose();}catch(e){}};
  /* input */
  W.querySelector('.v3-ch.l').onclick=function(){go(-1);};W.querySelector('.v3-ch.r').onclick=function(){go(1);};
  W.querySelector('.v2-back').onclick=function(){closeDetail();};
  if(bE)bE.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();startZoom(act);});
  box.addEventListener('keydown',function(e){if(Z)return;if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}else if(e.key==='ArrowRight'){e.preventDefault();go(1);}else if(e.key==='Enter'){e.preventDefault();startZoom(act);}});
  var wAcc=0,wLock=0;
  box.addEventListener('wheel',function(e){if(Z)return;if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return;e.preventDefault();var n=clk();if(n<wLock){wAcc=0;return;}wAcc+=e.deltaX;
    if(Math.abs(wAcc)>=CONFIG.WHEEL_STEP){go(wAcc>0?1:-1);wAcc=0;wLock=n+320;}},{passive:false});
  var drag=null;
  box.addEventListener('pointerdown',function(e){if(Z||(e.pointerType==='mouse'&&e.button!==0))return;var wasCoast=coast;coast=false;drag={x:e.clientX,y:e.clientY,p:(anim&&!wasCoast)?to:cur,id:e.pointerId,lock:false,moved:false};});
  box.addEventListener('pointermove',function(e){if(!drag||e.pointerId!==drag.id)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.lock){if(Math.abs(dx)<8)return;if(Math.abs(dy)>Math.abs(dx)){drag=null;return;}drag.lock=true;anim=false;try{box.setPointerCapture(e.pointerId);}catch(x){}box.classList.add('drag');}
    if(Math.abs(dx)>=CONFIG.DRAG_THRESHOLD)drag.moved=true;var nc=drag.p-dx/(cw*(mob?.2:.15)),tn=clk(),dtt=Math.max(8,tn-(drag.lt||tn-16))/1000;vel=vel*.7+((nc-cur)/dtt)*.3;drag.lt=tn;cur=nc;kick();});
  box.addEventListener('pointerup',function(e){if(!drag||e.pointerId!==drag.id)return;var d=drag,dx=e.clientX-d.x;drag=null;box.classList.remove('drag');
    if(d.lock){var st=Math.round(d.p),flick=Math.abs(vel)>=1.15;if(flick){vel=Math.max(-7.5,Math.min(7.5,vel));coast=true;anim=true;kick();return;}var tg=Math.round(cur);if(Math.abs(dx)>=CONFIG.DRAG_THRESHOLD){if(tg===st)tg=st+(dx<0?1:-1);}else{tg=st;vel=0;}to=tg;coast=false;anim=true;kick();return;}
    var r=R.domElement.getBoundingClientRect();vv.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(vv,cam);
    var hit=ray.intersectObjects(meshes.filter(function(m){return m.parent.visible;}),false)[0];if(!hit)return;var i=hit.object.userData.i;
    if(i===act&&Math.abs(to-cur)<.2)startZoom(i);else goTo(i);});
  box.addEventListener('pointercancel',function(){if(drag){var p=drag.p;drag=null;box.classList.remove('drag');coast=false;to=Math.round(p);anim=true;kick();}});
  if(!('ontouchstart' in window))W.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;pX=e.clientX/cw*2-1;pY=e.clientY/ch*2-1;},{passive:true});
  var resizeFrame=0;function resized(){if(resizeFrame)return;resizeFrame=requestAnimationFrame(function(){resizeFrame=0;size();kick();});}
  addEventListener('resize',resized);if(window.visualViewport)visualViewport.addEventListener('resize',resized);
  if(window.ResizeObserver){var ro=new ResizeObserver(resized);ro.observe(W);var he=document.getElementById('header');if(he)ro.observe(he);}
  /* header logo hidden while the hero is at the top (our centered logo replaces it) */
  function topCls(){var on=W.isConnected&&W.getBoundingClientRect().bottom>innerHeight*.5,de=document.documentElement;de.classList.toggle('vr-hero-top',!!(H2.HIDE_HEADER_LOGO&&on));de.classList.toggle('vr-hdr-clear',!!(H2.HEADER_CLEAR&&on));}
  addEventListener('scroll',topCls,{passive:true});topCls();
  var li=document.querySelector('#header .header-title-logo img'),ls=H2.LOGO||(li&&(li.currentSrc||li.src));if(logo&&ls){var im=logo.querySelector('img');im.onerror=function(){logo.style.display='none';};im.src=ls;if(REV&&H2.LOGO_MARK>0){var tl=new T.TextureLoader();tl.setCrossOrigin('anonymous');tl.load(ls.replace('format=300w','format=750w'),function(tx){tx.encoding=T.sRGBEncoding;markM.map=tx;markM.needsUpdate=true;mark.visible=true;});}}else if(logo){logo.style.display='none';}
  try{R.compile(S,cam);}catch(e){}
  size();kick();
  W.__perf=function(){return{n:pf.n,s:pf.s,low:pf.low,dpr:DPR,dof:!!rt,antialias:!MOB0};};
  W.__framing=function(){function bounds(obj){obj.updateWorldMatrix(true,true);var b=new T.Box3().setFromObject(obj),ps=[];for(var x=0;x<2;x++)for(var y=0;y<2;y++)for(var z=0;z<2;z++){ps.push(proj(x?b.max.x:b.min.x,y?b.max.y:b.min.y,z?b.max.z:b.min.z));}return{left:Math.min.apply(null,ps.map(function(p){return p.x;})),right:Math.max.apply(null,ps.map(function(p){return p.x;})),top:Math.min.apply(null,ps.map(function(p){return p.y;})),bottom:Math.max.apply(null,ps.map(function(p){return p.y;}))};}
    return{header:hdr,halo:bounds(halo),puck:bounds(ped),packs:items.filter(function(it,i){return Math.abs(wrapD(i-cur))<1.1;}).map(function(it){return bounds(it.g);}),fov:cam.fov,z:cam.position.z};};
  W.__gp=function(){return{st:gpSt,cards:gp.querySelectorAll('.v3-gc').length,opt:gpOpt};};
  W.__state=function(){return{act:act,cur:cur,zoom:!!Z,detail:!!(Z&&Z.detail),dp:Z?Z.dp:0,name:packs[act]?packs[act].n:'',loaded:items.filter(function(x){return x.ok;}).length,dof:!!rt,locked:locked,dpr:DPR,coast:!!coast};};
  W.__proj=function(i){var v=items[i].g.position.clone().project(cam);return{x:(v.x+1)/2*cw,y:(1-v.y)/2*ch,vis:items[i].g.visible};};
}

/* ---- CSS fallback wheel (no WebGL) / static slider (reduced motion) ---- */
function cssWheel(W,flat){
  W.className='mcss'+(flat?' flat':'');
  var h='<h2 class="vw-h">'+CONFIG.HEADING+'</h2><button type="button" class="vw-arr vw-prev" aria-label="Previous pack">&#8249;</button><button type="button" class="vw-arr vw-next" aria-label="Next pack">&#8250;</button><div class="vw-stage" tabindex="0"><div class="vw-ring">';
  packs.forEach(function(p,i){h+='<a class="vw-card" href="'+esc(p.u)+'" data-i="'+i+'" aria-label="'+esc(p.n)+'"><div class="vw-obj"><div class="vw-face"><img alt="" draggable="false" src="'+esc(p.img)+'?format=500w"></div></div></a>';});
  h+='</div></div><div class="vw-info" aria-live="polite"><div class="vw-n"></div><div class="vw-p"></div><a class="vw-btn" href="#">'+esc(CONFIG.BUTTON)+'</a></div><div class="vw-dots">';
  packs.forEach(function(p,i){h+='<button type="button" class="vw-dot" data-i="'+i+'" aria-label="'+esc(p.n)+'"></button>';});
  W.innerHTML=h+'</div>';
  var stage=W.querySelector('.vw-stage'),ring=W.querySelector('.vw-ring'),cards=[].slice.call(W.querySelectorAll('.vw-card')),dots=[].slice.call(W.querySelectorAll('.vw-dot')),nE=W.querySelector('.vw-n'),pE=W.querySelector('.vw-p'),bE=W.querySelector('.vw-btn');
  var step=360/N,pos=0,r=300,cw=200,act=-1;
  function size(){var vw=W.clientWidth||innerWidth;cw=vw<420?150:vw<700?170:210;var ch=Math.round(cw*1.24);
    W.style.setProperty('--vw-w',cw+'px');W.style.setProperty('--vw-ch',ch+'px');W.style.setProperty('--vw-sh',(ch+(vw<700?120:150))+'px');
    r=Math.round((cw/2)/Math.tan(Math.PI/N))+(vw<700?18:34);paint(true);}
  function paint(nt){if(nt)ring.classList.add('nt');ring.style.transform=flat?'none':'translateZ('+(-r)+'px) rotateY('+(-pos*step)+'deg)';
    var a=mod(Math.round(pos));
    cards.forEach(function(c,i){var d=wrapD(i-pos),ad=Math.abs(d);
      c.style.transform=flat?'translateX('+(d*cw*.78)+'px)':'rotateY('+(i*step)+'deg) translateZ('+r+'px)';if(flat)c.style.zIndex=String(100-Math.round(ad*10));
      var o=flat?(ad>1.6?0:1-ad*.35):(ad>2.7?0:1-ad*.27);c.style.opacity=String(Math.max(0,o));c.style.pointerEvents=o<=.05?'none':'';
      c.style.filter=ad<.5?'none':'brightness('+(1-Math.min(ad,3)*.18)+')';c.classList.toggle('on',i===a);});
    if(a!==act){act=a;nE.textContent=packs[a].n;pE.textContent=packs[a].pr;bE.href=packs[a].u;dots.forEach(function(d,i){d.classList.toggle('on',i===a);});}
    if(nt){void ring.offsetWidth;ring.classList.remove('nt');}}
  function goTo(i){pos=Math.round(pos)+wrapD(i-mod(Math.round(pos)));paint();}
  function nudge(n){pos=Math.round(pos)+n;paint();}
  W.querySelector('.vw-prev').onclick=function(){nudge(-1);};W.querySelector('.vw-next').onclick=function(){nudge(1);};
  dots.forEach(function(d){d.onclick=function(){goTo(+d.getAttribute('data-i'));};});
  W.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();nudge(-1);}else if(e.key==='ArrowRight'){e.preventDefault();nudge(1);}});
  var drag=null,moved=false;
  stage.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'&&e.button!==0)return;drag={x:e.clientX,y:e.clientY,p:pos,id:e.pointerId,lock:false};moved=false;});
  stage.addEventListener('pointermove',function(e){if(!drag||e.pointerId!==drag.id)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.lock){if(Math.abs(dx)<8)return;if(Math.abs(dy)>Math.abs(dx)){drag=null;return;}drag.lock=true;try{stage.setPointerCapture(e.pointerId);}catch(x){}ring.classList.add('nt');}
    if(Math.abs(dx)>=CONFIG.DRAG_THRESHOLD)moved=true;pos=drag.p-dx/(cw*.9);paint();});
  stage.addEventListener('pointerup',function(e){if(!drag)return;var dx=e.clientX-drag.x,st=drag.p;drag=null;ring.classList.remove('nt');
    if(Math.abs(dx)>=CONFIG.DRAG_THRESHOLD){var t=Math.round(pos);if(t===Math.round(st))t=Math.round(st)+(dx<0?1:-1);pos=t;}else pos=Math.round(st);paint();});
  stage.addEventListener('pointercancel',function(){if(drag){pos=Math.round(drag.p);drag=null;ring.classList.remove('nt');paint();}});
  cards.forEach(function(c,i){c.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false;return;}if(i!==act){e.preventDefault();goTo(i);}});c.addEventListener('dragstart',function(e){e.preventDefault();});});
  var lw=innerWidth;addEventListener('resize',function(){if(innerWidth!==lw){lw=innerWidth;size();}});
  priceCbs.push(function(){act=-1;paint(true);});
  size();
}

function tryBuild(n){try{if(build())return;}catch(e){if(window.console)console.warn('vr-wheel',e);return;}if(n<40)setTimeout(function(){tryBuild(n+1);},250);}
window.addEventListener('mercury:load',function(){if(on()||heroOn())tryBuild(0);});
if(!on()&&!heroOn())return;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){tryBuild(0);});else tryBuild(0);
}catch(e){if(window.console)console.warn('vr-wheel',e);}})();
