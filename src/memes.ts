/* eslint-disable @typescript-eslint/naming-convention */

export const getRandomMeme = () => {
  const meme =
    Object.values(memes)[Math.floor(Math.random() * Object.keys(memes).length)];
  return meme;
};

export const memes = {
  'Distracted Boyfriend': `
Cti11ttffffffLC088CCCC080GG088@@@@@@@@@@@@@88@@8888888880000GCLttttt11iifG000000GGGCCCfttttfft1;,,,,
Lf;:1tCCLLCGGG0@@8GLLfCGGCG088@@8@@88@@88@@888@@@888@@@80GGCCCL11tttt1iifGGGGGGGGGGCCLfttttfft1;,,,:
GLi;tL00CG88888@@8Cttf            888@@88@@88@@88         CGGGCLt1t11tff1fCGGGGGGGCCLLLfttttttt1;,,,:
CLi;tL80tL08888@@8LLCG            @88@@@@@@88@@88         CCCCCCft111tLCtfLfLLLLLLLLLLLLLLffttt1;,,,:
ff1itLGGtf000008@0LfC0            @88@@88@@888880         CLLCCCft11ttfffftttfffffffffffLLLffffti111t
1t1itGCLLC008000GCLLCGG0GCfLC8@888@888888@8888@@8CLtiiii;ii1CGCt1111ii;;;1111111        iiiiii;1CCL1
iti:f00LfC8880880CfLGGCGGftCG0888800GGGG088008@8t;;;1LCLi;:;1CCCf1i;;;;;1LCCLLff        ffffff1;ii;:
tfi,fGftfLLC008880LC000Ct1LGLLLLC080000G0880000Gt;1ffffLCtiLtLGGCftii11;tCGGCCLL        tttttt1;:,,:
tfi,tCLfi1ii1fGGGGGG00L11fLGGLt11tCG088888000GCftt1itt1fCCfLttGGCLftt1i;f000GCCLLCCffffffffffft;:,:;
ffi:fCLti1t11tLCGGGG0t:1LGG000CL1:;fG88888000GGCfff1tLLLLft1ftft11111111L880GGLtttfffffffffffft;:,:;
ffi:Lf;1i1tttfCG0000C::fLLCGCLLLt:,;L8888800000GLLLGLitfffiifLGC111ttt1tC8800LfCCt;;;;;i11i1fCf;:,::
fL1,ffi1i1tttLCG0000t,11iitCti1tf1,,1C0888GGGGGftttLCfi1tiiC0000GGLfff11C8880fffCC1::,,,1t1L@@@1:,:;
fCt,i1i1i111tLCG000L:ifLLLCGLLLLLti;;fG088800GGLLLLLLGGCtiLCGGLffC00GLttG888C1CtfCLi,,,,;t1L88Gi:,:;
fGf:iii1i11ttLGG000i,itfLLffLLCLf1f1,1GC0GCCGCCCGGGGCG0GffCCffLfff1fG0CfG888fifffffLi,,,;i;;iti;:,:;
fCf1t1i1i1ttttLG00f,,,;ttt1tttfft;:,,:LGGt;;i11itff1ii1i1tLLf1tff11tLfCLC888t.iffffLf:,.;1;i11i;:,if
LL1:;ii1i11ii;1LGGi,,,,itffLLLfti,.,:,;C0CfttLG880LLf11tfttff1fLGL11tfLCL088i,:i;i1fCCLt11ittt1i:,1C
LCLLLfti;1tfCG000t:,,,.,itffft11;.,,,,:;CGGG0GG088CCffL1iifCGLtLCGfii1tftG80i,,...1G0GG08Gt1ii1;iL08
LLLCCLCLi1LCCG80G1:,,,.:iii111tt;..,,,::t8888GLG0GGLfLt11;1fLL11fLLtffftiC80f:::,1LCGCLfC00GCCCLG888
LCfLGG00LLCLLG00Gi:,..,;1ttttfftt1:,,,,:f@@@@8GCC8@80fitti:tfCLtLCGLffft1C00Ci:;LffCCCLtfG0GLLLC0GG0
CCfLGGCCCCfLG000C1i:;1ttttfffffLLCLfti;;t8@@@80GG8@@@titi:,iLC0LffCL111;;fG0CLtCCtfLCCftLCCGLLfffC00
LGLLLLft1tfC00GCftt11tffffLLLLCCCCLfttttfLCG8@8@@8@@0;1t1i;;11iifLfftffi1tGCCC0GCtfLCLtfLCLCCCLftttf
LLfffLL1iLGGGCftttt11iiii111111111111tt1ttLCC88888@@Gttf11i;,,,tCCLLtft1f1LCLLCLLtfLLftLCCLGGGCLt1;i
CCtitfL1L80ftLfttttt1111iiii111111tttt111LGCL0@@@@@@L1i11;;;::1LLCL1i1iiiitCfLCLftfLLttLLLLG0GGCfii;
LCLLGf1it11ttff1ttttt111111i111ttttttt11tCCCLC@@@@@G1itfi;1;iitfLLt1tftti11t1LCCffLff1fLLffG8GGGGLi1
f0@@@Litttt1tt111ttttttt1111111tttttt111LCCLff0@@@@8ftfi:i;i1itLLf11tft111tGCCGCLLffttLLLff0@00G0G1t
088888LLLLf1tt1i1tttttttttttttttttttt111fLLLftC@@@@Ci;;;11i1iitfftii11i;11f@@CCLLfft1LLLLff0888880tt
@@@@@@G1i;;11t11ttttt1111111ttttttttttt1tLLLftG@@@8t;111ftff11ffti1fffttf1L@8Cffff11LCCCLfL@00@@@8ff
@@@LL0G::,,i1t1iiiiii1111111111111111111tLLLftG@@@L;;;i1tit11fffi;tftLt1L1C@8ffff1tLCCGCCfC@CG8@@8CC
8@0tL8@8ffGf1t1;:;;;;;iiiiiiiiiiiiiiiii;tLLfft8@@L:itifLt11itfLi:;11iftitt88ftft1fCCGGGGCL0@80888888
8@80@@@@08@L1tti;:;;;;;;;;;;;;;;;;;;;;;;tLLffL@@0;iLftft1fLttfCti1fLtLLtfC0ftt1tLCtLGGGGGG8@@@@@@888
@@@88800GGGttftitL;;;;;;;;;;;;;;;;;;;;;;fLLLtC@8f;tfi11iitftfLCtiitf1tftfft111tfti;1GGG0008@@@@@@@@@
@@@@@@8888GttttiG0:;;;;iiiii;;;;;;;;;;;ifLLLt08ti;ff111;::itttfi;;11i1ti1tifG;;iiii;fGCCCLL8@@@@@@@@
@@@@@@@@@@Ctttt18G;;;iiiiiiiiiii;;;;;;;itLCLf@0itffi,,,,,..i111t11ft1tLtff18@1;iiiiii1iii;i0@@@@@@@@
`,
  'Drake Hotline Bling': `
111111ttt11111tttttttttttttttttttttttttttttttttttf
1111tt1iii;;iiii1ttttttttttttttttttttttttttttttttf
111t1i;;;;;;;;;;;i111iiiii;;ii1ttttttttttttttttttf
t1t1;;;;:;;;;;;;;;;::::::,:::::;1ttttttttttttttttf
1t1;:::::;;;;;;;;ii;;;;ii:,,,;;;ii11tttttttttttttf
1t1::::;;;;;;;;;;;;;;ii11i::;iiiiii11ttttttttttttf
tt1iii;;;;;;;;ii;;;;;iiiiii;;;;;iii11ttttttttttttf
ttttii;;;::::;;;;;:;;iiiii;:;i;;;;;i1ttttttttttttf
ttttti;;:,,::;;;;:,:i1iii1i:;i;i;;ii1ttttttttttttf
ttttttii;;;;;;;;:,..:11111i;;;:;;ii11111tttttttttf
tttt1i:;;;::::::,..:;;i111iiii::;iiiiii1111ttttttf
tttt1;::,,,,:,:,.,;;;:iii1iii;:;;;i;iiiii1111ttttf
tttttti;;:,,:,,...,,::iii11i;,:;;;;;;;iiiiii1111tf
ttttt11i;i;;:::,,,::;;;;;i;,,::;;;;;;;iiiiiiii111t
ttttt1ii;;i;;:;;iii;;;;;;:,:::;;;;;;:;;;;;;;ii11i1
tttt1iii;;::;iiiii;;;;;;;::;;:;;;;;;:;;;;;;iiiiii1
ttt1iiii;iiiii;;;;;;;;::::::;:;;;;;;::;;;;;;i;;;;1
t1iiiiiiiii;;;;;;;;;;;;:,:::::::;;;;:,:;;;;;:;:;;1
ti;;iiiiii;;;;;;;;;;;:,,,:;;;;;;;;;;;:,;;;;;;;;;;i
ti;iiii;;;;:;;:::;;;:,,,:::;;;;;;;;;;;:,:;;;;;;;;i
ttiiii;;;;;;;;;;;:::;:,:::;;;;;;;;;;;;::::;;;;;;;i
ttt1i;;;;;;;;;;::,::::::::;;;;;;;;;;;;;;:::;;;;;;i
tttt1i;;;;;;;ii:::::::::::;;;;;;;;;;:;;::::::;;;;;
1ttttt11iiii1tti;;::::::::;;;;;;;;;;;::;::::::;:;i
ttttttttttttttt1ii;;;::;;;;;;;;iii;;;;;;;;;::;i;:i
ttttttttttttttttttttttttttttt111111t1111111111111t
tttttttttttttttttttttttttttt11111i11ttttttttt1111t
ttttttttttttttttttttttttt111i1111111i1tttttt11111t
ttttttttttttttttttttttttt1i;:;1i;:;iii1ttttttt111t
ttttttttttttttttttttttttt11ii111i;;;ii1ttttttt111t
tttttttttttttttttttttttt11ii;:::;ii11i1ttttttttt1t
tttttttttttttttttttttttt1i;;ii;;::;iii1ttttttttt1t
ttttttttttttttttttttti;i;::;:::;;:::;iii1ttttttt1t
ttttttttttttttttttt1iii;;:,,,,,,,,,:::,::;;i1ttt1t
tttttttttttttttttt1111i;;i:,,,,.,,;;:;;:::::;1tt1t
tttttttttttttttt11iii;;::;;;;::::;;::i1;,,:;;itt1t
ttttttttttttttt11i;;;;:,:;;;;;;;:::;iiiii:;;;itt1t
ttttttttttt111111i;;;;:::;;;;;;;::;;ii;;ii;;iitt1t
tttttttttt111iiii;;;;:;ii;;;;;;;;;;;;;;;iiiiittt1t
tttttttt11iiiii;;;;:,:1111111111i;;;::;;;iiiii11tt
ttttttt11iii1ii;iii;:i1111111111;;;;::;;iii;iiiiit
ttttt111iii1iiiiiiii;;1111t111t1;;;;;;i1ii;;;iii;i
tttt1111iii1iiiiiiiii;111t11tt1iiiii11ii::;;;;;ii1
ttt11iiii;ii1iiiiiiiii111ii11t1i1iiiiiii;iiii;;;;i
tt111iiii;;i1iiiiiiii;11i,;t11i;iiiiiiiii;ii;;ii;i
t1iiiiiii;;11iiii1ii;;iii1ii11;;;iii1iiiiii;;iiiii
1iiiii;;;;i1iiiiiiii;;i11111i1;;i;,:111i;iiii;;;;i
ii;;;;;i;;;1iiiiiii;;ii1111111;;;;;:::::;;:iiiii;i
ii;;;;;;;;iiiiiiii;;;;1i11111i;;;;;;;:::;:;iiiiiii
1ii;;;:::itiiiiiiii;i;i1i1111i;;;;;;;;;;;;;;ii;iii
`,
  'Two Buttons': `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@Ltttttttttttttttttttttttttt1111111111111t111t1111111111111111111111111tt1t11111111111111111ttt8@@
@@@,tCLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL;;iiiiiiiiiiiiiiiiii; 0@@
@@8,L000000000000000000000000000000000000000000000000000000000GGGGGG0000000011ttttttttttttttttt1.0@@
@@8,L0GGGGGGGGGGGGGGGGGGGGGGGGGG00000000G000GGGGCCCCCCCCCCCCCGGGG0ffC0GGGGG0G1itttttttttttttttti.0@@
@@8,L0GGGGGGGGGGGGG0000000000GGGGGCCCCLC0LLLGGGG00008888@@@@@@@@@@@8LL0GGGGG00tittttttttttttttti.0@@
@@8.L0GGG00000000GGGGGCCCCCCCCCCCGGG0GfLLCf0@@@@@@@@@@@@@@@@@@@@@@@@@LL0GGGGGG0titttttttttttttti.0@@
@@8.L000GGGGCCCCCCCCGGG00888@@@@@@@@@@@@LLCC@@@@@@@@@@@        @@@@@@@Cf00GGGGG0Littttttttttttti.0@@
@@8.fGLLCCGGG0088@@@@@@@@@@@@@@@@@@@@@@@@LLLL@@@@@@@@@@        @@@@@@@@GfG0GGGGG0Ci1ttttttttttti.0@@
@@8.fffC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@LLLL@@@@@@@@@        @@@@@@@@@0fG0GGGGG0Ci1tttttttttti.0@@
@@8.LGf@@@@@@@@@@@@@@        @@@@@@@@@@@@@@fCLL@@@@@@@@@@@@@@@@@@@@@@@@@@8fC0GGGGG0G1ittttttttti.0@@
@@8.f8LL@@@@@@@@@@@@@        @@@@@@@@@@@@@@@fCLC@@@@@@@@@@@@@@0GLtttfG@@@@@fL0GGGGG00titttttttti.0@@
@@8.f00fC@@@@@@@@@@@@        @@@@@@@@@@@@@@@@fCLC@@@@@@@@@@@8tt1iiiiii10@@@@fL0GGGGGG0fittttttti.0@@
@@8.f0G0t0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@fCLC@@@@@@@@@@1;11111111i1@@@@@LL0GGGGGG0Li1ttttt1.0@@
@@8.f0G0Gf8@@@@@@@@@@@@@@@@@@@@@8888@@@@@@@@@@@fCfC@@@@@@@@0;;111111111i0@@@@@LL0GGGGGG0Ci1tttt1.0@@
@@8.f0GG0Ct@@@@@@@@@@@@@@@@@80Cf1i11tfG@@@@@@@@@tGfC@@@@@@@@1;ii111111ii8@@@@@@LL0GGGGGG0G11ttt1.0@@
@@8.f0GGG0Lf@@@@@@@@@@@@@@@Cftii1111iiit8@@@@@@@8tGfG@@@@@@@8ti;;;ii;;iG@@@@@@@@CL0GG000G0Gi1tti.0@@
@@8.f0GGGG0fC@@@@@@@@@@@@@G:11111111111it@@@@@@@@8tGf0@@@@@@@@0Lt111tL0@@@@@@@88C1G0GGCCLLCLitti.0@@
@@8.f0GGGGG0t0@@@@@@@@@@@@t:i11111111111i8@@@@@@@@0t0t0@@0GCC0@@@@@@@@@@@800GCCCLCLLLLCGG00Gitti.0@@
@@8.f0GGGGG0Gt8@@@@@@@@@@@L;;i111111111;t@@@@@@@@@@Cf0t8@LL@0CLLCG0880GGCCCCLLLLCCGG000GGCLfitti.0@@
@@8.f0GGGGGG0Ct@@@@@@@@@@@@Li;;;iiiii;;18@@@@@@@@@@@LLGf8@LC8@@@8GCLttCCLLLLCCG0000GCLLLLCGGitt1.0@@
@@8.f0GGGGGGG0Lf@@@@@@@@@@@@8L1i;;;i1fC8@@@@@@@@@@@@@fCCfLCLtLC08@@@@01fGG0000GCCLLLCGG0000Citt1.0@@
@@8.f0GGGGGGGG0fC@@@@@@@@@@@@@@8000088@@@@@@@@@@@@@@Ctt0CLCGGCfttf0@@@8tf0GCLLLCCG000GGCLC0Citti.0@@
@@8.f0GGGGGGGGG0tG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@80GCCCGGGGCLLLCGG0G10@@@@LiLLCG000GCCCCCGCf0Citti.0@@
@@8.f0GGGGGGGGGG0t0@@@@@@@@@@@@@@@@@@@@@@80GGCCCCCGCCLLLLCGG0000GGLi@@@@@CiCCLffLffLCCCGGL0Citti.0@@
@@8.f0GGGGGGGGGG0Gt8@@@@@@@@@@@@@@@@80GCCCCCGGCCLLLLCGG0000GGCLLLLf1L@@@@@00@@88@@@000GCtf8Litti.0@@
@@8.f0GGGGGGGGGGG0Ct@@@@@@@@@@@80GCCCCCGGGCCLLLCGG0000GGCLLLLCGG0L08i0@@@@@@@@@@@@@@@@@@8ffL1tti.0@@
@@8.f0GGGGGGGGGGGG0Lf80@@80GCCCCCGGGGCCLLLCGG00000GCCLLLLCG000GGtLGff18@@@@@@@@@@@@@@@@@@@Giitti.0@@
@@8.f0GGGGGGGGGGGGG0LtfCCCCGGGGGCLLLLCGG00000GCCLLLLCG0000GCCLLLCCC1Ltt@@@@@@@@@@@@@@@@@@@@8titi.0@@
@@8.f0GGGGGGGGGGGGGG0GGGGGCCLLLLCGG00000GCCLLLLCGG000GGCLLLCGG00000LL018@@@@@@@@@@@@@@@@@@@@@fi1.0@@
@@8.f0GGGGGGGG00000GCCCLLLCCGG00000GCCLLLLCGG0000GCLLLCLf0CCCCLLCG0LCL1@@@@@@@@@@@@@@@@@@@@@@@L:.0@@
@@8.f0GGG0000GGCCLLLLCCGG00000GCCLLLLCGG0000GCCLLLCGG00CLCf88880LLLtftG@@@@@@@@@@@@@@@@@@@@@@@@t 0@@
@@8.f000GGCCLLLLCGG000000GGCLLLLCGG0000GCCLffCCGG000GG0CfGLCC8@@@80888@@@@@@@@@@@@@@@@@@@@@@@@@0.0@@
@@8.fGLLLLLCGGG0000GGCCLLLLCCG0000GCCLLLLCGLL0GGGGGGGG0Cf0GGCfL8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@G.0@@
@@8.tGG000000000GGCCCCGG000000GGCCCCG000008CC8000000008GL80088CCCGG0@@@@@@@@@@@@@@@@@@@@@@@@@@@8.0@@
@@8.iftttttttti;ii11tttttt11i;ii11tttttt11t1itttttttttt1ittt11tt11i::1ffffffffffffffffffffffffLf,8@@
@@@GGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC0@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@i;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:;;;;;;;;::::;;;;;;;;;;;;;;;;;;:;;;;:;;;;;;;;;;;;;;;;;:f@@@
@@8.;t111111111111111111111111111i11111i1fti11i;:;;;;;;;ii11111111111111;i111i;111111111111111t,i@@@
@@8.ittttttttttttttttttttttttt1tCGCfLCCCfC@GLGfttiiiii;;;;;i1111tttttttttiittt1i111111iiiiiiiii,i@@@
@@8.itttttttttttttttttttttttt118@@@@@0G00t@@C@@@@@LtCCCLfti;;i;;;ii11ttttt1i1ttt;;1ii111111111t,i@@@
@@8.itttttttttttttttttttttttt10@@@@@@880CC@C8@@@@0L8LG88880Ci;iiiii;;i1tttt1i1ttt1itttttttttttt,i@@@
@@8.itttttttttttttttttttttttiG@@@@@@@@88L0G8@@00GC0GC888800801;iiiiii;;1tttttii1tt1i1tttttttt1t,i@@@
@@8.itttttttttttttttttttttt1f@@@@@@@@@@CC0@8CLGCL88f:ifLG08808Li;iiiiii:1ttttt1i1ttti;iiiiiiiii.i@@@
@@8.itttttttttttttttttttt11f@@@@@@@@@@CG80LtiG80G008Cft1iit0fL88f:;iiii;itttttttiitttii11111t1t,i@@@
@@8.itttttttttttttttttt11fG@@@@@@@@@@C08t;itCGGC800GCGfff1;tCLC0L;i;;ii;itttttttt1i1tt111111111,i@@@
@@8.itttttttttttttttt11fG@@@@8G08@@8C801iLCLfLCfL8GLCf1fG0ff88fCf;iiiii;ittttttttt1i1tttttttttt,i@@@
@@8.ittttttttttttt111L0@@@@@@@@00@0L88iiCLtL1tCL0GtCGf1itCCCG088C;iiiii;itttttttttttii1111111i1,i@@@
@@8.ittttttttttt11tC8@@@@@@@@@@@@Lt88LCL0fCL;tGL8CL088880CC000888i:i;ii;1ttttttttttti1ttttttttt,i@@@
@@8.ittttttt111tL0@@@@@@@@@@@@@01i88LGGf08GfC0CG800008000888CL8GGC::;;;;1tttttttttti1tttttttttt,i@@@
@@8.ittt111tttLG008@@@@@@@@@@@L1i8@LG0f080888LC0000CLC8000000GLtC8i,:iGGf11ttttttt1itttt111i1tf,;@@@
@@8.it11fC08@@@@80GC0@@@@@@@0f1iG@CG0Gt088008LCLtLGG0GG88000LtLG80Ci:0G1GGitttttttitttt1fffLGG0;;@@@
@@8.;fC8@@@@@@@@@@@@GC8@@@8G11t1@GG0G0CtC008CG0GLLLCG8GL08801C880080GGtitL1tttttti1tt11CCC000G0;;@@@
@@8.tCLLLLC08@@@@@@@@8L0@8C11t1L0G@GGG0GtG8GfLffffLLtt0GL08GL800000080fL11tttttt1itt1tGLC0GGGG0;;@@@
@@8.;1iiiiii1L0@@@@@@@@L0LitttiL0@@0GGG0LL80L11GGGGGCLff008G08000000080f1ttttttti1t1t0LC0GGGGG0;;@@@
@@8.;11111111iit0@@@@@@011ttttiL@@@@80GGGt88GLffffttG8800808800000080LL1ttttttt1it110LC0GGGGGG0;;@@@
@@8.;1111111111iiL@@@888ittttt1f0GCCCG0G0fC880GCCCGG80000000000000080fG11ttttttittiCGf0GGGGGGG0;;@@@
@@8.;111111111111;L@@G8C1tttttt111111iL000L0008880880000000000888880LC8011tttti1tt1GCL0G0000000;;@@@
@@8.;1111111111111i0@0C1tttttttttttttt1tfff0800GCG0000000888880GCfttG808011tt1ittt10GL0GGGCCCCG:;@@@
@@8.;1111111111111if@Citttttttttttttttt1tiL8000G0808888880GLt1;;;1fG80008Gi1t11t11itLfCCCCCCCCG:;@@@
@@8.;1111111111111it811ttttttttttttttttttiC888888000GCft1iii1tfLCG00000008G11tt1fLfCGGG00000000;;@@@
@@8.;1111111111111ifL1ttttttttttttttttttt11fLffftt1fffffLCCCCCGG00800000008Ct1ifCfG00000GGGGGG0;;@@@
@@8.;111111111111i;11tttttttttttttttttttttt111111i1CfGGGGCCCGG088000000080GLfi11i111tfLCG000GG0;;@@@
@@8.;11111111111i;ittttttttttttttttttttttttt111ii1t0LtG88888880000000080Gft1111111111iii1tfCG00;;@@@
@@8.;1111111111i;itttttttt111iiiiiiiii1t11iiii1itLG080G000000000000880Cf111111111111111111ii1f0;;@@@
@@8.;11111111ii;;1i111t11iiii111111111i;ii11111ifL080880000000008880Lt1111111111111111ii11111i1,;@@@
@@8.;111111i;;i11111iii;i111111111111ii1111111111CC80000000088880Cf1i111111111iiiiiiiii11111111,;@@@
@@8.;111i;::i11111111111ii1111111111i111iii11111ifLG888888880GCft1i111iiiiiiiiii11111111111111t,;@@@
@@8.;11i;;i11111111111111ii11111111111111iiiiiii1itLCG0GGCLf11iiiiiiiiii1111111111111111111111t,;@@@
@@8.;111111111111111111111i11111111111111111111111i11111iiiiiiii1111111111111111111111111111111,i@@@
@@8.;t11111111111111111111111111111111111111111111111iii11111111111111111111111111111111111111t,;@@@
@@8,:;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;.1@@@
@@@8000000000000000000000000000000000000000000000000000000000000000GGGGGGG00GGGGGGGG0GG00G0G00G0@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@88888@@88888888@@888888888@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`,
  'Change My Mind': `
;;:::,,::,,,,,;;:::;iii;it11fL;:i,fLCCGLLffttttf:,,,,,,;fftfffftttttt1tGCCCtfLfitfttfLCCGGfC000GfLCG
;:;::,,,::,,.:;;::iii;:::;111tf:.,1tfLLffttttttt:,,,,,,:ttttt1111tfffttLCLLtfLLCLLtfCCLLGCtfGCCLtfCC
iii;;;:,,:,..,:::;iii;::::;;i1tf:.i11tft11111111:,,,,,,:11111111tCL11ttCCCCLLLLfftiiffftCfi1CCLfifCC
ii;;ii;::,,,,,,,;;;::;;:::::;;i1i,,i1tft11111111;.,,,,,,1t111i11tL11111tt1fLLCLLLf11tfttfttLCft1;tLL
i;;;;;::;:,,,.:;::::::::::,;;1i1t;,it1;::,;ttt111,,,,,,,;ti1ti;i11;;;:::::;;;1t11ttf:..:fLffC1it111t
;;;::,:,:i1;:,:1;;;;:1f1ii;;tfti1i,;;.;1ii;:1i11t,,,,,,,:LLfGCCCCCCL111111i;:1fftftt11tfCCGCLLLfLLLf
fLfCL1::tLL;1:.;itGt1CGGCLL1tLf1ti,::.;t1ft1111tt:,,,,,,,tGtLLLLLLftt1i11i;:::;;;:::;iii;:;;:;;;iii:
111tL1:1fLf1f1.,i1ftttttt11i;iiiii,:;i;11ii1tffff;,,,,,,:;;::;;:;:::,,..,,:;::::::::,,,.,,...,,:,,,,
11tt11;:;iii;;:::;:;;:::;;;;iiiii;i11t1;;iii1i:::,,,,::,:,.,:::,:,:::::,::::::::::::::::;;;i;;;:;iii
t1tL1i1,:;;;;;;;;;;;::::::;;:;::;::::;1i;,;;:::,:,..,,,,,,,,::,,,,:,,,:::,,::,,:;;:;;;;i;;iii11ii;ii
i;;;;ii::;:::,:,,,,::::,:::::,,:::;;::::::;;;:::::,,,,,,::::,;:::;::::::;;,;;;i;ii;iii;;::;;;;i;;;;i
,,,,,.,,,,,,.....,,,,:::,,:,,,,:;;;;;:;1tfftt.:;;;::::::::::,::,::::::::::,;;;;;;;;;;;:;;:,:;:;;;;;;
,,,,,,....,,,,,,:,,,,,,,,,,,,,,;;::::::iii;;;,::,,;;;;:;;;:;:;;,:;::::::::,::;::;;;:;;,:;;:,;;;;;;;;
...,,,,,,,::::::::::::::::;ii;;;;::::,,,:,,,,::::,:;;;;;;;;;::i::;;;;;;;;;;;;:::;i;:,,,::::,::::::::
,,::;;;;;;ii;;;iiiiii;;iii1ii;:::,,,,.,,,,,,,,,,,.,::::::::::;iii;;;;;;;;;;ii:iiiiii;,:i;;:,::;;;;ii
i1iiiii;;;i;iiii;ii;i;;iiii;;:,,,,,,....,,,,:::;;,:;;,,,,,,,,;;;;;;;::::;::::i11111tt,;ffffft111i;i1
;;:;;;;:;i;iii;;;;;;;ii;;;ii;i;:;;,.,...,,:,,:::,;fi:::,,,..,;;::,,,,:::::,,.;ffffffLi,fLLLLLLLLt.iL
:::;;;;;;;;;;;;;;;;;;;iii;;;;;;;;;,....,..,,..........,:itLG0GGCLfff1ii;;:;;,:111111tt,,111fffff1 1f
;;;;;;;i;ii;;;;iii;;;i;;;iiiii11111;.,,.....tLLCLfttttffCG088@@@80GLti1i;,,,,;1111111i:::i1ttttti 1t
;:;;i;;ii;i;iiii;i;;ii;;1ffftfffftfi.,.,,,itG8@@@@@8GCf1ii;i1111i;;;;;;;;;;;;;iiiiiiii;;i;;t11111,,;
;;;iii;iiiiii11;ii;iiiitfffttttttt11:,,:::;iiii11tt1iii11:..,,,,,,,,,:;;111tttffLLLLCCL,::i111111i;:
iiiiiiiii;;ii1i;iii;;itfffttfttttt11;.,:::;;;;iiiii111tttt1tffi;iiiiLGG0000000000000000GGf1111111i11
;iii;ii;i;;i;;;iii;;itfffttfffffftii;..,if:.;CCGGGGG000000000000000000000000000000000000Gt1111tttt11
;;ii:;;;;;;;;;i;;i;iffffttfffttttt11:,::t8ftL0000000                             0000000C1tt1ttt1111
;;;;;:;;;;;;;:;i;;ifftttttttttttttt1i;1;iC88000                                  0000000L1tttttttt1t
;;:;i:;;;;;;:::;:ittttttttttttttt1111:ii;L00000                                  0000000Ltfttttttttt
;;::;;:;;:;;:;;;1ttttttfttt1ttttt1111;i1;100000                                  000000Gf1tttttttttt
i;::;i;;;;;ii1;tfffft1ttt1t1tttt111i1i;ii:C0000                                  000000f:ttttfffftff
i;:;i;i1iiiiiitfttt11tt11tt111111iiiiii;;:10000                                  000000f:t11tttttfft
;;;1111ii;111tftttt1ttftt1i1111iiiiiiiiiii,i000                                  0000000t1tt1ttfftff
;iiii11ii;i1tttttt1ttttttt11111iiiiiii;;;;,:G00          CHANGE MY MIND         GCCCLC00t111tffftttt
iiiiii1i1itfftfftttt1111111111111iiii;;;;;,L0000                               ff1tLttL8t1111tt1111t
i1i;i11i1ttttttt1tt1111111ttt111111iii;;;;:180GGC                              GGGG0080Gt11t11ttt1tt
i;;;;;iittttttt1tt111t11111t111111iiiii;;i;;000LfC                           @888880GGf;iii11i1tffft
1;iiii1tttttff111ttttt11t1111111iiiiiiiii;;,C80LLLCLCCCGG000888888000GGCCLLfttt11iii;::,,1ii1ttttfff
iiii;1tttttft1ttfttttttt111111i111iiiii;:;f;;tG800888000GGGCLft11ii;;;;;:;;;;;;iiii111i;;ttt1tffftff
iiii1ttttttt1tttttttt1111ttt111111ii1ii;;11;,:;tfft11ii;;;::::::;;;;;11111ttt1tttttttttt1ttttttffftt
`,
  'Anakin Padme 4 Panel': `
1tttt1tft11t1ttfLLCLLfffffLfttttt1111111111t1tftttfttttLLft11tfti;;;;;:;:::;;;i11ft1i111iiiiiiii;;;t
t1tt11111111tfftft11ft1i11ttLCt1111t11111t111tt111ttttfL1;:i11;,,::::::;:;;;;iiii;;::::;ii;;;;iiiiii
1ttt11111ii11t1iiiii;;;iiii1tLGt111t111111111tt11tttffft1;i1;:,,:::;iii11111i111iii;;:,,,;i;::;;iii;
11111111111i;;;i;;ii;;;;;:;iitCGft1t1111t11111t11tffLCLLftti:;;;i;iii111111111111111ii;:,,,::::::::i
11111i1111i;::::::,,,,:,:,::itfLLtt1111111i1i111t1fCCGCCLGC;:;;i;:;ii;ii:;;::ii;iiiiiii;:,,,,,:,,::;
ii11i1111i;::,:,,,,,:::,,:::;;itLf1111i11111i11111fffLCGGLi;;;;i;:;;;:ii:;::ii;::;:;;;i;;:,.,,,,:;;;
ii11i1i11;,,,,:;;;;;;;;;;;;;ii1i1t1i1ii1111111111t;;1tt1ii;;i1111111iiiiii;;i;;;;:::;::;:;:,,,,,,,::
1t1ii1111i,,,::;iiiii;;;;;iiitti1ti11ii1t1i11i11tt;iiiiiii:;111ttttttt11111111iiii;;;::;:::,,,,,,,,,
1tt11111ii:.,,:;iiiii;;;;;;;itf1tt111i111i1111111i;;ii11i:,i111ii;;;ii11111111111111111i;:,,,:,,,,,.
i1111i1iii;:::;;;;:,,,,::,,,,:iC1t1i11tt1i11t1i1t1;;i;;;:.;11iii;;:::::;ii11111iiiiii1111i::,,,,,..,
i11ii1t1ii;;::;i;;:::::;;;:;;;tLttii1i11iiii111111:;;:::,,;1ii;:,,,,::::;i11ii;:::::::;;;;:::,,,....
1i11i1ii11i;;;;iiiiii;iii1i;;ii1tt111111ii1ii11i1t;:;:,,,:ift1i;:::,;:,:;i111i;::::::;;ii;:::,,,,..,
1ii11ii1ii1;i;;;;;i;;;;;;;;;;;11111i1111i11ii11111:,:,,..,1ftt11ii;;;;;;i1111i;:,,,,::,,:;;;;;,.,,,.
ii111ii11ii:;i;;;;i;;;;;:::;;;tt111i1i111ii1i111i1::,:,,.,itttt1111111111111iiii;;;;;;;;;;;;;:,...,,
1111ii1i111i;11;;;;;::::::::;;1L1t1i1111i111ii111i;,,,,,.:1ffttt1111ii11t111i11111iiiiiiiii:,,,.,.,,
1111iiii1i1;;1i1i;;;;;;;::;;;;i1i1t1it1i;ii1iii11i;:,:,,,;1111111i;;ii1t11111iiii11111111i;,,,.,,,,:
1tii1iiiiii;;11;i;;::;;;;:::::,.,;i11tfLfti;iii11i:::,,,,i1111ii;;;iiiii1i11iii;;i111111i;::::,,,,,:
iiiiii;ii1i;:iiii;:;;::,,,,:,....,:;;itLLLLfttt11i:,,:,,,i1iii;:;iiiiii;;;;;;i;;;;;iii1ii;;;:,,:,,:,
iii;iiii11ii:1i;;;.:;::,,::,.....,,,:;i1111111tfLfi;;;,,,i1iii:::::;;;;;;::;;;;;;;;;iiii;;;;:.,,,,,,
iii1ii111t1i::,,,,..:;:::,,.. ..,,.,,:;;;iii;;;iiittt1:,.:1iii;;;:,;i111iiiiii;;,:::;;;;;;;;,,,,,,,,
11111111i;,,,.,,.,, .:::,..  ......,,,,,::;;;::,..11iii;;;1iii;ii;,,:;i1i111i;:,,::;ii;;;;;,,,,,,,::
111i;;;:,,.,,,,,.,,..:::,.  .,.....,,,,,,,,::,....1ttttt1;:iiiiiii;:::;::::::,,:;;;ii;;;;;:,,,,,,,,,
1t;::,,,,..,,,,...,,:::,.. .,,,..,,,,,,.,,,.. ....tLLLf1::,i1iiiiii;;;;;;;;;;;;;;;;i;;;;;;;,,:;;;;ii
1;,,,,,,,..,,,,...::::,.. .,.,...,,,,......  ... .fLfff1,.,11iiiiiiiiiii;;;;iiii;ii;;;;iiii;iiii111t
i:,,,,,,....,,,..,::::....,......,.,,,,,,........,LLiiiii:;iii;;iiiiiiiiiiiiiii;;;;;:,;i11i;;ii11iii

,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::iiiiii111tLt1ttttfCi;11;:,::::;;;;iiiii1iii;;::,,:;;:::::::;;;:
,,,,,,,,,,:,:::::::,,::::::::::::::;;;;;;i1ii1tCtttfffff1ii:::::;ii11ttt111111111ii;::,,,::,,,,,,,;i
,,,,,,,:,:::;;iii;;;;;;;;;;;;;;;;;;;;;iii1t1iitt1tfLLLLLLfi:iii;iii1tiiiiii1iiiiii1i;;:,,.,,,,,,::::
,,,,,,,,::;iiiiiiiiiiiii;;;;;;;;;;;;;;ii1tf111fti1fLLGGGGC;:;;i:;i;;1;:;::;i::;::i:ii;::,.,,,,,:::;:
,,.,,,,::;;;iiiiiiiiiiiii;;;;;;;;;;;iiii1tt1i1Lf1tfCCCGGLi;;;ii;ii;;ii;;:ii;;;:;::;::;:;:,,,,,,,,,,,
,..,,.,:::;;iiiiiiiiiiiii;;;;;;;;;;;iii1fLL1;tCLt1ttttt1i;ii11tttt11111111iiii;;;;;::;:::,,,,,,,,,.,
;,,:,,,,::;iiiiiiiiiiiiii;;;;;;;;;;iiiitfCGLitt111iiii1ii;:1ttffftttttttttttt11111111ii;:,,,,,,,...,
;;::::::;;;iiiiiii;;iiii;;;;;;;;;;;;;:::;itGftf1i1i;i11i;::1t11iiiiii111111111111111111i;::,,,,.....
;;;;::::;i;i;;;:::,,,,,,,,,:;;;;:,,,,,,,,:;LC1ftii;ii;;;:,:11ii;;:::::;i1111i;;:::::;;;;;::,,,,.....
i;;::,::;iii;;:::,,,....,,,:;;;:,,,::,,::;1LCitt1i;;:::::,iti;::,,,:::;i1111;:::::::;iii;:;:,,,,....
;:::;:,:;iiii;;;::::,,:,::::;;;;:::::::;;1LCGttii1;;::,,:,1f11i;:::;::;i1111;;,,,,,,:,::;;;;;:,...,.
;;;;;;::;iiiiiii;;;:;::::;;iiiii;;;;;;;;;itLCC1i11::::,,,,1fttt11ii;iii1t1111i;;;::;;:;;;;;::,,..,,,
;;ii;;;;;;iiiiiii;;;;;;;iiiiiiiiii;;;;;iii1t11tt1i::;:,,,,;tttttt1111ttttt11t111iiiiiiiii;:,,::..,.:
;,i;;;;;;;;iiiiiiiiiii;;;iiiiii111;:;;;;;ii1iiii;11:::,,:,;11ttttttt11fttt11111111111111i;:,,;:.,,,,
:,11i;;;;;;;;;;iiii;;;;;;iiiiiii11i:;;;;;i11ii11ii;:::,:,,;111tttt111tttttt11ii11111111i;;::::,.,.:,
;,iffi11;;;;;;;i;;;;;;;;;;;;;;;;;;;;;;;;i1tt1;it1i;::::,::;1111111111iiiii;iiiii1111111i;;;:::,,,,.:
i,i11i1t1;;i;;;ii;;;;;;;;;;;:::::;;;;;;i1ft1t11t1ii;::,:,,:111111111111i;iiii11111111ii;;;;;;:,,,,,:
i,i1t1t11i;;;;;ii;;;;;;i;;;;;:::;;;;;;;;1ft;i1ttii111;,;;i111111111111ii;iii1111iiiiii;;;;;i;,,,,,,,
i,i11i1t11;;;;;;;;;::::::::::::,,::::::;11ttiii;ii1ttitfLLtit111ii;:::;;;;;;:;i;iiiii;;;;;;;:..,,,,:
;:11i111tti;;;;;;;;::;;:;::::::::::::::;ii1tt;;iiift1tfffft1t111iii;;:;;;;;::,::;iii;;;;::,,,,,,,:,,
i,11it1t1i1i;;;;;;;;;;;;;;:::::::::::;;:;;iit1iii1t1ttfffftft11ii1iii;;;;;;;;;iiiii;;;;;;,,,:;;iii11
i,1iitt1;ii1i;;;;;;;;;;;;::::::::::;;;,,,,,,:1tfti11tffLCCCfi;tiiiiiii;;;;;iiiiiii;;;;;;;::;ii111111
:,iii1t1i1i;:;;;;;;;;;;;;;;;;;;;;;;;:....,;111i1t1111tfLCLLf::11iiiii11iii11iiiii;;;;;;i:,:;i1111111
:,;1iiiiii;,.;;;;;;;:::;;;;;::::::,.  ....,:,,:;;i1tffLCfii;;;1iiiiiiiiiiiiiii;;;;;;;;i;.,:;i111111i
;,i1i;;;;::, :;;;;;;;::,,,,,,,,,,.     ... .,,:::;LCCCCCi:;;:;iii;;;;;;;;;;;;;;;;i;;;;i,.,:iii11i111
`,
  'UNO Draw 25 Cards': `
      :;iiiiii11ii;,,.     .;;;:,,..........     1GtLGCGGGCCCCCCCCCCCCCCCCCCCGGGGGCGCCCCCCCCCCCCCCCC
       ,;;;iiiiiii;:,..    :;;:::,,.....         1GtLCCGCCCCCCCCCCCCCCCCCCCCCCGGGCGGCCCCCCCCCCCCCCCC
        ,;;;;iiii;:,.      .::,,,.....           1GtfCCCCCCCCCCCCCCCCCCCCCCCCCCCCGCCCCCCCCCCCCCCCCCC
       .,:,:ii;ii,....     .;;;::,....           1GtfCCCCCCCCCCCCCCCCCCGGCCCCCCCCGCCCCCCCCCCCCCCCCCC
       ,;;:;i:.:;,....  ...,;;::,....            1GffLCCCCCCCCCCCGCLLLLfLLCGGCCCGGGCCCCCCCCCCCCCCCCC
       .,:;:.  .,:.     ....,;:,.                1GfffCCCCCCCCCCCft1ttt111tfCGCCGGGGGGGGCCCCCCCCCCCC
  .,,,,,,::,.,,,:i,.........,::,.........        i0fffCCCCCCCCCCt1111ttft111tCCCGGCGGGGCCCCCCCCCCCCC
;fCCCCGGCCCCCCCCCCCCCCCCCCCCCCCCCCLLLLLLLLLLffffitGfffCCCCCCCCCf111111tttttt1fGCGCCGGGGCCCCCCCCCCCCC
CGCCCLt1ttt111tttttttttttfffffffffffffffffLCGGCGC0GfffLCCCCCCCCfiii1111tttt1iiCGCGGGGGCCCCCCCCCCCCCC
CCCf:....  .,,. ...........................,:tCCC0GfffLCCCCCCCCCtiiii111;i1i;itCGCCCCCCCCCCCCCCCCCCC
CCL...,..;ttt1ti.........,,,......,,,,........tGC0GffffCCCCCCCCCf;iiii;ii1fftttLGGGGGGGGCCCCCCCCCCCC
CCt... :fti;:::L: ..........,;itffLLLLLf1;,...;GC0GffffLLCCCCCCCCfii11tff111i11;iii1tfLLLCGCCCCCCCCC
CCt...ifi;;;:::L:.......,;1fCCGCCCCCCCCCCCCt: ;CC0GLfffLLLLLLCCCLt;:;i11ii;;;;;,,,,,,,:::;11fLCCCLLL
LCt..:C11ti::,t1.... .;tLCCCCCCCCCCCCCCCCCCGCi;CL0GLLLfLLLLLCLf1;,,,,::;;;;;;i:,:,:,:,,,,,,,,:1tLCCC
CCt..tftft:::tt... ,iLCCCCCCCCCCCCCCCCCCCCCCCCLCL0GLLLfLLLCf1;:,,:i1ftLfLLf1:,,,,,,,,,,,,,,,,,,,:;1f
LCt..tLtt;;1ti.. ,1LCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0GLfLffLL1:,,:1tLLiiffi11t1t:,,,,,,,,,,,,,,,,,,,,,:
LCt..,1t111;,  ,1CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0GLffffLi,::,tCLftttGffft11tt1,,,,,,,,,,,,,,,,,,,,,
LCt .. ....  .iLCCCCCCC              CCCCCCCCCCCL0Gfffff1,::,it;tCLLt1ii1fLfiif1,,,,,,,,..,,,,,,,,,,
LCt ........:fCCCCCCCCC              CCCCCCCCCCCL0Gfffft::,,,:;i1ft1ii111i:1fi,;:.,,,,,.,,.......,,,
LCt .......1CCCCCCCCCCC              CCCCCCCCCCCL0Gffff1,,,,,,..:11111i:;i;itt11,,,.,,,.:L11i;i.....
LCt .... ,fCCCCCCCCCCCC              CCCCCCCCCCCL0Ctftt;,,,,,,,.;ii1t1ii;;::i;i:.,......:LLLLLL1,...
LCt ... ;CCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0C1tt1:,,,,,,.:;;;;ii;:,...   .....,,,.:ttfffff,...
LCt .. iCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0L1t1i;,,,,,.:i;;:::,. ...........:1tLti1111tf1....
LCt . iCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0L111i:,,,,,.,;;:,.. .............,;;;::i11111t:...
LCt  iGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0L11i;:,,,,....,:,.................,;,,,;11111i,...
LCt iCCCCCCCCCCC        LCCCCCCCCCCCCCCCCCCCC1LCL0Li1i;..,...... ...    .......,...,;11i,:;;;;;:::,.
LC1,CLLCCCCCCCCC   OR   1GCCCCCCCCCCCCCCCCCCt,CCLGLi1i;:...............,,,,,,,,,,,:it11:,,,..:;;::,:
LCtfCLLCCCCCCCCC        fLCCCCCCCCCCCCCCCLCf.,CCLGLiii;:,,,,,,,,,,,,,,,,,,,,,,,,,.,,::...,,::;ii;:;i
LCLLLCCLLLLLCCCCCCCCCCCC1tCCCCCCCCCCCCCCLCf. :CCLGt,:::::::::::,,,,,,,,,,,,,,,,,,,,:::;iiiiiii;::::,
LLLLCfLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCt.. :CCLGt,:::::::::::,,,,,,,,,,:,,;;;iiii;;;:::,,.........
LLCLt:itt1ttLfCCfLfLCCCCCCCCCCCCCCCCCCCC1... ;CCLGt,:::::::::::,,,,,,,,,,fC;,::,,,,,,,,,,,,,,,,,,,,.
CCC;ii,:t           CCCCCCCCCCCCCCCCCCCi ... ;CCLCC::::::::::::,,,,,,,,,,,iCt,.,,,,,,,,,,,,,,,,,,,,,
CCCft1tLC  DRAW 25  CCCCCCCCCCCCCCCCGL: .... ;CCLf8f,:::::::::::,,,,,,,,,,.:fCi.,,,,,,,,,,,,,,,,,,,,
LCCCCCCCL           CCCCCCCCCCCCCCCC1. ..... iCCLf80t,:::::::::::,,,,,,,,,,,.;Lf:.,,,,,,,,,,,,,,,,,,
LLCCLCLCL1f:if.:;iiLCCCCCCCCCCCCCGf: ..  ... 1GCLt0G01,::::::::::,,,,,,,,,,,,,,1Ct,.,,,,,,,,,,,,,,,,
LLCCCCCCCGt:Lf1ttft:tCCCCCCCCCCGLi.  ..,.  . tGCLttL00i,:::::::,,,,,,,,,,,,,,,,.:fCi.,,,,,,,,,,,,,,,
LLLCCCCCLi:LCCGGGCL:tGCCCCCCGGLi.  ,i11tft,. tGCftt:00G;,::::::,,,,,,,,,,,,,,,,,,.;LL:.,,,,,,,,,,,,,
LLCCLLCCL;iiiiiiiiifCCCCCCGGf;.  .1ti:;ttCt .fGGf1f.t00C::::::,,,,,,,,,,,,,,,,,,,,..1Ct,.,,,,,,,,,,,
LCttCCCLCCCLLLLLLLCCCCCGGL1:. ..,f1::;fftC1 .LGGt1f,:C00f,::,:,,,,,,,,,,,,,,,,,,,,,,.,tCi.,,,,,,,,,,
LCt ifCCCCCCCCCCCCCGGCL1:.  ....fi,::iiifL...LGGt1f,,;00G;,:,,,,,,,,,,,,,,,,,,,,,,,,,,.;LL:.,,,,,,,,
LCt...:itfCCCCCCLLf1;,.   .... ;L.::;;;tt....LGG11f,,,1t;:,::,,,,,,,,,,,,,,,,,,,,,,,,,,,.iLt,.,,,,,,
CCL::iiii;:,:::,,.    ........ ,fi;i1tt; ...,CCGiit,;;::::::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,tLi.,,,,,
LLLLCCCCLLti,.                  .;;i;,      1GCGiiGff111tt1L;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.:fL;.,,,
fLLCLLLLLLLftifttttt11111iiiiii;;:::::::::iLGCCGiiGL,,:;;i;f;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.iLt,.,
LLLLLLLLLLLft1tLCCCCCCCCGGGGGGGGGGGGGGGGG000GGGC,i01;1ttfffL,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,tCi.
LLLLLLLLLfft1i::iiiii;:::::::::;;;;iiii1111ttt1:.t8tLfLffttf,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.:fL
CCCLLLLLfft1ii:,:::::,,,,,,,,,,,,,,,,,,,,.,,,..,.tCit11ii,it,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,..;
CCLLfffft1i;ii,,,,,,,,,,,,,,,,,:,,,,,,::,,,,,,,,.tf;;;:,,.t1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
CLLffft11;;ii:,,::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.tC111ii11C1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
`,
  'Bernie Sanders Once Again Asking': `
tt1ttttffffftffttffCCLLLLLffffffffCLffLLLLLC00CCCGGCC0GG888888@8088@@@8888880@00800000008880000G0CCC
11tfftttffffttfftLLLCLffLLLfLLffLLCfLLfLLCCCGCCCCGGCC0GG0888888888888@8888880@8000008888880800GCGCCL
1ttttttfttfftttttfCLLfffffLLfffLCLLLCCfLLLCCCC0000000GG00088888808@@@@888000088000088888888080GC0G0G
111ttttttt11111tttfLLLLfffttfffffCGGGGCfLLG888000000000000088@8808@@@@@8800GGGGG000888888888800CGGGG
111tt111111111ttttttLCCffftfffttfLLCGGCG0888800000GGGGGGGGGG088808@@8880080GCCLC0GG888888088888GGLCC
11111111111ttttttttffffffftfttttffffLG8@88000GGGGGGGGGGGGGGGG008888888808000CfLfGLC0888888888880GCCC
11111111111t1ttttttfftttLftttttttfffG888800GGCCCCCCCCCCCCCCCCGG0888000000GCCLfffLfLGG080088GLC00GCCG
1111111111111tttttttfftfLftttttftfLC88800GGCCCCCCCCCCCCCCCCCLCCG00000000GGGLLLffffLCGG00GG0L11L0GLLC
ii1111111111111111ttfftttttfffffffLG000GGCCCCCCCCCCCCCCCCCCCLLCCG00CLLLCCLLCffffffLCCCCCCCGf11tG0CLC
;;iii1111111111111111t1tt11tttttftftL00GCCLCCLLLLLLCLCCLLCCCCLLCGG0GLLLLfLLLfffttfLfLCGGGCLt11tCLfff
i;iiiiiiiii1111111t11111111tttfttt11fCCCCLLffftttttffttttfLffLLCCGGGfLLLfLffttttfLLLCGGCLLL1i1LCLftf
iii11iii1111111ii111i111i11fftffttttt1fCLffftt11111fLt1i111ttffLLLfttLCttfLffLffffLfCLLLfff111LLLfff
1i111ii11111111ttttf1tf1;itttt1tttftittLCffffffffftCCLtffffffffCLt:,:1fttttttffttfffLLfLtt1111tfLffL
ii11i111111111111tfLLff1i1t1i1tttti:,;ttLfffffffttLCCCftfffffffLt;,...,i111iitttffLLCLLfti1111tffttt
i1t111tttt1t11i;;itttfiii1t1;itti:::;:iLfffttfft1t1ttttt1tfftttt,.::....:i1iiifGLCGLfLLf1iiiiiii;ii;
1i;;1ttttttttttit1111t;i1111111;,:::;,.tffffffttfft11ttft1ttttf: ..:,....,;i;i1ffffft111i;;:::;;:;i:
1tt11111ttttttti1iii;t;it1iii1:..,i:.. .,1ffffttftttttttf1tfft:.,:.::.....,:ii;;tftttt11111iiiiii111
11111111111111111iiiitii11ii1t.  ,ti,..  ,itft111i;iii;i11tff; .;i::i,,.   ,1iittffffffttfLfLLftt111
fttttt11111111iii;;;iti;iii;1t:,,;i1:.... .;t11t111tt111tt1ti..:ii;;;;;;;::111tfffffLLLLffLLf1iiii11
LLCCCCCCCCLLLLCCLLLLLLffffftt1iii1i;;:.....:;1ttttt11ttttti;:,;i;ii1ttttt111ifCCLLCCGCGGCCCCft11ii1i
CCCCCCCCCCCCCGGGGGGGCCLLfffftt1iiii;i;:::,.,::;1tfttffft1;:::;;;iiii1111i11ttttffLCLLftt1ii;;:::::;i
CCCCCCCCCCCCCCCCCCCLffttttttt1t111i;:;:,,,:,,:,,:;iii;;:,:::,,:;:;iiii1i1tttttttttf1;:;;;iii1tffLLLC
CCCCCCCCCCCCtitCCLttttttttttt111111i;;;;:,,:,,:,,,,,..,,,,,,:;;;;ii1111t1111tttttttt1LCCLCGGGGCCLLLL
CCCLLLLLLLLLi;1Cf1tttttttt11111111iii;::;;;;:;:,;,,::,,,,,:;;iiiiiii111111111111tt111fCfLLfLf1111t1t
LLLLLLLLLCCC1:tG11ttt11111111111111i;;;,,:::::::::::;;;iiiiiiiiiiiii1111111111111ttt111ffttfCLLCGGCG
ffLLLCCCGGGGLfffi1tt11111111111i11iii;;i:,:,,:;;::,,,,,:;;;;;;;iiii11111111111111111t11fCCCGGCCCLfLL
CCCGCCCCCGGCG0L1i11iii111111111iiiiiii;;i;;:::i;;;;;;;::::;;;;;;;iiiiiiii111111i11iii111LLLLfLftt111
CCCCCCCCGCCCCL11iii;;i1iiiiii1iiiiiiiiiiiii;;;i;;;;;;;;;;;;;;;;;iiiiiiiiiiiii11iiii;;i111tt11ttt111t
CCCCCCCCCCCCf111;iii;iiiiiiiiiiiiiiiiiiiiiii;;iiiiiiiiiii;;ii;iiiiiiiiiiiiiiiiiiii::ii1i11111i111111
LCCCCCCCCCLLf11i;;::;iiiiiiiiiiiiiiiiiiiiiii;;iiiiiiiiii;iiiiiiiiiiiiiiiiiiiiiiii;,;iiii1ii111111iii
CCCCCLLLLLff111i;::,,;iiiiiiiiiiiiiiiiiiiii;;;iiiiiiiii;;iiiiiiiiiiiiiiiiiiiiiii;,,i;iiiii;iiiiiiiii
Lfffffftttt111iii:;;,.;iiiiiiiiiiiiiiiiiii;;;;iiiiiiiiii;iiiiiiiiiiiiiiiiiiiii;i:.:;:;iiii;;i;ii;iii
ttt11ttt11tiii;ii;;i:,:i;;;iiiiiiiiiiiiiii;;;;;;;iiiiiii;;iiiiiiiiiiiiiiiiiiiii:,:;::;iiiii;iiiiiiii
111111i11t1iii;;;;;::,,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiiiii;;iiii:.:;:::;;;;iiiiiiiiii;
11111i1tftiiii;;;;;:,,,:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiii;:,,:,:,:;;;iiiiiiiii;;i
iiiii11tt1iiii;;;;;::,,,:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ii;;;;:.,:,,::;;;i;;iii;;;;;;;
iiiiittttiiii;;::::::,.,:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::,,,,:::;;;;;;;;i;;;;;;;
`,
  'Batman Slapping Robin': `
;1111111111111111111iiiiifCt;iiiiii111111111111111111111111111111111111111111Cti11111111111111111i1i
;111111111111111111111111iLLi11111111111111111111111111111111111111111111111if111111111111111111111i
;11111111111111111111111111C1i111111111111111111111111111111111111111ii1111111111111111111111111111i
;1111111111111111111111111ifLi1111111111111111111111111ii11111111111i;;111111i11111111111111111111i;
;11111111111111111111111111ift1111111111111111111111111ii1i111111111ii;:iiiiii111111111i1111111111ii
;111111111111111111111111111i1i11111111111111111111111i;i1iii1111111;;i:;;;;;;;;;i111i:;1111111111ii
;1111111111111111111111111111ii11111111111111111111111i;i11iiii11111;;iii;iiiiii;:;i:i:i1111111111ii
;11111111111111111111111111111;i111111111111111111111iiii11;1;111111;i:,,,,,,::;ii;:;;i11111111111ii
;111111111111111111111111111111i11111;:;i111111111111i;ii1i;1i11111i:,........,:;ii;i:111111111111ii
;111111111111111111111i111111111ttt11t;,;,i1t1111111i;;1i1i1i111111;,,,,,,,,,.,.,iii:i11111111111111
;11111111111i;;;;iii1;:;;111tt1i;;;;ii1i:,,i;:,11111i1i111i1i11111i;:i1;,,,::,,:.ii;;1111111111111i1
;1111111111i;;;;;;;:;;:;;;;;;i;,;;:,.,:;::;i,,:11111i1i111i11111111;,,,,:;:,11;,:ii,11111111111111i1
;1111111111i,;;i;;;:;ii;ii;;;;,::i:.,..,:::,,:;i111111111111i11111itf1;;;i;,,,,,ii:i11111111111111i1
;11111111111;,,;;::ii;;i:i1i11:::i,,,,,,,,.,,...,:11111111111t1111;fLtLLfff1tti:i;:111111111111111i1
;111111111111:.,;;i;;i;;ii;i:::;i;:,.,...,,,;:,,..,i11111111tt1111iLffi1t1tttCiii,1111111111111111i1
;1111111111111i,..:;iii;;;i;,;;.,,,,.....,;;:::,,:..i1111ii111t1ti;LLf1111tfLf;i:;1111111111111111ii
;11ii11111111111i;,.:;;i;;i:,:;:......,,,;ii,,,,;i,,,111f1t111i;i;,1fLLLLLLLt::;,::::;;i1111111111ii
:1;::ii;i1111111111i:,,::,i;..:i:::,::;1ii;,,,,,i:.,.;ftfCCf1;;i;,i;:;;1t11i;:ii:::::;::1111111111i1
;i:i,:;,;1111111111111i;:,,:.,.,:ii:;i;;:,,,,,,:;i,,.;L1tCCCi;i;.,;;;:...;1tffffttt1;::::;i111ii11i1
;:;;,i:::;1111111111111tt1ii,.,,.,,,,,,,...,..,;;,,,,.t1ifLLtii:,:;;iiii1tftttttttftfti:;;::i11i11i1
::i:;;;;:;11111111111111111ti.,;:,,.,..,..,,,:;i,,.,,.:1ifCLLLt1tttfttffftttttttttttttft,;i;::i111i1
:;i;:,;:;;iii1111111111111111i,.:,:;:,,::,;ii;::,,,.,::tfLffffLffttftttttttttttttffttftft,:1i;::11;1
;;ii:::;i:;;,i1111111111111111i:.,,::::,:;;,,,..,,.,;:ifttiitttttttt1ttttt111t11111tttttfi.:iii:,11t
;:;ii::1;:i;,11iiiii1111111111it;...,,,.,,,.,,,,.,:::i;f11t1ii1tttttttttt1111iiiiiiiiii1iiii1111it1t
;;:ii;::;i;,;:;;;;;;i;i1t111ii;;1i:.....,,.,,,,..,:;it:fttftt111tttttttttttt1iiii11tt1111;:;:;iiii;t
;1:ii;i;ii,;1:ii,,.:;i;::;i;;;;iiit1i,,,,.:::,,:;1tftL:if1111tttttt111111111ttttttfftfttt,...,;;;;:t
;t::iii:i::1i:i:.,,;iii;i;;i;;;iiii1tti:1111111tttttt1i;1111tt1111tttttt1t111111111:1ftti.....,iii;t
;1;:;:;;::1t:;i.,,,.,:;i1;,;;;;;;;i:tff1iftfffffffffffff1;11;itfffLLfffffffffffffftiii11;,.....:ii;t
;1:::,:;,1111:i,.....,.,:,,:::;:::::tffitfffLfffffffffttf11fi1i111ii1t1tfffffffffLLLffti:.......;;:t
i;:i;;;:;1111;;:,;i:.,,........,,::itfiiftffftttt11111111t1ff1i:1f1;:;1i;i1ffffffffffffff1:,....,i:t
;:ii;;i:i111111i1tti,i1:,;ii1tt111111ttftttt11tttfftfffffffff:Lt,ffft;;ft11ii11ffffffffffLLt:....;;t
iiiii;i:i111111tt11t1;itfLLLLiitfffLtt1tLfffLLffLffffffffffL;;ff;tffff;:LLffft1iitfffffffffff1,..,;t
iiiiiii:i1111111i;i;:tLLffff:1Lfffft1ft;tLffffffffffffffffftifL11Ltffff:1fffLLLL1i1tfffffffffff;..,t
;i;iiii:;11111i;;ii,tLffffL1:LffffL:tffL1fLLfffffffffffffft1ffttffffffL1;LfffffLfft11ffffffffffL1..t
iiiiiii:;111;:;iii;,fLLLLLLf;LfLffL;1LffffLLLLLLfLfffffffttffttfffffffL1iLffLLLfffffttffLfffffffLt,1
iiiiiii;:11i;i;;iii:1ttttttti1ttttttitttttttffffffftftttttftttftttttftf1tfffffffffffL1tffffffffffL11
`,
  'Expanding Brain': `
                                                 1 ........,i;,,.........,,::::::,...,,,,:i; ..... ;
                                                 i        .i:..........,;;;iii111ii:......,i;      ;
                                                 1        :;..........;i;;;;;;;;;;i11,....,,1:     ;
                                                 i        ;:........,.i1;;;;;iii;::;i1,...,,:1     ;
                                                 i       .i,.......,,,,;;1i;;;;;;;;;i1:....,:1,    ;
                                                 i       .i:,,,,,,,,,,,,,:;i;ii1i;i11;,....,,1,    ;
                                                 i        :;,:::::::::,,,,,,,,;ii;i;,.......,1.    ;
                                                 i        .....,:::;;;,,,,,,,,,::,,..,.,,..,;;     ;
                                                 i        ,,,,,:;ii;;;;::;;i;:;;,,,..,,,,,:;:.     ;
                                                 i        ..:11:;i1i;;;i;:;;i;ii;::,:;::;;:.       ;
                                                 1          .:i;:;iii;;:,,,:,.;i1ii;;1i,..         ;
                                                 1          .,,;;::::;;:,::,,.:1i;i;,:,..          ;
                                                 i          ,:,,:::;;;:,::,,,.,;::::::,..          ;
                                                 i          .ii;i;;;;:,,,,,,,..,;1;:;;:..          ;
                                                 i           ,;;:,,,,,,,,,,,....:::i;i:..          ;
                                                 1            ,:,,.,,::,.........:;;;;i:..         ;
                                                 i            ,:.,..,..          .,:;::i:...       ;
-------------------------------------------------i ...........,,.:;ii;::::::::::;;ii:,,,;,,,...... ;
                                                 1 ..,,,,,,::,:itfffffffftfffffffffLLf1;,:::::,,,,.i
                                                 1.,,,,,,::,:tffttttfLCLLfLCtLffffLfttfLf;:;::::::,i
                                                 1.,,,:::::iCftffftLLG8GLLtLffftLtftfft1LG1:;;::::,i
                                                 1.,,:::;:iGt1LfffftttfLCCLCC0CfLftfLtfL1fG1;;;;;::i
                                                 1.::::;;;GftffLLtLLCGG0GGCCLCLCGCLGLfffLiLG;i;;;;:1
                                                 1,::;;;;fCtGCLG0GLC00GG000CCCCG0CLG0CLff11Gfiiii;;1
                                                 1,;;;;i;CLtLCC08GCG0GCCLLLLfLG0LtL08GfffiitG11iii;1
                                                 1,;;;iiiCLtLCCfLLttLLGLtG8GffLGGttLLffti;ifGt111i;t
                                                 1:;;ii1iLCtLff1LL1ffLGLLLC0GGLtLf1111i;:itttt1111it
                                                 1:iiii11fGftfttffLLftCLLLLCfft11;::;;;iitt:;1tt11it
                                                 1:iii11t1CCt1tLf1111tLfftff111i:::::;;i1fCt;;itt11t
                                                 t:ii11ttttGC1fCf1;i1fff111;::,,:::::::;i1fCi:;;tt1f
                                                 t;i111ttfffGLttfffttfti1i:i;,:::::::::;;i1Ltii1tt1f
                                                 t;111ttfffffGL1iiitLt;ii1:::,,,::::::::;;1f1fLffttf
                                                 t;111ttfffLLLGf1i;:f1:;ii,,,,,,,:::::::;;tt1LLffftf
                                                 t;111ttfffLLLCC1ii;it;;1;::::::::::::::;;1itLfffftf
                                                 t;11tfffLLLCCCGti;::1;;;,::,,:::::::::;;;iitCLLfftL
-------------------------------------------------:,:::::;;;;;;;;::;iittt111111111i;,,.,,,,,.,:::::,1
                                                 , ........,,:;itfLCCCCCCCCCCCCCCCCCf1:,,.,,.      ;
                                                 :.,,,,,::::ifCCCCCGGGG0GG0G8000GGGGGGGL1i;::...   ;
                                                 :.,,:::;iiLGCCCCG0G8888000GG0G00000GGG00L1;;:,... ;
                                                 :,,::;11tGGCGG0GGGGG008888888880008888GG8Lti;;:,,.i
                                                 :,::;ittC0G0000GG000888@@@@@@@@@88888@8G00ftii;::.i
                                                 :,::;i1f0G888888888@@@@@@@@@@@@@8888888GC0Gft1ii;,i
                                                 ::;;i11C0G8888@@@@@@@@@@@@@@@@@88@@@888GGG0CLft1i;1
                                                 :;ii111G0G0888000088@@@@@@@@@@@88888880GCC8GCLLf1it
                                                 ::;ii11C0CG00GG0GG08@8888@@@@88800GGGCLfLCGCCLLftit
                                                 ::;ii11f0CCGGG000800888888880G0CLffttttfC11tLLfftit
                                                 ::;i11ttG8GCCGGLLLCCG080080GGCLt11iii1tL0L1i1ffftit
                                                 ::ii1tfLL00LL0Ct1i1LCGCLLLttt1iii;;;:;itL0f1;;1ttit
                                                 ::ii1tfffL0GLLCCLffLLftti1i;;i::::,,,,:;iCLi;;i1t1t
                                                 ::iittffLCC00f111fLC1ii1;;:,,:,,,,...,,:ifffLffft1f
                                                 ::ii1tffLLCC0Cti:,11;::i,,....,......,,,;11fLfftt1f
-------------------------------------------------,............,,................... ...  ,,.,......i
                                                 1.,,,,,,,,,...::,,,,,:::;:;ffi:,,,:;..:tt:......,,1
                                                 1.,,::;tti:,,.,,:::,,,;;;;itti:,,;;,:tfi,,,...,,:;t
                                                 t,,,,:;1ti;;::,,,,;i;iittffLLft1t1;tfi,,,,,:::;::,i
                                                 L;;:,,,,,,,,::;;;;;iffLLLfLLfLfLLCGC1:;;;;;;:,....i
                                                 Ctt1111ii;;::,,:;itLLffffttttttfLLCCCfii11i;::::;:1
                                                 f;;:::;;iii111tttLGLfLfLCLfttfLftffLCGf1fCCf1;;::,i
                                                 t:::::::::::;itL0GCLLLfL0GLfftttttffLCC11ii;:,,,,,i
                                                 t,:::::::::::;iLGCLtttttfLt11tffftffLCC1iii;;;:::,1
                                                 1,::,,,,,,,::;iLfffffftft1i1tftfffLLCGL1i;:::;;iiit
                                                 f;i;;::;;;;;;:;Lffffffttt1tttffttffCCGtiiii;::,,,,1
                                                 LfLf1i;:::;iiiitft1ttt111itffLLLLfLfttfi:::;;iii;:1
                                                 fit1i:,,,;tCGL1itt:;1t;;;:;;itfLffii1;;ii;:,,,:;;;t
                                                 1,:::,:i11111i;:Li,,:;:::::::;it11;;i;:::;ii;;;;:,i
                                                 1.,:;ii;:,,:::::;,,,::::,::::;i1ftLi:,:::,:;1LCt;:i
                                                 1:;;:,..,,,,,:,:;i::,::,::;;iii;LGLt:,,,,,::;1ft1:i
                                                 t,......,,,,,,,,:t:,,,::::;;;;1tiLt;1;,,,,,,::::::1
                                                 i........,.,,,,:,;1;::::::;i1ti::1L::;;:,,,,,.,,..i
                                                 1...........,,,:,,ii::;ii1tt1:,:;:ff;::ii:,,,,,,,,i
                                                 `,
  'Woman Yelling At Cat': `
;::;;;;;;:;::;:;:;:;;;;::;;:::;;ii;ii1iii;;i;;;;:;;;;;;;iiiii;;;;;;i1i1tfttt1ttti:;;;;;;i1iiiiii;;i;
 . .....         ...          ...,,.... .,,,,.. ...,,,,.,,,,,,...,:;i111111;1ti:. ......,,,,.,....,.
...... .,. .. ..,,,........,.::,,;:,,...... .,,...,,,,,,,,:::,,,,i1i1;:;i1i,tti:.,,,,,,,,,,,,,,,....
.  .,..,.   .,:,;i;:::...,,:;:,;1;;i;;;i;;:,. ....,,,,,,,,,,,,,,;1ii; ,ii;,.,,,,....................
.    .,.  .itffi:i1;;;;:,:,,:,:ii:;:;i1111ii;. ...,,,,,,,,,:,,,,ii;i.,i:,...........................
.    ..  ,fLtt1iiiiiii;;;,..,,:,,,,,;:;11iii;, .,.,,,,,::,,:::,,i;;i................................
    .. .,tf111ii1111t11iii,.,,...,,::::ii;::;,  ,.,,:,,;i:::i:,,::.::...............................
    .. .1f11t1111tttttt1i;;,,.. .,;iii;;ii;:;.  ..iii11;;:::;:,,,,..:. .............................
.  ....;t1i11i11111i1t1;:::;,....;;i1i;ii1ii;.  ..tLfLL;;i1111,,,,, ,i:,.     ..  ...,:............,
,,.,,.,i1;i1;;iii;:;i11ii;;;:...,;;i;;;;ii;;,     ittf;;t11tti,,,,,..;tfttttttftiii1t1:........:,..:
.. ..,;i;:;;:;iiiii111111t1;:,...:;i111111i:. .   iff1,tt111ti,,,,:,  ;LCCGGGGCCCLttt,.........::.,:
,:;111i;;:;::;ii11tt1i11i1i;:,..:1ffffttffLfttti..11i:,;11111;,,,,::..tf1LLL11fCLLLf, .....,,..;:.,,
1ttii;;;ii;i;i;iiiii11ii;;i;,,iLCCfttttf1;;i1i:, :i1;,,,:;iii:,,,,::.,ffftfLffLfLLLL,......,,..::..,
;i:,::i1f;:1:;;iiiii;:::::i;tLLfLft1tftLt1i;ii, .i1;:::,,::;;:,,,,::,:111i1tftttffLL:..........::..,
;i,,:iff1::i::;;;ii1ii111iiffttt11tttfttti:.,:. .ii,.,;:,:,;i,:,,,::,,11;i;;;i1ttttt,   .......,,...
;;:1ffft11t1i1i::;;iii1i1tft111;:,;1t1i:,. ..... ,:;:;:.,,.:;.,....,;1ffffttttttttttii;;::,... .....
i;tt1ii;;:ii11i::;::;;itffftt1:,...:::,. .....    :;;i:.....,....:tCt:;;tCGGGG0GG0GCfff1LGCf,,1fLLLL
;::..,,.,,.,,,;;;1;,:1fLftff1,....,,,:,.......... :;:::,,,:i:..,:i11; ...:;;;ittt111iii;iiittL0088Lt
1ii;,::,,::,..,;;;i1ffftttt1, ....,,::, .....,....::::,,,,,;:..;1i;:;::;;;,::::::::iii;;ii1fLCCff1i1
tttft:,ittt1;. :11fffttttti,.  ....,:,. ..........,::,,.........,,,::;;;;iiii;iiiii;i1fLLLttfLCCLLCC
ii;i:.1fLffff1;1ffttttt11i.    ....,::. ......,.,:,,,,,.,,,,,....         .::ii;:,;ii;1CCCGCGGGGCCCL
;iii::tffLLLftttttttt111i,      ...,:: .....,,,,,,:iiiii1t111t1111ii1iiiiitLLCCCCCCLfiifLLLCCCCCLLLL
;ii;;1ttfftttttttt11111i,,.    . ...:,... ....,,,,i11;;;i1iiii111111ttfLLCLCCGCCCCCCCCLffffffffftftt
::;;;;i11ttttt11111111;:,,.     ....,.... ...,,,,,;;;;;;;;;;;;;;;;;;;;;1fLCffLLCffLLLLfffLLffffffttf
  .,:..i1tt11111111ii:.,....       .,,,.  ..,,,,.,:;iii;;;;;;;;;;i;;;;iftLCtffLLfLffLffffLftfLfLLttL
  `,
  'Monkey Puppet': `
@GCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCG@
@Ltttttttt1ttttttttttttt11ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt1L@
@Ltfttttttttttt11111iiiiiiiiiii111tttfffffffttfffftttttttftttttttttttttttttttttttttttttffttfttttttL@
@Cttttttt11iii;;;;;;;;iii;;;;;;;;iii1tttftttfffffftftffftttttttt111iiiiiiiiiiiiii11tttftftttttttftC@
@Ctfftt1i;;;;;;;;;;;;;;;;;;;;;;;;;::;;i1tffffffffftfffffttttt1ii;;;;;;;;;;;;;;;;;;;ii1ttffttffffftC@
@Ctt1ii;::;;;;;;::::::::;;;i1tffft1;::::;ii1fffffffffffftt1i;;;;;;;;;;:::;;;;;;iiii;::;i1ttfttffftC@
@L1i;::::::::::::::::::::;itffffffft1i;:;;i1tftffttttttt1;;:::;;;;:::::::::;;1tffffti;:::;itffffftC@
@f;;::::::::::::::::::::;1tttttttttttft11iiiii11tiiiiiii;::::::::::::::::::;1tttttttft1i;ii1ttttftC@
@t,;::::::,::::::::::::;1ttttttttttttttt1i;:::::i:,:::::::::::::::::::::::ittttttttttttt1i;;;iiiiif@
@t,::::::,,::,,,,,,,:::itttttttttttttt1t11i:,,:,;:,,:::::::::,::,,::::,::;1tttt11tttttttt1;::::::,t@
@t,:::::,,,,,,,,,,,,,,:1ttttttttt11tttttttt1;:,,;:,:::::::::,,,,,,,,,,,,:itttttttttttttt11i:,,,,:,1@
@t,;::,,,,,,,,,,,,,,,,:ittttttttfCCCLfttfLLGGi:,;:,:::::;:::,,,,,,,,,,,,:ittttttt1ttttttttffi,:,:,t@
@t,:,,,,,,,,,,,,,,,,,,,:itttttt:.L0G0Cftf1.101:,;:::;;::::,,,,,,,,,,,,,,,;1ftttttCG0GftttL0C:,:::,t@
@t,,,,,,,,,,,,,,,,,,,,,,,:ittt1:,LGCLftttt111;:,;:::::::,,,,,,,,,,,,,,,,,,;1ttttLGGL:,1ttfC1,::,,,t@
@f,,,,,,,,,,,,,,,,,,,,,,,,:;111iiiiii1tfttt;,,::;;::::,,,,,,,,,,,,,,,,,,,,,,;1t1i11;:;1ttt1;:::::,t@
@t,::,,,,,,,,,,,,,,,,,.,,,,:i1111i11tftfffft;:::;:,,,,,,,,,,..,,,,,,,,,,,,,,,:11ii;ii1tffft;,::::,t@
@f,:ii:,,,,,,,,,.......,,,:iii1ttttttttttttt1i;:i;:,,,,,:;:,,,.,,,,,,,.,,,,,:ii1ttttttttfffti::::,t@
@f;::;,,,.............,.,:iii1tt1ttttttti;;:::::ii;:,,.,;1;,.,............,:i1i1t1ttttttt11ii;::;:t@
@f;;,..............,..,,,;iii1111111t111;,...,::iii;:,.,,,,..............,,;i11ttttttttti,,,,,:;;:f@
@f;;:,.................,:;i;::;;;;;iii;;::::;;;;1ii;;:,,.................,,;i;;;;;iii1ii;:,,:;;ii;f@
@f;i;:,................,,:;;i11iii11iiiiiiiiiiii1iii;;;:,................,,:;;iiiiiiiii;;;;iiiiii;f@
@fiiii;:,.. ............,,::::::::::;;;;;i111111t1iiiiiii:. ..............,::;;;;;;;iiiiiiiiiiii1iL@
@L111111111ii;:,,.........,,,,,,,,:,:::;11ttttttft11111111i::,,.............,,,,,,,,,::;i11tttttt1L@
@L1tttttttffffftt1iii;;::,,....  .....,;1tttttttft1tt1111tfffftt11iii;::,,,.........,..,itttttttt1L@
@L1tttttttt11111111tttffffttt1ii;;:,,:i1ttt11111ttttttttttt111111ttfffftttttt1ii;:,,..:itt11111111L@
@L1tttfLLLLLfttt11ii;;;;;;;iiii1111111ii11tt1tttft1t1tfLLLLLfttt1ii;;;;iiiiii11111111iii1tt1111111L@
@CfffCGCLfffLLLLLCCCLft11iiiiiitttfft11ttfLLffLfLfffLLGCLfffLLLLLLLLLftt11iiiiiiii111ttttfLLffffLfC@
`,
  'Disaster Girl': `
fLCCGGGGGGG0000GCLLLft11ii1ffttt1iiiiiii11iiii11ttfLLftLfitCGLtffG8CLCCGCCG0088800000000008888888800
LLffffffLLLLLCGGGGGCLfftii1t1;i1ii;;;;iiiiiiiii11fLCGCftLftCGf1fGGLfCCGGCG0088000GG00000088888888880
LLCCCCCLffffffLCCCCCLtt1i;11i;iiii;;::;i111iiii1fLCGCCffLftCGffCCCLLGGCCCGGGG0GGCCGG0000888888888880
CLLCCCCG0GGGCCLLLLLLf11111t11iiiii;;::;;iiiiiii1fLCCLLfL0GGCG08CtfCLG0GGGG0GLCCCCCG00080088888888800
LGCLLCCLCCG0GGGCCCftt111tLCt111111i;;;;;;;i;ii1tffLLLLGCLGLLGLfLttfCG0000000LLCCCCLC0800888888888880
CCCGCCGGGCLCCCGGLLf11ttffLft11ttt1i;:;;;iii11tfLLCLfttCi,: .;11tLCCfLLCG0G00ffCCCCLG0008800088888880
GCCCCGGG000GGCGCf1111tfLLCLtii11t11;;;;i1tttfffffLLLLf1:;1:,,..;ffLLC1:f1i1CfLCCCCCG0088G0GG0GG00000
LfLCLfLLCCGCLftt1111tttfLLLftt1111ii;iii1tfttttttttff;:,,i::i;,iLfLfti;1::;ffffLCLLCCCGCLfffCCLGCGGG
CCLLffftttfftttffft1ttttfLLffttt111ii1t1111tt1111ttiit1;;;;itttftLLfttff11tttfffffft1111111tttfCLtLG
fLCLCCCLLfftttfLfttttffft11fLffttfLttt1111ttt1111i;iLGLCLtCCGCCCffLfffftttt111ii;;;i;;;:;;iii11tffLC
CGGGGGGCCLttLLLLLffLCLLC1;;LCLCCCCCft1ii111tttttt11fLLttLt11i1ii::;ittt111i;;:,,,,::::::,.,:;;;;;iit
GGGCCCLCCCttLCCCCCCCCCCGfiiCGG00GGCLttt1111tttff1i;itt111;1ti::t,,;iiii;;;;:::::;;;;;;i;i;::::::::::
08000G00GCGGGGGGGGGGGG00L11G00GCLffLLLftt111111tf1:ifti;;:ii;:;1ii1iii;;:::::;;;;;;;;;;;;iii;;::,,,:
11tt11111iitt;;11iii1fCGLt1tffLLfCCCCLLLfLfttLLfLCCt;,::::,..,;;i;;;:::::;;;;;;::::;;;;:::;;;;::;:,,
. ,,..,i,.,;:itt1i1i11i;:,,.,:iii11ttfGGtfftfCCCG00GL11;;ft:,;;;:,,,::;;ii;iii;;::::::::::::::::::::
,,it,,;L,.;t;ifff1LGCCCi:,,,:;1i,,,::;i11iiitt1ttfft11tii11i;::,,::;;ii11i1111i;;:,,,,:,:,:,:,,:,,,,
:,1t,,;;,,1t:1i,ttfL1:;;;i;1fCG1;;;;;i1t1i;:tttLLt1111Lf:;ii::,,:;i11111tttt11i:;;,....,,.,,,,......
,:1;,:;::,tfit1:itti..,.:11ffGGi;;;;:tfL1;..i1111t1ii;;:;ii::,,::1t11tttft11iii::;:,.  ...,,,, ... .
.:1ii;i;;;tCCt::,it,.,:,:1ititL;;;iiitff1,..,i1111i;;;::;1;:,,,;1111tttttt11i;;:,;::,.    .,..      
 ,tLLLLffLLCGL:,:ff,.,,,ittf1iii1iiiii1ti,..:tfffff;:;f;;i;,,,:i111tttttttt11i;:,,:::,    ....      
,:ii11ffiii1tt;:;1;, ..,i1tLLffLL1111;tLi,. :11fffti;;iit;:,.,;i1ttttttttt111iii;::ii;:.   ...      
ft111;,1tt1;:;ii;;;.   :;;;;;;;;;;;;;;;i;:..,:;;iiii;;itti;..,;11111111111111111tti;ii:..    .      
::::::..:itLti;iii;...,;;;;;;;;;;;;;;ii;i;,,;iiiiiiiiiii;:,...:;;;iiiii;;;::::;;i111ii;,,..         
iiii1iiiiiitfffLf1111111tt1111iiiiiiiiiiii::iiiiiiiiiii;;:.. ,,...,;ii;:,,,..,:::;;iiii,,....       
iii;;iiiiiii;i1tffftttttt1t111111iiiiiiiiiiii;iiiiiiiiii;,,. ,,.:. .1ti;::,,::....,:;;i:,,.,...     
ti;;;;;;;;;;;;;;;;;iii1i111111ttttttttttt11111iiiiiiii;;:,,. .;;;;;ifLt111i;i;:::;i1111;,:,,,...    
;iiiiiiiiiiiiiiiiiiiiiiiiii;;;;;;;;;;;;;;;;;;:::::::::::,,.. .1ttttLCLfttfftt1ttffLLffti,:,,,,..    
iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;;;;;;;;;;;;::.....:ffLfLCCCLfffLLLLLLLLLfftti,,,,,,...   
iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;;;;;;;;:::::::,,,...:tttttttttff1tfLLLLLfffft1i,:,:,...... 
iiiiiiiiiiiiiiiiiiiiiiiiiiii;iiiiiiiiii;;;;;;;;;;;;;;:::,,,,,.i1ii1i;::;;i11tttttt11111;,:,:,,......
;;;;;i;iiiii;;;ii;iiiiiiiiiiiii;i;;iiiiiiii;;;;;;;;iiii;::,,:,,;;;111i111t1iiiiiiiiiiii;,:::,.,,. ..
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiii;;;;;;:;;;;;;:;:::i;;;;;;;;;::::;iiiiiiii::::,,,,.... 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiiii;;i;;;;iiiiiiiii;;;;;;;;;;;;i11;:::::;;iiiiiiiii;;::::,:,,,..  
;;::;;;;;;;;;;;:;;;;;;i;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:;;;;;:::::;;;1ttt11111111iiii;;;:::::::,,,.   
;;;;::::::::::;;;;;;;;;;::::::::::;:;;;;::;;::::;::::::::::::;;;;;:;tfffftt111iiiiii;;;:::::::,,. . 
;;;;;::::::::::::::::::::::::::::::::::::::::::::::::;;::::::;:::;;:;i111111111iii;;;::::::;;;;:,...
::::::::::::::::::::::::::::::::::::::,::::::::::::::::::::::::,,,,:,::;:;iiii;::::::::::;;iii;:::,.
::,,,,:,,,,,,,:::,,,,,,,:::::::,,:::::,,::::,:,,,,,:,,:,,,,::,:::::::::::i1i;;;;;;;;;;;i1tfLLLLt;;;,
`,
  'Is This A Pigeon': `
ffffffffffffffffLGGGGCCCCCCGGGGGGGCCCCLLLLffftt1111ii1CLi;;::::;tCLiifCCCCf1111111111111111111111111
ftffffffffffffffCGGGGC1iiiii1111ttttffffLLLGCCCCCCCCCCGCCCLLLfffLCL1itCCCCf1111111111111111111111111
fffLLLffffffffffCGGGGG1;;:::;;;;;;;;;;;;;;1Cf;iiiiiii111tttffffLLCL1;tCCCCf1t11111111111111111111111
LffLLffLLfffffffCGCCCC1;;;;;;;;;;;;;;;;;;;1Cf;;:::::::::::::;;;;tLL1;tCCCCftt11111111111111111111111
LffLLLfffffff                              Cf;;;::::::;;;;;;;;;;tLL1itCCCCLtttt111111111t11111111111
LffLLLLLfLLff                              Cf;;;:::::;;;;;;;;;;;tLL1i1CCCCftt11tt111111LCLt1t1111111
LffffLLLLLfff                              CL;;:::;;;;;;;;;;;;;;tLL1i1CCCffCLft1111111LCLCCt11111111
LLLLLLLLLLLfLfLfCCCCCC1;;;;;:::::::;;;::::1CL;;;;;;;;;;;;;;;;;;;1LL1i1CCCfLCLLLt11111fLLLLCCt1111111
LLLLLLLLLLLLLfLfCCCGGG1;;;;::::::::;::::::iLL;;;;;;;;;;;;;;;;;;;1LL1i1CCCLfCLLCCLtii1LL0LLCCC1111111
LLLLLLLLLLLLLfLLCGCCfti;;:::::::::::::::::iLL;;;;;;;;;;;;;;;;;;;1LL1i1CCCCffCLLLCff1tCffLCLLCf1t1111
LLLLLLLLLLLLLLLft1i;::::::::::::::::::::::;CL;;;;;;;;;;;;;;:::;;iLLti1CCCCL1fCCLfffLtfLLLLCCCL1tt111
LLLLLLLLLLfLfti;:::::::;;;;;;::::::::::::::i1;;;;;;:::;;;:::::::iLLti1CCCCLf1tLCLLLLf1tffffLft1ttt11
LLLLLLLLLLLfi:::::::::::::::::;;:::::::::::::;:::::::::::;;;;;;;iLLti1CCCCCftt1tffttCC1fCft11ttttt1t
LLLLLLLLLLt;:;::::::::::::::1fffff1;;;:::::;i:::::::::::::::::;;iLCti1LCCCCfttttttiLCCfifCCLf1tttttt
LLLLLLLLti;::::::::::;:::i;:tLLLLLLt;fi:::::1f1LLLLLffffftttt111tLCti1LCCCCftttttt1tLCL11tfLf1tttttt
LLLLLLLi;:;;;;;;;:::;1::;fi1LLLLLLLLtL11i:;1:1ttttfffffLLLLLLLLLLLCti1LCCCCftttttttttttttttt1ttttttt
LLLLLL1:;;::;;;;;::;fi;it1i111tfLLLLLt1t1;:ff::::::::::::;;;;;;;iLCti1LCCCCftttttttttttttttttttttttt
LLLLLf;;::::::::::ift111ii1i1i;1LLLfii111i:1Ci;;;::;:::;;;;;;;;;ifLti1LCCCCftttttttttttttttttttttttt
CLLLCt;;::::::::;fLLf1i1111t111;i1i;i11ii;;fLi;;:::::;;;;;;;;;;;ifLt11LCCCCffffttttttttttttttttttttt
CCLLC1;;;:;i11;:;1ii;:iLfC0C1iCiift;tG1i1;;LLi;;::::;;;;;;;;;;;;ifLt1tLCCCCffffffffttttttttttttttttt
CCCLC1;;:;fffffi;ttfft;tLCLLtft;tLL1iftt1:iLLi;;::;;;;;;;;;;;;;;ifLt1tLCCCCffffffffftttttttttttttttt
CCCCC1;;;ftfttff1LLLLLti1111111tLLLt11ttt;iLLi;;;;;;;;;;;;;;iii;ifLt1tLCCCCffffffffffffftttttttttttt
CCCCCf;;;ffLfLtfLLLLLLLLLLLLLLLLLLffffLLLiiLLi;;;;;;;;;;;;;;i;;;ifLf1tLCCCCffffffffffffffftttttttttt
CCCCCCfi:1LtfLfffLLLLLLLLLLLLLLLLLfffLLLLiiLCi;;;;;;;;;;i;;;;;;;ifLf1tLCCCCffffffffffffffffftftttttt
CCCCCCCL1;ifffftfLLLLLLLLLLLLLLffffffLLLLiiLC1ii;;;;;;i;;;;i1t1;ifLf1tLCCCCffffffffffffffffffffttttt
CCCCCCCCL;:;1tftfLLLLLLLLLLLLL1ii11iifLLfiiLC1;;;;;;;;;i1tfffti;ifLf1tLCCCCLffffffffffffffffffffffft
CCCCCCCLt1f;:::iffffLLLLLLLLLLffftt1fLLLt;iLC1ii;;;;;;tfLLLf1i;iifLfttfCCCCLfffffffffffffffftfffffff
CCCCCCCLLCCf;i;tLLLffLLLLLLLLLLLLftfLLLf;:;LCi;;;;;;ifLLLfi;;;;;;fLfttLCCCCLffffffffffffffffffffffff
CLLLCCCCCLLLt1i1LLLLffffLLLLLLLLLLfLLLLttttLCtt111i1LLLLfiiiiiii;tLf11fLLLLfffttffffffffffffffffffff
CCLCCCCLLLLLCCtfLLLLLLLffffffLLLLLLLLL1tLLLCCLCCLLfLLLLLfffffffttffttffffffff11itfffffffffffffffffff
CCCCCCf1ffffff1ffffffffLLLffffffffffft;;;;iLC1ii1fLLLLLLLLLLLLLLLLLLLLfffffft1i1ffffffffffffffffffff
CCCCLCfiiiiiiii1tLLLLLLfffLLLLfftttLCCLLft1fL1;ifLLLLLLLLLLLLLLLLLffftffffft11fLffffffffffffffffffff
CCCLLCLiiiii11iii1tfCGGCCLftfLLffLfCGGGGGGGCLti1LfLLLLLLLLLLLLLLLLLffftttttttfLffffffffffffffffft1i1
LLLfLLffftt1iiiiiiii1fCCt11iifLLLLfLGGGGCGGGGGLtLLLLLLLLLLLLLLLLLLLftttttLLLLLffffffffffffft11fti;;;
LffffffLLCCCLtii11i1iit1iiiii1LfLLffCCCGGGCGGGffLLLLLLLLLLLLLLLLLLfft1tLCCCLLLLLLfLLffffff1;;;;;;;ii
CCCCCCCCLfLCCCf1iiiiiiiiiiiii1LfLLffffffLCGCGCfLLLLLLLLLLLLLLLLLftffttfCCCCLfLLLLfft1;;i11i;;;;;;;ii
ffCCCCCCCCLfCCCCf1iiiiiiiiiii1fffffLffttLfCGCffLLLLLLLLLLLLLft1iitLLttfCCCCLLLLLLL1;;;;;:;;;;;iiiiii
CftLCCCCCCCLfLCCCLf1iiiiiiiiiiffffffffffLCfLffLLLLLLLLLLLft1i;;;itLLttfCCCCLfftt11ii;;;;;;;;;;;iiiii
CCLtfCCCCCCCCffLCCCCLt1iiiiiiitLLCCCCLLLLLtfLLfLLLLLLLLfti;;;;;;itLLttfCCCCf11i;;;;;;;;;;;;;;;;iiiii
CCCCtLCCCCCCCCLfLCCCCCLf1iiiii;;i1tffLCLftfLLLLLLLLLLLfttfft1iii;tLLttfCCCCf111111;;;;;;;;;;;iiiii;;
CCCCLtCCCCCCCCCCffCCCCCCCLt1iiiiiiii;fftfLLLLLLLLLLLLLtLLtCCCCff11ffttfCCCCf1111t1ii;;;;;;;;iiiiiiii
LLCCCtLCCCCCCCCCCffCCCCCCCCLftiiiiiii1ffLfLLLLLLLLLLLt1fLftCCf;1tt1;;;i1tfLt1111111i;;;;;;;;;;;;;ii;
fLCCCLtfLCCCCCCCCCfLCCCCCCCCCCL1iiiitffffLLLLLLLLLLLt1ii1LtfC1ittf1;it1iii;;;;;;iiii;;:::;;;;;;;;;;;
CCCCCCCLffLCCCCCCCCfLCCCCCCCLLLLfLfLLfffffffffLLLLLtftifLLCtti1ttt;;tLf11fLttt111ii;;;:::;;;;ii;;;;;
LLfffffLCLffCLCCCCCLfCCCCCCLfLLCCCCCCCCCCLLLfffLfLfttifCCCff1ittt1;iffiiifii1ifL11ffftt11;;;;;;;i;;;
`,
  'Clown Applying Makeup': `
                                     @@@@@@@@@@@@@@@@@@@@0088888888888800GCLfC@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@@@@GG0000008888000Gf11;t@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@@@80000080888888880Ltt1L@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@@@8CCGG088000000000ftt1C@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@@@8GLfff080ftLLLG08CtLCCG@@@@@@@@
                                     @@@@@@@@@@@@@@@@@@@80000G880GCCC08880fCCC0@@@@@@@@
                                     @@@@@@@@@@@@@@8GCCCGGG0G00G888888888GLCC0@@@@@@@@@
                                     @@@@@@@@@@@@8GLLCCGGLCGCGGC088888888GCG0@@@@@@@@@@
                                     @@@@@@@@@@@0CCCCCGGfLG0GG08888888880LC@@@@@@@@@@@@
                                     @@@@@@@@@@@0CCCCGGGGCLCCG00G0888880CLC@@@@@@@@@@@@
                                     @@@@@@@@@@@8CCCCCGGCG0GG000888880GCCCC@@@@@@@@@@@@
                                     @@@@@@@@@@@8CCCCCGGGGLLG088800GCLLCCCfLG08@@@@@8@@
                                     @@@@@@@@@@@8CCCCG00C.,ffLLCCCCCCGGGGCLLLL1;tG888@@
                                     @@@@@@@@@@@@88888000GG00000000GGCCCLC88880GG0@@@@@
                                     @@@@@@@@@@@@@@@@0G000008888800GLtt1it@@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@0GGG0080GGG8880Cffttf@@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@CLC088CtttfL080Cffftf8@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@C11tG8G1i11f8880ffCCCC@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@0Cit088Gf1fG8888CLGCC0@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@GCL080888G80GGG0GCCCG@@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@0LG00088880GGGG0GLC0@@@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@8LCGG0088GC08888CLC@@@@@@@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@Gt111;fGCfLCG0CLCC@@@@@@@@@@@@@8@
                                     @@@@@@@@@@@@@@@@@@0Lt;1G0Lf1ifCGGCLG@@@@@@@@@8@@8@
                                     @@@@@@@@@@@@@@@@@@GfLLGGC1fLLGGGGCLfLGGG8@@@@@@88@
                                     @@@@@@@@@@@@@8Gfi, ,LCCCCGG000GGGCLLLLi .;L08888@@
                                     @@@@@@@@@@@@8Ct1111fGGGG00000000GGGG0Gftt1tfG@@@@@
                                     @@@@@@@@@@@@@0GCCLLftttttttttffLLLCCC0@@@@@@@@@@@@
                                     @@@@@@@@@@@8GLffttttt11t1tttttffLLLLLCG8@@@@@@@@@@
                                     @@@@@@@@8GGCLfffttttt1111ttttfffLLLLLLLG@@@@@@@@@@
                                     @@@@@@@G1tfffft11tttttffttttfffLLLLLLLLL0@@@@@@@@@
                                     @@@@@@GtfCGLti11;tCfffCCCCGGLfffLLf1tGLtL8@@@@@@@@
                                     @@@@@GfLCLGCf1;i;1fLG0C1ttf0GLLtLL;iC0CCC0@@@@@@@@
                                     @@@@@CCCLfLLCLt;;ti;f8Gt;it08Ci1CLLG00GGC8@@@@@@@@
                                     @@@@@GLtfCG008@GtLLtC880CL00G1;fCCGG0GGGG@@@@@@@@@
                                     @@@@@CfC8@@@@@@@8ffL0008880CtiitCGGGGGCG8@@@@@@8@@
                                     @@@@@08@@@@@@@@@@01tLC00GLCCt1;iCGGGGCG8@88888@8@@
                                     @@@@@@@@@@@@@@@@@@C1;i11fLff1;;tLCGGG8@@8@@8@@@8@@
                                     @@@@@@@@@@@@@@@@@@@CffLGGL1;:;i,..:1G@@88@@@@8888@
                                     @@@@@@@@@@@@@@@@@Gt;LGGCtiiitf;:;;;;itG@@@8888888@
                                     @@@@@@@@@@@@@@8GCLCCLLLLLLLLLLLLLLCCGC0@@@@@@@@@@@
                                     @@@@@@@@@@@@@0CLLffftttttt111ttttfffLLCG8@@@@@@@@@
                                     @@@@@@@@@@@@@GfLLLffffftttftttttffLLLLLL0@@@@@@@@@
                                     @@@@@@@@@@@@8CLffftfLCCCCCGGCCLfffLLCLLLL0@@@@@@@@
                                     @@@@@@@@@@@@0ftttt1fLCG088GffC0CLCLLLLLffG@@@@@@@@
                                     @@@@@@@@@@@@@Gtttt1Ct1fG8011i100LLLLLLLffL8@@@@@@@
                                     @@@@@@@@@@@@@@Ct1if0f;1tLLLttG88Gfffffffff8@@@@@@@
                                     @@@@@@@@@@@@@@8CftfLL11111tG80GGGLtt1ttffG@@@@@@@@
                                     @@@@@@@@@@@@@@@80GCLfft1tfG800G0CttttL088@@@@@@@@@
                                     @@@@@@@@@@@@@@@@@88Ctt1tffLftG80fLLCC0@@@@@@@@88@@
                                     @@@@@@@@@@@@@@@@@@@@GCt11tL080GCL8@@@@88888@@@@8@@
                                     @@@@@@@@@@@@@@@@@@@8LCGGG080CLLCLL088@@@@@@@@@@8@@
                                     @@@@@@@@@@@@@@@@@@0LCCG000GGGG00GCCCC8@8888888888@
                                     `,
  'Hide the Pain Harold': `
08888888888888888888@@@@@@@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@@@@@@@@@@@@8888@88@@@@@@88@@888@@@88808@888
@@@@88888888888888888@@@@8@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@@@@@@@800GGCCGG08@@@@@@@@88@@@@@8888808@888
@@@@88888800888888888@8GftL8@@@@@@@@@@@@@@@@@@0CffG8@@@@@@@@@8GCLffLLLLLCC08@@@@@@@@@8888@@88888@888
@@@@@888880088888888888GCCG8@@@@@@@@@@@@@@@@@@0GCCG8@@@@@@@@8CLffffffLLLLG08@@@@@@@888888@@88888@888
@@@@@@@888000888888888800008@@@@@@@80G0008@@@@00000@@@@@@@@@GLfffffffLCCCG08@@@@@@@@888888@88888@8@8
@@@@8888000000088888888000G8@@@@@@8G08@@808@@800000@@@@@@@@@GLLLfffftffLLCCLC8@@@@@@@@88@@@8888@@888
@@@8888880000088888888@00008@@@@@@808@@@8G8@@@00000@@@@@@@@8CffffffftttfLLtit8@@@@@@@@@@@@@8888@@888
@@@888888880888888888880GGG0888@@@@80080G0@@@880GG0@@@@@@@@@C1ftt111tftfLftfL0@@@@@@@@@@@8@8888@@@@@
8888888888888888GGGGGGGGCCCGGGGGGGGGGCGCGGGGGGGGGGGGGGGGGGGGCfftttttttttfLLCit8GGGGGGGGGGGGGGGGGGGGG
0000888888888888GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCft1ttttttfLLtiiCGCGGGGCCCCCCCCCCCCCCCC
0008888888888888GCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCftt1fftfft1;1fLLLCCCGGGGGCCCCCCCCCCCC
0GG0008888888888GCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCfCGLffftt1ii;tLtfLLLLLLCCGGGGCCCCCCCCCC
GLC0G00888888888GCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCLtffLftti;;;i;;ttffLLLLLLLLCLCGGCCCCCCCCC
LfC0G0008888@@@8GCCGCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLt1LffLLft111t11ffffLLLLLLLLLLfLCCGCCCCCCCC
CfCGCGG0LLLCCCGGCCCCGGGGGGGGGGGGCGGGGGCGGGGGGGGGGGGGCCCLLftLttLLLfLLfffffffffLffLLLLLLfLCLLCCCCCCCCC
80080008CffffLLLLLLCCCCCCCCGCGGGGG0GCGCCCGGGGGGGGGGGLfLLLffffCCCCCCfffffLffffffLffffLffLLLCLLLCCCCCC
@@@@@@@@8LLLLLLLLLLLLLCCCCCCCCCCCCGGCGCGCCGGGGGGCGCCLtLffftfGCGCCCCffLfLLLffffffttffftfLLLffLLCCCCCC
0@@@@@@@@CfLLLLLLLLLLCCCCCCCCCCCCCCGCCCCCCCCCCCCGGLLLttttftfCCCCCCLffLffLLftftttt1tff1fLLtfLLLCGCCCC
8@@@@@@@@8LLLLLLLLLLLLLLCCCCCCCCCCCGCCGCCCCCCCCCCGLfLft1tfffCCCCCCLtfLffLfttLLfft11tt1tt1fLLLCLGGCCC
0@@@@@@@@@CfLLLLLLLLLLLCCCCCCCCCCCCCGLCCCCCCCGGCCCLfff1itfffLLCCCCLtffffft1fLLLLLLfftt1itffffLLCGCCC
0@@@@@@@@@8fLLLLLLLLLLLLLCCCCCCCCCCCGCCCCCCCGCLLLfffff1;tffffLCCCCLttttfftfLfLLfLLLLLCCttfffttfffLCC
0@@@@@@@@@@CfLLLLLLLLLLLLCCCCCCCCCCCCCLCCCCLfttttt11111itfffttfLLLf1fttttttfffffffffLLCLtLLLLfttttfC
0@@@@@@@@@@0fLLLLLLLLLLLLLLLCCCCCCCCCGLfLLLLLf1111111i;:1fttttttt11tfftttt1ttfffffftffLLffftfLftfftL
0@@@@@@@@@@@CLLLLLLLLCCCCCCCCCCCCCCCCGL1tttffff1iii1iii;ittttt111ttffttttttttttffffLLffffLfttffffLfL
888888888888Giii1111tttffLLLLLCCCCCCCCGt1111111111i11t111ttt1111tttttt1t11111111i11ttfffffLLfffffffL
8888888000000i.,,,,,,,:::::::;;iii111tt1tfLLfftttffffftLLfffffffffffffttttttttt111111t1fftttffffffLL
8888888000000L;:,,,,,,,,,,,,,,,,,,,::::,ittffffft1iii11tfLLLLLLLLLLLLLLLLLLLLLLLLLLCCCLLLLLLLLLLLCGG
88888000000000Cfftt111iii;;;;:::::,:,,:::;i1;;;;;ii1tffL1;fffffffffffttttttffffffffffffffffCGGGGGGGG
0888000000000CLLCLCLLLLLLLLLLffffttt1111ttffffLLCCCCCLLLLtttttttttttttttttttttttttttttttttfCCCCCCCCG
GGG000000000GCLLLLLLLLLLLLLLLCCLLCCCCCCCCCCCGGGGGGGCCCCCCCLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCG
0000000000000GGGGGGCCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGCCCCCCCCCCCCCCCGCCCCGCGGGGGCGGGGGGGGGGCCGCCCCCCC
GG0000000008888888888888888888888888888888888800000000000000000G000GGGGGGGGGGGGGGGGGGGGGGGGGGGCCCCGC
0000888888888888888888@@@@@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@@@@@@@@@8800088888@@@@@@88@@@88@@@888088888
@@@@888888888888888888@@@8@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@@@@@@80CLLffLCG008@@@@@@@88@@8@@8888888@888
@@@@8888880088888888888Gftf8@@@@@@@@@@@@@@@@@@0CtfG8@@@@@@@@80CLfffffftfCG0@@@@@@@@@88888@888888@888
@@@@8888800088888888888GGCG8@@@@@@@@@@8@@@@@@@0GCCG8@@@@@@@@8CLLffffffffLC08@@@@@@@888888@@888888888
@@@@@88880000088888888800008@@@@@@@80G0008@@@@00000@@@@@@@@@0CLLLLfffffffLC000@8@@@@888888@8888@@8@8
@@@@888800000000888888800008@@@@@@8G0@@@808@@@00000@@@@@@@@@0CLftffttt1tffLG1G@@@@@@@@88@@@8888@@8@8
@@@8888800000088888888@00008@@@@@@@00@@@8G8@@@00000@@@@@@@@@8Lt11ftttt1tffCCf08@@@@@@@@@@@@8888@@888
@@@888888880888888888880GGG088@@88880000G0@@@@80GG0@@@@@@@@@@GfftLttttfttfCGG@@@@@@@@@@@@@@8888@@@@@
8888888888888888GCCCCCGCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGLtffttt1tftfGC10GGGGGGGGGGGGGGGGGGGGGG
0000888888888888GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLfffftfLfL1iLGCCGGGGCCCCCCCCCCCCCCCC
0008888888888888GCGCCGGCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCLLffLt1;iffLLLLCCGGGGGCCCCCCCCCCCC
0GG0008888888888GCGCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLLf11tt1i;;;ftffLLLLLLCCGGGGCCCCCCCCCC
GLC0G00888888888GCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCftffL1iii1i1i;ittfLLLLLLLLLCLCGGCCCCCCCCC
LfC0G0008888@@@8GCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCfLt1fffLLfttttt1tfffLLLLLLLLLLLfLCCGCCCCCCCC
CfCGCGG0LLLCCCGGCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCLLftLttLLLfLLffffffffLfffLLfLLLfLLLLCCCCCCCCC
80880808CfffffLLLLLCCCCCCCCCCGGGGG0GCGCCCGGGGGGGGGGGLfLLLffffCCCCCCffffffffffffLftffLffLLLLLLLCCCCCC
@@@@@@@@@LfLLLLLLLLLLCCCCCCCCCCCCCGGCCCCCCCCCGGGGGCCLtLffftfGCGCCCCffLfLLLffffffttffftfLLLffLLCCCCCC
8@@@@@@@@GfLLLLLLLLLLLCCCCCCCCCCCCCGCCCCCCCCCCCCCGLLLttttftfCCCCCCLffLffLLftfttt1ttff1fLLtfLLLCGCCCC
8@@@@@@@@8LLLLLLLLLLLLLLCCCCCCCCCCCGCCCCCCCCCCCCCGLfLLt1tfffCCCCCCLtfLffLfttLLfft11tt1tt1LLLLCLGGCCC
8@@@@@@@@@CfLLLLLLLLLLLCCCCCCCCCCCCCGLCCCCCCCGGCCCLfff1itfffLLCCCCLtffffft1fLLLLLLfftt1itffffLLLGCCC
0@@@@@@@@@8fLLLLLLLLLLLCLCCCCCCCCCCCGCCCCCCCGCLLfffffft;tffffLCCCCLttttfftfLLLLfLLLLLCCt1fffttfffLLC
0@@@@@@@@@@CLLLLLLLLLLLLLCCCCCCCCCCCGGLGCCCLfttt1t11111itfffttfLLLt1fftttttfffffffffLLCLtLfLLfttttfC
0@@@@@@@@@@8fLLLLLLLLLLLLLLLCCCCCCCCCGLfLLLLLf1111111i;:1ttttttt111tfftttttttfffffffffLLLfftLLftfftL
0@@@@@@@@@@@CLLLLCCLCCCCCCCCCCCCCCCCCCC1ttffffftiii1iii;itttttt11ttfftttttttttttfffLLfffLLfttffffLfL
888888888888G;iii111tttfffLLLLCCCCCCCCGt1111111111i11tt11tttt111tttttt1111111111111ttffffffLffffffLL
8888888000000i.,,,,,,,:::::::;;;ii111tt1tfLLffttffLffftLLfffffffffffffftttttttt111111ttffttfffffffLL
8888888800000L;:,,,,,,,,,,,,,,,,,,,::,:,ittffffft1iii11tfLLLLLLLLLLLLLLLLLLLLLLLLLLLCCLLLLLLLLLLLCGG
88888000000000Cffttt111ii;;;;:::::,,,,:::;i1;;;;ii11tfLL1;fffffffftttttttttffffftffffffffffGGGGGGGGG
0880000000000CLLCLLCCCLLLLLLLLfffftttt11ttffffLLCCCCCCLLLtttttttttttttttttttttttttttttttttfCCCCCCCCG
GGG000000000GCCLCLLLLLLLLLCLLCLLLLCCCCCCCCCGGGGGGGGCCCCCCCCLLLLLLLLCCCLLLLCLCCCCCCCCCCCCCCCCCCCCCCCC
000000000000GGGCCCCCCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCCCC
`,
  'American Chopper Argument': `
fLLLLLLLLLCCCCCCCCCCGGGGGGCLLCLLCGGGGGGGGGGG808808GG08008888888888800000000000000000GGGGGGGGCCCCCi1t
LLLCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG800000GG08008888880000000000000000000000GGGGGGGGCCCCCftt
LLLLLLCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGCCCLLCG800888888888880000000000000000GGGGGGGGGGCCCCCLt
fLLLLLLCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGCf11t1ttftfL1i1fLLLCCCGG0000880000000000GGGGGGGGGGCCCCCCt
LLLLLLLCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGL1i1t11tfffLLCLfft:;111,,,,:tfii11tLCG000000GGGGGGGGGGGGCCCCCt
fLLLLLLCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGLi;;ffttfffLLLLLLLL1.:it, ..;i,.,,::;,:iC0G0GGGGGGGGGGGGGCCCCCt
fLLLLLLLLCCCCCCCCCCCCCCCCCCCCCGGGGGGf;:,;ff111tttt111;i11;, ::,::i:,,,:;;;:,,,G0GGGGGGGGGGGGGGCCCCCt
tfLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCGGt::,,,it11t1i;;;ittitfi,,..;;ii:,:,,::;;,. ;0GGGGGGGGGGGGGGCCCCCt
1tffLCCCCCCCCCLLLLLLLLLLLLCCGGGGGCi..,...:ii1111tffi1tfftii,. .:;.,,.:;,:;;... t0GGGGGGGGGGGGGCCCCCt
i111tffLLCCGGGGCCCCCCCGGGGGLfLCCCfi:,:,,,,:1t1111t1tt1tfLi;;:.,:,;i:,:;;:::,.. .C0GGGGGGGGGGGGCCCCCt
::;;ii11tttttfffffffCG0GGCCLttfLLt:,,,,.,. ,:;iii1t1;;;;t1 .:::,.:;;:,:i;::;,.. :GGGGGGGGGGGGCCCCCLt
;,.iLft11i1ttttttfLLCCCLLLLLLLfL1........ . .;::i1tiii11fi...,,:,,...,,;;;:,.... t0GGGGGGGGGGCCCCCLt
;,.;0GCLft;;;iii11tfffttttttt111. ...     .. ,;;1ii;:::::....,,,,:,,,,..;,. .... .CGGGGGGGGGGCCCCCLt
;:. 1C11L8i1LCGCftt1i;::,,,:::::.....  ...... ,::,....   ........,::,.....,,.... :CGGGGGGGGCCCCCCCLt
1ii;iGGG08f1C0@@@@@@80GCLtt1;::, .............          ........,i11i..,........ f0CGGGGGCCCCCCCCCLt
tfftfCCCLC0880000888@@@@@88GL1ti ...........  ..      .........,i1111, , ..  ... ;GCGGCCCCCCCCCCCCL1
:;it1it1tf1;;:::ifLGCGCLLLft1i1i. .. ..   ...,.. ........... .,i11iii, ..   .... ,CCCCCCCCCCCCCCCCL1
..,;;i11fL1i1tt1tttti;;::,,......  .......,:::,;,......... .,;1iii;:;: .......... tGCCCCCCCCCCCCf1L1
tffLLCCGGCLfti;,,.                  .....,,,,,:,,,....... ,i1t11ii;;i: .....    . :CCCCCCCCCCCCCf;f1
LLLCCCf1;,                       ...........,::.....   . :i11ii1111ii, ......... . iCCCCCCCCCCLCf;f1
fLLt;.                        ,::;:. ..                 :f111i1111ii;............. ,CCCCCCCCCCLLLtf1
fLt                 1i,.    .:;ii:    ..                1ftt1ii1iii;.  .,,,....... ,LCCCCCCLLLLLLLf1
fff1,               :fLf1;:,;::i,     ..               ,ttt1iiiii;:.  :;;i,  ..... :CLLLLLLLLLLLLLf1
tttff1:               :1LCLLfft1::,,::. .              :t1tt1iii;,.  ,;1ti.  ....,.1CLLLLLLLLLLfLff,
tttttfft;.              ,iffLLLLCCLLC;..           ..,:ifLLLf1i;,.. .:;1i1.   .....fLLLLLLLLLLffLff,
tfffLLLCGCt,             ,;1tfffLLLLLti;:,....,::;tfLLCLLfft1i;.    ,,::,f,     . :LLLLLLLLffft11t1,
fLLLCCCCCG0Gf:    .:;;iiiii;;itfLLLLffCLfffttfffffffffftt11i;:.     ..,:.tt.   .. ;ft111ii;;;:::::::
LLLLCCCGGGG000Ci:11111ii;;;;;:;i1tLLtfft11i;;;::;;;;i;;;:::;;::,    ..,, ;i;   ...::::::::::::::::::
1111tttfffffffLffftffffffffffffffffLLLLffffffffffffffffffffLfLLLttfffffffffffttfttffftttttt11111iiii
1111;;;;ii;;;;;1LLLLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCGCCCCCCCCCCCCCCCCCCCCCCCLLLLLLffffftttt1111
1i;ii;::::::::;1fLLLCCLLLLLLLLLLLLLLLLLLLLLLLLLLLCCCCCLLLffffLfCCCCCCCCCCCCCCCLLLLLLLLfffffttttt1111
:,,:,,,.......,,,;;;:;LLLLLLLLLLLLLLLLLLLLLLLLLCLCCCLf1:::::;;:;tLCCCCCCCCCCCLLLLLLLLLLfffffttttt111
 ..  ......  . ...    tLLLLLLLLLLLLLLLLLLLLLLLLLCCftt11::::::,,,,:1LCCCCCCCL11LLLLLLLLLfffffftttt111
   .             .....tLLLLLLLLLLLLLLLLLLLCCCCCCL1111i;;:::,,,,,,,,:fCCCCCCCLLLLLLLLLLLLfffffttttt11
    ......       ,;;:.1LLLLLLLLLLLLLLLLLLLLLffft:::,,:,,,,,..,,,,,,.iCCCCCCCCCLLLLLLLLLLfffffftttt11
    .......     .;,,, 1LLLLLLLLLLLLLLLLL;,::::::::::,,,,............:LCCCCCLLLLLLLLLLLLLfffffftttt11
  .........     .;....iLLLLLLLLLLLLLLLLLft1tti;::::::,,,............,LCLCLLLLLLLLLLLLLLLfffffftttt11
    .......      ::,,.;LLLLLLLLLLLLLLLLLCCCCCCf;:,,,,,,,:;i;,...,,..1CLLLLLLLLLLLLLLLLLLfffffftttt11
                 ...:.:LLLLLLLLLLLLLLLLLLLLLLL1;;;;:;;ittff1:,:;;i:,LCCCCLLLLLLLLLLLLLLLffffffttttt1
    ................::;LLLLLLLLLLLLLLLLLLLLLLf;;;;1tfffftt1;,i1;i1;,:itfLLCCCCLLLLLLLLLLffffffttttt1
                 .,,:;ii1fLLLLLLLLLLLLLLLLCCLCt:;;itt111tt1::itfti:....,:;;i1tfLLLLLLLLffffffftttt11
    ...............   ...tLfLLLLLLLLLLCCLLf1;;;1i;:;i;i111i;;iii;ii: ......,,,::;1tfLLLffffffftttt11
                        .tfffLLLLLLLCLti;:,,..;f1iiiiiiii;;::;;;ii1; .........,,,,,:itfLfffffttttt11
                         tffffLLLLLL1:.,,.,,.,t1111i;;;;:::::;;ii11, ...........,,,,,,;1ffffftttt111
                         1fffffLLLt:,.........i11i::::,,,,::;;;;i1: ................,,,,:1ffttttt111
                         1ftfffLt;,,,....      ..     ,:,,,:;;;;;, ......................,:1ttttt111
                         ifffft;,,,,...                ,:::::;:,  .........................,1t111111
                         iftft:,,,,....                  .,,..  ............................,1Lft1ii
            .;i;1ti,.    ;ft1:,:,,,....                .     ......  ........................ ;ftti;
           .tGGCGGCt1:   ;t;,,,,,,.....                ....         .......... .     ...  .... :t1;:
          ,fLCGCCGLfLf11tLCLt;........                   ... ....     .....  ..            .... ,i;.
         ,fLLLLfCGfLLfLLf11fLLt;. ..     ,iti.            .::,.      .....                       ,;,
         iftft11Cftt1ii11i1ttfff1,    ,:1fLLLf;      .. ,:i;::::..   .                           .,,
         ,111iiii;ii;;i1tttfft11i;,:itfLLffLLLCt         .;::.,1;:.                                .
          ,:;::::::;;ii1ttttt1i;;itLLLfffftt1i;;.                 ...                               
                ,,,,,::;iii;t0i;iii;:,,.        1;                                                  
iiii111111111111ttttffffffffGCtt1111ttttttfffffLGGLttttttttttttttttttttttttttttttt1t1i;ii;;;;iiiiiii
LLCCCCCCGGGGGGGGGGGGGG00G000GG0000008@88@@@08@@@8888888888888888800000000000000000G0GLtffffftLLLLLLL
fLLLLLCCCCCCCGGGGGGGGGGCGCCCLftfLLLLG8GG8LLtifCCC000000000000000GGGGGGGGGGGGGGGGGGGGGftfftt1fffLLLLL
fLLLLCCCCCCCCLLt1;::;i::;::,,,.,,,:11i;;ii1ffffffCGG000000000000000GGGGGGGGGGGGGGGGGGLtffff1ffLLLLLL
fLLLLLCCCCCi:::,,,.....,,   ......,1i;:;1fffftftff;:;i1fG00000000GGGGGGGGGGGGGGGGGGGGftffff1ffLLLLLL
fLLLLLCCCLi,,,...... ...,,:,..,.,;,ii11t1111ttfLLLf;:,,,:t0000G0GGGGGGGGGGGGGGGGGGGGGftfffttLfLLLLLL
fLLLLLLCfi:;::,.....  ...:tt;:1it1,iftt11tfLLLCCGCCLi,,,, f0G0GGGGGGGGGGGGGGGGGGGGGGGftfff1tLLLLLLLf
tttttfLt;;::,,,,..... .. ;11it11t:1fffttttttffLCCCCCL;;,. :0GGGGGGGGGGGGGGGGGGGGGGGGGfffffttLf1ii;;:
LCCCCG1,:::,,.,,,..... . ;11:t1t1;ttfff11tttffffttt111;:.. L0GGGGGGGGGGGGGGGGGGGGGGGGffffftt1:::::,.
tt11ti.,.,,..............;t1i1i1i:1tttt1ttttii;::;tt;ti:.. i0GGGGGGGGGGGGGGGGGGGGGGGCfffffftti;;:::.
;;,,:................... ;1;1;:11:;1iii1111ii11tfttfLt1:,...CGGGGGGGGGGGGGGGGGGGGCGGCftfffftLLLLLLL1
.,,,,.,.  ........... ...ii;;:1i:;:1;ii11111ttfLtiii1Lfi;,..t0GGGGGGGGGGGGGGGGGGCCGCCftffff1fLLLLLLL
08880GCfLf..........  ...:;;;;::;;;i;it1111111iiitftttLi,.. :GGGGGGGGGGGGGGGGGGGCCCCCftfffttLfLLLLLf
@@@@@@@@@@,..  ..... ...  ,;;:,,,,..,:i;;;;;i;;i1i,,.,t;.... fGGGGGGGGGGGGGGCCCCCCCCCftfff1tLfLLLLLt
@@@@@@@@80:...  .....  ..,,:,,,,.. . ,i;;:::;i111:;i1it1,,,,.;GGGGGGGGGGCCCCCCCCCCCCCftfff1fLfLLLLLf
000GGCCLff:..... .  ..,:::,,.....   . :i;:,:i1111;i;itL1.,,,,,CGCGGGCCCCCCCCCCCCCCCGCftfft1fffLLLLLL
fttt1111ii:...,,...,:::,,,,.....  . .. ,:;:i1ii1;;ii;ii,....,.tGCCCCCCCCCCCCCCCCCCCtLftftt1fffLLLLLf
:,...      ...,,,,,::,,,,.......  .     .,,,:,,....... .......iGCCCCCCCCCCCCCCCCCCLiffttttttffLLLLLf
           ...,. .i1;:,.........  .              .............;CCCCCCCCCCCCCCCCCCCCiffttttiiffffLfff
           ..,,..1ftt1;.........                ..............;1CCCCCCCCCCCCCCCCCCCtfttttt;,ffffffff
           .,,,.;111111:........               ..............,i.1GCCCCCCCCCCCCCCCLCCLt1tt1i;ttffffff
            ,,.;1ii;iiii,.... .                ............ .ii.,CCCCCCCCCCCCCCLLLLCLtttt11tttffffff
        .,..,.,t1ii;;;;;;,              ..,,,::,,,..........i11: fCCCCCCCCCCLLLLLLLCL1::,,,:;itfffff
       ;1i:,. 1t1;;;;;;;;:            .,::::::::::,...... .;ii1i ;CLLLLCLLLLLLLLLLLLCi      , .,:i1t
      :i;::, ;1iii;;;;::;:,          ...,,,,:,.,,..... . .:;:iii,.tLLLLLLCCCCCCCLLLLLi...,...:.    .
     .;::::.,1iiii;;iii;ii;.        ...,.,::;:,... . .. .:;iiiii:.;CLLLLLffttt1ii;;i;;:::::::,:,,.. 
     ,;:::;.i11iiiiiiiiii;;.        ...........    . . .::;;iiii,.,1ii;;;;::::::;;;::;;;;::::::::::,
     ,:,,:,.1iiiiiiiiiii;;.                            .,::;;ii1i.,::::;:;;;;;;;;;::::::::::::::::::
::::;iiiii;:1iiiiiiiiii;;;:;;;;:...,,::::,,,:::::::::,:::;;;;;i11;;;;;;;iiiiiiiiii;iiiiiiiiii;;;;;;:
i1ttttffffttt111iii;;;;;;;ii11i;,.:i1tt1i;;i1ttttttt11111iiiiiiiiiii;;;i1iiiiiiiiiiiiiiiiiiiiii;;;;:
:::::;;;iiiiiiiiiii;;;::::::::,,,.,:;i1ii;;i1t1111111iiiiiii;;;iiii;;:;;;::::::::;;;;;;;;;;;;;;;;:::
;;;:;;;iiiiiiiiiiiiiiiii,:;::::,,,:;;;;;;:;i11111111111iiiiiiiiiiii;::;;;iiiiiiiiiiiiiiiiiiiiiiiii;;
tt1ii1111tttttttttttt111:;1i;;,,.,,:;;i;;::;;ii1111111111iiiiiiiiii;::;iiiiiii11111111111111111111ii
ff1i11111ttttttttttttttt;it1i:. .,:;;;::,,:,,:::;;i11ttt111111111ii::;i111tttfffttfttf1tttttttt11111
ffi1;.,,,::::::,::::,,,:;1ii;:. .,:;;;i;;:::::,,,::;;;;;;;;;;;;;;:,,:;;ii111tiii;;;:iCtfffffttttttt1
CL11i.,,,::::::iii1tt,..:i;;;,. .,:::;:ii;,1i,::::;;;,,,,,,,,,,,,,,,.,.,:;iii;::;;;:1CfLLLfffffffftt
CCf1i,,,,::::,it1tt1fi..ii;;:. ..:ii;:.i;,,ftii;::;;;;i;:::::::1..,:.....:;;;;;;;;;:tCLLLLLLLLffffff
CCL11,,,,::::,;i11111t,,ii;:,..;t:,;;ii::ttLtftt1;::ii:..:::;;if:::;;:;;:;iii;ii;ii;fCCCCLLLLLLLLfff
CGLtt,.,,,,,,,,;ii1t1t;,ii;:,..:t;,::ii,.tiftffCf;,,::     .,,,;:;;;i:;;:::;;;:;ittifLCCCCCLLLLLLLff
LCLffi;;;:::,.  ,:;:::::i;::..,:;:tLtiii;i:ffCLt;,,;;,           ..,,::,:::,,,::iff1fLCCCCCCLLLLLLLf
fffttt111tt1ii;;:,,.,.,::;:,..:;;;ii:;;;;;iLi:::,,,:;:,.             ..,,,,,..,,,itifLCCCCCCLLLLLLLL
LLf1111i111ii111111iiiiiii;,,:i1t111iiiii;:t1;::;i;;;;i;;:,.      .,,,,,..     . ,1ifLCCCCCCLLLLLLLL
GGfffft1i;;:.,,,::;iiiiii;::;1fLLCCCGGGGGGGCt;:1ft1tt11i;;;ti       :,,::,,...  ;fftfLCCCCCLLLLLLLLL
itti1f11i11,    .......;tt1111iiii111ttfft1;,:tC;.,,,,,....tL.     .;:,...,,,,..;fCCLLCLLLLCCLLLLLLf
.:..;t1i11,           ;fLCLLLLffft11ii;;::::ifLC: ..... .,,tf,     .::..,,,,, ....:1LLLLLLLffLLLLLLf
:;,:tftt;.          .;:tLCLLLLLLLLLLLLLfffLLLLLLi..........i1.     .;,,.....     ...1CLLLLLffLLLLLLf
,,,:1tttti,         .CCG0CCCCCLLLLLLLLLLLLLLLLLL; ... ..  .;1,    .....           ..:LLLLLLLLLLLLfff
;,,..:i1tff1:        f@@8ttffffLLLLLLLLLLLLLLLff;,,,,..    ;1i     ..    .....    . :LLLLLLLLLLLffff
;:,,. .;:;ifLt;.   .,1G8;  .,..,fLLLLLLLLLLLffffi;;;iii;:,,;i1,     ..  ........   :tLLLLLLLLfffffff
 .. ...:::::ifCCt:,,;ffi .,...,:11tffLLLLLLffffti;ii1tt111ii11i;;iii1iii1:....... .LLLLLLfffffffffff
.,,..  ,::::,i11ti,,,,:;.;i:;i::111111tftttffft1;;ii1tt11iiiiii11tttffffff1,... ..1Lffffffffffffffft
       :::,:,,;;i: .,.,;i:;::i.:1i11i;1;::,itttt;::::;;;:::::::;;;;;;;;;;;1;.   . ;ffffffffffffffftt
,,,...:;::,:,:;;;::,.,,:ii;;i1i1fffffffffftt1i::,,...,,....,,,,,,,,,,,,:,.    ... iLfffffffffffftttt
ffffffftttttttttttttttffffffffLLfLLLLLLLLLLLLLfi.          ......   .            .iii111tttttttffttt
fLLLfffffffffffffffffffLLfffffffffffLLLLLLLffffLi          ,,,,;:..          ....,,............,,,,:
fLLLLLLLffffffffffffffLLLLLLLLLLLLLLLLLLLLLLLLfLf:,,,,,,..,::::;:.     ....,,,,,,.:::::::,,,,,,,... 
fLLLLLCCCLLLLftttttttffffffffffffffffffffffffffftiiiiiiiiiiiiii;:,...,::::;ii;;;;iiiiiiiiiiii;:::;;;
tffffLGGGGC0C1iiiiiiii111111tttt11111111111111111111111111111111111tttffLLLCCCGGGGGGGGGCCCCCGt,,;tGC
tffffLGGGGC0C11111ttttfffffLLLLLf11ttt11i11111111111111111111111ttfffLLLCCCCGGGGGGGCGCCCCCCCCfiiitGC
fffffLGGG0C0GttttfffLLLCCCGGGGG0C1t1i;;;;i11111111111111111tttfffLLLLCCCCGGGGGGGGGGGGGGCCCCCCCLGftGC
fffffLGGG0C0GtfffLLLCCCGGGG0008Cti::;i11ttt111111111111ttttfffLLLLCCCCGGGGGGGGGGGGGGGGGGGCCCCCCftfGC
fffffLGGG0G0GtttfLLCCCGGGG0000fi;;i1111tffttt111111ttttfffLLLLLCCCCCGGGGGGGGGGGGGGGGGGGGGGGCCCCftfGC
fffLfLG0G0G00tttfCCCCGGG00000ti11i1i1i111ttt11i;1ttffffLLLLLCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGCCCftfGC
fffLLL0000G00t1ffCCCGGGG0008C;1111ii111iii;:;1i:ifffLLLLLCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGCCttf0C
ffLLLL0000G00t1ffCCCGGGGG0000i;iiiiii11111iit1111tLLLLCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGCCLff0C
fLLLLL0000G00f1ffCCCGGGGG0000L;;;;;;iii111tffi;;itLCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGCCLfL0C
fLLLLL0000GG0f1ffCCGGGGGGG00001;i;;;i1111111111tt1tCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGCLfL0C
fLLLLL0000GG0ffffCCGGGGGGGGGG0i.:i1i;iiii111111; .;LCCCCCCCCCCCCCCCGGGCCCCGGGGGGGGGGGGGGGGGGGGCLfL0C
fLLLLL0000GG0ffffCCCGGGGGGG0001:,,:,:;;;;ii11ti::;iLCCCCCCCCCCCCCCLLLt11tCGGGGGGGGGGGGGGGGGGGGGLfL0C
fLLLLLG000GG0ffffCCCCGGGGGGCt;:,.,;;:,:::;i111ii;:ifCCCCCCCLffftfff1itfLCGGGGGGGGGGGGGGGGGGGGGGLfL0C
LLLLLL0000GG0ffffCCCCCCGGf;:,.....,;i;;:,;ii111ii;1LCCCCCLffftttttti1fGGGGGGGGGGGGGGGGGGGGGGGGGLfL0C
LLLLLL0000GG0ftffCCCCCGLi,......... ,:;;;;;i;::itfLCCCCCL11ttfti;;:;;tGCCGGGGGGGGGGGGGGGGGGGGGGLfL0C
LLLLLLG000GG0f1ffCCCCC1,............   .,,,,,,.fCCCCCLLfiii::i;,:;::1CCCGGGGGGGGGGGGGGGGGGGGGGGLfL0C
LLLLLLG000GG0f1ffCLCf: ...,,:::::,.....      ..iCLLftfft1i;;,,,:;i1fCGCGGGGGGGGGGGGGGGGGGGGGGGGLfL0C
LLLLLLG000GG0ttffCCt,...,:;i111111i:.....    .,;ftttfftt1;;i1111tfCGCCCGGGGGGGGGGGGGGGGGGGGGGGGffL0C
LLLLLLG000GG0titfGL,...,;iii111t1111,......,:i1ttttffLf1;1fCCCCCGGCCCCCCGGGGGGGGGGGGGGGGGGGGGCGftf0C
fLLLLLG000GG0ttftf:....:;;iii1111iii,...:;1tffffttfft1;1LCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGLtf0C
fLLLLLG000GG0tfLL1,....:;;;ii1111111i;itffffffffftt1;;fCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGCGLtfGC
fLLLLLG000GG0tfLL;.....;;iiii1tttttttfffffffffttt1;;1LCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGCGLtfGC
LLLLLLG000GG01fLf,....,;;iiii1ttttttttfffftttttii;1LCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGCCCCGftfGC
fLLLLLG000GG01tL1.....:;;iii11ttttttffffttt11ii;:,tCLCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGCCCCCCGftfGC
fLLLLLG000GG01ff:,....:;;;;ii1ttftffttt11iiii;:,,.iCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGCCCCCCCftfGC
fLLLLLG000CG01f1:.... ,::;iiii1ttt111ii;;;;;:,....tCLCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGCCCCCCCCLttCG
fLLLLLG000CGG1t:,......,,,;;;;ii111i;;;;::,......:LLLCCCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGCCCCCCCCCCLttCC
fffLLLGGG0CGG1i:.......,,..,:;;;;;;;:,,... ......1LLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLttCG
`,
  "They're The Same Picture": `
i::;;;;;;;;;;;;;::;;;;;;;;;;;;1f1tLfii;itfft1i;;;;;..:;;;::,:i1tttffft1fLLLLft1;;;iii11ttLCG00G08L1t
i:;;;;;;;;;;;;;tttt111iiiii;;itt11ff;;ittt1;::;;;;:..;;;;::,:1i11ttfffttLLLLtiii11iiitft1tLCCGGC0L11
i:;;;;;;;;;;;:L@@@@@@@@@88800000GG0GCCCGCft111iiii;.,:;;;::,i1111tttffftLfLf1i1tft1iitLf1tLfttttC1;:
i:;;;;;;;;;;:f@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8880t:;;;:,;111111111tttLfft11tfft1i;tfftLft1itLG1,:
i:;;;;;;;;;:f@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0:i;;;::;i;L8000GCCCCCCLLtffft1iiifffff1i;1LLCf:;
1;;;;;;;;;:t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;:ti;;:i1if@@@@@@@@@@@@@@@@88800G0GGCLLftfLLLL1:;
1;;;;;;;;:t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@C ;t1;;;1tC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@800G
1;;;;;;;:1@@@@@@@@@@@          @@@@@@@@@@@@@@@@@@8;.itt;:;1C@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
1;;;;;;:18@@@@@@@@@@@          @@@@@@@@@@@@@@@@@@t,.it1;:;C@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
1;;;;;;i8@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@f::.it1;:C@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
1;;;;:i8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@C:;,.i11:L@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
1;;;;i8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0;;;,.i11C@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@
t11110@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@1;;;,.i1G@@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@
;,,,0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@L:;;;,.iG@@@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@
i,;G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@G;;;;;,,G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
1t0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@G;;;;;;,C@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
tfGCG008@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0;;;;;;;G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
i,::,,,:::;i1fLCG08@@@@@@@@@@@@@@@@@@@@@@8i;;;;;;G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
t;;;:,...         .,:;i1tLCG08@@@@@@@@@@@f:;;;;;0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
;,:::,,,.. . .....       .,::iii1ffLCGG0C:;;;;i0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
;,,,,,...      .........,,,::::;;;;:;;;::;;;;;ittffCG0088@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
:...           ........ ,,,,:::;;;;;;;:,,,,,,,,,,,,,:;ii11tt1CCGG088@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@f
: .....  ..    ....,,,,,,,,,::::;i11tfftttt1i;:,,,,,:,:;;;;:;1iiiiiiiii;i1tfCGG08@@@@@@@@@@@@@@@@@i 
: .,,,.       .............,,,,;fLLLLLLCCCCCLLf,  ...,tft;,,111iiiii;;;:.       .,,:ii1fLC008@@@8i,;
:  ..        ;;:;;;;;;;;;:iiii::t1111t1tttii111;::.i;1;;1;;;it:i11i1i:1tii1i;;;;;:::,,:,;,,,:;i1;,i1
: ,,,,.,. .. ,:,:::  corporate needs you to find the differences   ;;:;::,,,::,,:::;;:;:i:::::,,,::i
;.::::,:.....     :;,:  between this picture and this picture  1i;i;;,;:::,:;,,::;........:,,,,,,,,:
;.,,,,,,,,,,....,.:;;i;;;i;i;i;;i;i1i1itiit111i;:;i1t;.;i;;i1;;iiii11:1;;;;:;;;:;i:,......,,,,,,,,::
1;,,1ftffffLLffffLLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCCCCCCLCCCCCGCCLLLLCCCCLCCLCL:iitCCCCCCCCCCLGGGGGC
1:,::1tfLLL1fCCLLLLLCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGL1;::::;1fLCGGGGGC;;;f000000000GGGGGGGG
1:,;;,i11LLLitCCCCCCLLCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGCt;:::::,,,,,,:1LGGGL:11LCCCCCCCCCCCGGGGGG
i,,,,,:t1iffL;fCCCCCCCLLCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGL;,:;;:,::;;:,.,,:tCGL:;;L0G0GGGGGGGGGGGGGG
,::::,,:t:tift;CCCCCCCCLCCCCCCCCCCCGCGGGGGGGGGGGGGGGGGGGC;::::;1fLLLLf1:,,::tGf;11LCCCCCCCCCCCGGGGGG
,1;,i,,,;;ii1LifCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGt:::itLLCCCCCLLf;..,iGf:i;LGGGGGGGGGGGGGGGGG
;t1,;;,,:;t1i11tLCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGC:::1fLLLLLCCCLLLt:..:Cf:11LCCGGGGGGGCCGGGGGG
it1;,i:,,:ftft;ifLCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGC;.;tttttfLft1tffft,.;Cf:iiLCCCCCCCCCCCCCCCCC
1t1i,;;,,:itLLL1tfLCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGCCCCCGt,11i;iitLt1i;i1ff;:tCt,1iCGGGGGGGGGCCGGGGGG
tt11;,i:::;tffLf;1tCCCCCCCCCCCCCCCCCCCCGCGGGGGCCCCCCCCCCfi1tfffffLLLLLLLLf11:t1:1iLCCCCCCCCCCCCCCCCC
ttt11:;:,:;ttfLL1ttfCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC1i1tLLLttLffLLLLftti,;i:iiCGGGGGGGGGCCGGGGGC
ttt11;ii::;iftfLt1CtLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCf1;i1tffttttffffftt::,:;i11LLLLLLLLLLLLLLLLLL
ttt11i;t;;;ttftLf1LftCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL1;,:1ttt11ttttfftf; ,..:iiiCGGGGGGGGGCCGGCCCC
tft111;fi:;ttfffftLLfLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLt:,if11ttttffffft1;....,,;11fLLLLLLLLLLLLLLLLL
tft11i:ii:itffLftLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLLfiiLG0f;11ttfftt11ii:..,,,:i1CGGGCCGCCCCCCCCCCC
ff11ii;t::iffLLLfLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCLfttttttGC08G111iiii111t1Cf:,,,::;ittfffLLLLLLLLLLLLL
tt1i1t;1i;tffffLLfLLCCCCCCCCCCCCCCCCCCCCCCCCLfttttttttCGG8@01tttt11ttt1i001::::;iii1ttfCCCCCLCCCCCCC
tt1;ti;t:;1ttt11tLLLCCCCCCCCCCCCCCCCCCCCCCCCtttttttfffGCf1CG1ttttttttt1tCft;::::;;i1fttfffLfLLLLLLLL
f1ii1:ifi,,iffffi1LLLCCCCCCCCCCCCCCCCCCCCCLtt1tttttffLC1iitLffttttttttffLLL1;;::;;;1tttfLCCCLLCCCCCC
tii:1:1ti;;;LfttC1ifLLCCCCCCCCCCCCCCCCCCCLtttt1t11ttfLtttttffLfLLLLLfLLCCCCt1;:::;;1tttttffLffLLLLLL
ti,;1,tf111;ffLf1ititLCCCCCCCCCCCCCCCCCCLttttt11t11tttfftttLLLLLLLLLLLCCCGLt1i;:::ittttttfLLLLLLLLLL
t:;t1:tft1i:fffLt,fi1CLCCCCCCCCCCCCCCCCLttttttt1t11ttfftttfCCLCLLLLLG8000Gfii;;::;1ttttttttffLLLLLLL
;,1t1;fft1i:ffffL:1itLLLCCCCCCCCCCCCCCLtttttttt1111ttttttttCGGG0GLfG8800GC1ii;;;i11tt1tttttfLLLLLLLL
:ittt;ffft;;LfffLi;ifLLLLLLLLLLLLLLLLLttttttt111iitttttttttLGG0880G88800GL111ttttti1111111ttffffffff
;itttiffft:iLfffLi;;fLLLLLLLLLCCLCCCLttttttt1111i1tttftffftL00G8@@@@@8000fttttttt1;;ii1111tttfffffff
:ittttffft:1ffffLiiiLfLLLLLLLLtffff1iii11iiiiiii;;iiii1111i1LffCGGGGGLLLtiiittttt1i;ii1111111tffffff
:itttfffff:tffffL1:1LfLLLLLLLf:i1i1i1i1;ii1i,11ii1::ti1111i11;t1ttttt1t111;:1tttttt:;ii11i111ttfffff
:1ttffffff;1ffffL1;tLfLLLLLLLfi11iiiii1;;;;;:;::;i;;  They're the same picture ttt1.:;i1i111t1ttffff
`,
  'Bike Fall': `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@08000000008888000880000088888888888888888800880888800000800888888888888888888888888888808@@@@@@
@@@@8G0000000000000000000000000000LfLCG00000000000000000000000000000000000000000000000000000G8@@@@@@
@@@@8G000000000000000000000000000L1tfftG0000000000000000000000000000000000000000000000000000G8@@@@@@
@@@@@G000000000000000000000000000CtLLLfL0000000000000000000000000000000000000000000000000000G8@@@@@@
@@@@@G00000000000000000000000000GGCCGCLL0000000000000000000000000000000000000000000000000000G8@@@@@@
@@@@@00000000000000000000000000G00GGGLCG0000000GG0000000000000000000000000000000000000000000G8@@@@@@
@@@@@0000000000000000000000000G88@8LGG8@GC0000LfG0000000000000000000000000000000000000000000G@@@@@@@
@@@@@0LCCCCCCCCCCCCCCCCCCCCCCL8@0LGLG8LCGLLCLtfCCCCCCCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGG@@@@@@@
@@@@@0LCCCCCCCCCCCCCCCCCCCCCLG@@@0CGCfLLCGCttLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL@@@@@@@
@@@@@0LCCCCCCCCCCCCCCCCCCCCCL@@@@@8GGGLLLftLGCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@0LCCCCCCCCCCCCCCCCCCCCCffG8@@8C1tCGL1ft1ttfLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@0LCCCCCCCCCCCCCCCCCCCCCL11tffi::itLLLf:;tLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@8LCCCCCCCCCCCCCCCCCCCCCCCLfttfft1iittf;iGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@8CCCCCCCCCCCCCCCCCCCCCCCLLLCi;tff11fL1i;tLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@@CLCCCCCCCCCCCCCCCCCCCCf1fti::1ft1tiift:;;1CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@@GCCCLLLLCCCCCCCCCCCCCCifLf;ittf1iiiCC:iLtiiCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@8GGGGGGGGGGGCCCCCCCCCCCifti1iiffiiftLL:ift1t1GCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGGGGG0t1i,i1ift,;tttC1t;;,fifCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGGGGGGCiL1fLiit1iittGf1t:,ff1GCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGGGGGG0tiCLG1CG0t:i;tGifL1fC1GGGGGGGGGGGGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGGGGGGG0t1LtiGGGGCCCG0CitCCCiCGGGGGGGGGGGGGGGGGGGGGGCCCCCCCCLLCCCCCCCCL0@@@@@@
@@@@@8GGGGGGGGGGGGGGGGGGGGGGGG0LffCGGGG00GGG0G11Lf1GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCCCCLG@@@@@@
@@@@@@GGGGGGGGGGGGGGGGGGGGGGGGGG00GGGGGGGGGGGGGLffCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCG@@@@@@
@@@@@@GGGGGGGGGGGGGGGGGGGGG0000GGGGGG00000000000000GGGGGGGGG0000000G0G000000000000000000000008@@@@@@
@@@@@@GCCCCCCLLLLLLCCCCCCGGGGGGGGGGGGGGGGGGGGGGCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0G@@@@@@
@@@@@@CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCf@@@@@@
@@@@@@CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLLCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@
@@@@@@CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLLG0080LCLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@
@@@@@@GLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLCtttf8@0CLLCCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCG@@@@@@
@@@@@@0CGCCCCLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0Gitft18LCGCLCLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCG@@@@@@
@@@@@@0G0GGGGGGGGCCCCCLLLCCCCCCCCCCCCCCCCCCCCCLG801tft1ttft111fftCCCCCCCCCCCCCCCCCCCCCCCCCCCLG@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGCCCCCCCCCCCCCCCCCCCCLC0@8G0GffLLi;LCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC0@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCCCCCCCCCtCCGL0t:11t1;LCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC8@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLf11GCi:,it1;:1CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0fifti;fCGL1f1ii::;iCCCLLCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0itLC;;Gi1CL;iti;L;i;G0GGGCCCCCCCCLCCCCCCCCCCCCCCC8@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG01tti:iLt,1ft1ii;1;tiiLfC0GGGGGGGGCCCCCCCLCCCCCCCL8@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0t1f,11i1,1f11f1ii:;C;LCCGGGGGGGGGGGGGGGGGGCCCCCCL8@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG;ffCtt0f1f1C8f1t:iCtt0GGGGGGGGGGGGGGGGGGGGGGGGGC0@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0f;CG1t00fttfCGitLLGLi0GGGGGGGGGGGGGGGGGGGGGGGGGC0@@@@@@
@@@@@@GCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0t1f1CGGGtiifGCifCCCiGGGGGGGGGGGGGGGGGGGGGGGGGGC0@@@@@@
@@@@@@0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0CCGGGGGGCG0G0CtfL1L0GGGGGGGGGGGGGGGGGGGGGGGGGC0@@@@@@
@@@@@@GCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0GGGGGGGGGGGG0GCGGGGGGGGGGGGGGGGGGGGGGGGGGGGCG@@@@@@
@@@@@@GCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCG@@@@@@
@@@@@@0CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG00000000000000000000000000000000000000000000000000000000@@@@@@
@@@@@@CGGGGCLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCGC0@@@@@@
@@@@@@LGGGGGGGGCCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@@LGGGGGGGGGGGCCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@8CGGGGGGGGGGGGGGCCLCCCCCCCCCCCCCCCCCCCCCLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGGCCLLCCCCCCCCCCCCCCCGt:fCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL8@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGG00GCCCCCLfLLCCC1ttt111iCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@0CGGGGGGGGGGGGGG0GGCCCCCLfti,:1fffftt1.:;;fCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@0CGGGGGGGGGGGGGGLfff1iitfCt1;;itLffftLi:;fGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@0CGGGGGGGGGGGG011CGGLfLGGCCLCf:tCLCCff1iifCCCCCCCCCCCCLLLLLCCL088GLCCCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@0CGGGGGGGGGGGGGCfffffLCCCCG00GfGGGCLLCf;iLfffLLCCCCLft1iGLGCG00@@GLtLCCCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@0CGGGGGGGGGGGGGG0GGGGGGGGGGGGG0GGGGGCCLitCLft11fLfttttf11GCiLtfLLfGf1tfCCCCCCCCCCCCCCCCL0@@@@@@
@@@@@0CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCftttttt11tttftitifLiGLt1CCtLtttLCCCCCCCCCCCCCCCL8@@@@@@
@@@@@8CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0GCCLLfffffLft1tt11ttGCLCGLtffLCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@@CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCLCCtttffffLCCCLCCLCCCCCCCCCCCCCCCCCCCCCCL@@@@@@@
@@@@@@CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL@@@@@@@
@@@@@@CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCL@@@@@@@
@@@@@@GC0GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC@@@@@@@
@@@@@@GCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCG@@@@@@@
@@@@@@80000800888000000000GGG00000000000000G0GGGGGGGGGGGG0000000CGGGGGGGGGCCGGCCCCCCCCCCCCGCG@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`,
  'Surprised Pikachu': `t1tttttttt1i1tfttti;tLCCCCCCCCCLLtiii1tttttttttt1tt1t1tttttttttttttttttt1i1ttttttttttttt1111tfLLLLLL
iiiiiiiiii::i11111i::tLLLLLLLLLLLLf1i;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii::i1111iiii;;;i11tffLLfffff
iiiiiiiii;:i1111111i;;tLLLLLLLLLLLLLLf1i;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;:i1iiiii1tffLLLLLLLLLLfLL
iiiiiiii;:;iiiiiiii1i;i1fLLLLLLLLLLLLLLLti;;;iiiiiiiiiiiiiiiiiiiiiiiiiii;;::;ii1tffLLLLLLLLLLLLLLLLf
iiiiiiii::;;;;;;;;;;ii;;ifLLLLLLLLLLLLLLLLfti;;;;;;;;;;;;;;;;;;;;;;;;;;;iii1tfLLLLLLLLLLLLLLLLLLLLfi
iiiiiii::;;;;;;;;;;;;;;;;;1fLLLLLLLLLLLLLLLLftt11111ttttffffffffffffffLLLLLLLLLLLLLLLLLLLLLLLLLLLf1;
iiiiii;,:;;;;;;;;;;;;;;;;::;tfLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLft11ii
iiiiii::;;;;;;;;;;;;;;;;;;:::ifLLLLLLLLLLLLLLLLLLLLLLLLLfffLffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLf1i;;;ii
iiiii;,:;;;;;;;;;;;;;;;;;;;;::;1ffftfLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLft1;;;;;;;;
iiii;::;;;;;;;;;;;;;;;;;;;;;;;:::i1tfLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLfffLLf1i;;;;;;;;;;
iiii:::;;;;;:::;;;;;::::::::;;;:,;tLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLft11i;;;;;;;;;;;;;
iii;,::::::::::;;;;;;:::::,,:;;:;tLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLfti:;;;;;;;;;;;;;
iii:::;::::::::;;;;;;::,,,,::;::ifLLLLLfffttfLLLLLLLLLLLLLLLLLLLLLLfftt1tffLLLLLLLLLLti;;;;;;;;;;;;;
ii;,:;;;;;;:::;;;;;;;::,,,::;;:;tLLLLLft1t1;;ifLLLLLLLLLLLfLLLLLLLft1ff;:;1fLLLLLLffLLt;;;;;;;;;;;;;
i;:,;;;;:::::::::;;;;;;;;;;ii::1fLfffff1;1i:,:1fLLLLLLLLfLfLLLLLLfft;11:,,;tfLLLLLfffLL1:;iiiiiiiiii
i:,:;;::::,,,,,,,::;;;;;;;;ii::tLfffffffi:,,,:1fLLLLLLLLLLfLLLLLLLLfi:,,,:iffLLLLLLLLLLf;:iiiiiiiiii
;,,:;:::,,,,,,,,,,,:;;;;;;;;;:ifLfffLLLLftt11tfLLLfffffffLLLLLLLLLLLLft11tfLLfLLLLLLLLLL1:iiiiiiiiii
,,:;;::,,,,,,,,,,,,:;;;;;;;;:;tfLLLLLLLLLLLLLLLLLLfti;;;1fLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLt;;iiiiiiiii
,:;;;:::,,,,,,,,,,,:;;;;ii;;,:;;i1ttfLLLLLLLLLLLLLLLfftttfLLLLLLLLLLLLLLLLLftttttttfLLLLfi;iiiiiiiii
:;;;;;;;;;;;;;;;;;;iiiiiii;::;iiii;i1fLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLf1iiiiiii1tLLLLt;;iiiiiiii
:;;;;;;;;;;iiii;iiiiiiii;;:,:111111i1fLLLLLLLLLLLLLLLffffffLLLLLLLLLLLLLLLtii11111ii1fLLLf1;;iiiiiii
,;;;;;;;;;;;;;;;;;iiiiiii;,,:i11111itfLLLLLLLLLLLfti;;;iii111tfLLLLLLLLLLLtii111111i1fLLfLt;:;;;;;;;
:;;;;;;;;;;;:::;;;;;;;;;;;,:ii;;iii1fLLLLLLLLLLLLfi::1tfffft11tfLLLLLLLLLLftiiiiiii1tLLLfLL1:;;;;;;;
1i;;;;;;;;:::::::::::::::::;fLftttffLLLLLLLLLLLLLf1;1fLffffft11fLLLLLLLLLLLftttttttfLLLLfLLfi;iiiiii
i;;;;;;:::::::::::::::::::::1LLLLLLLLLLLLLLLLLLLLLtiitfffLfft1tfLLLLLLLLLLLLLLLLLLLLLLLLLLLL1;i1iiii
ii;;;;;;;:::;;;;;;;;;;;;;;;::1LLLLLLLLLLLLLLLLLLLLLf1ii11111i1ffLLLLLLLLLLLLLLLLLLLfLLLLLLLLf;;iiii;
;;;;;iiiiiiiiiiiiiiiiiiiiiii;;1fLLLLLLLLLLLLLLLLLLLLLLfttttfffLLLLLLLLLLLLLLLLLLffLLLLLLLLLLf1:;;;;;
:::::;iiiii1111iiiiiiiiiiiii;;;tfLLLLLLLLLLLLLLLLLLLLLLLLLLLLfLLLLLLLLLLLLLLLLLffffLfLfffLfLLt;;;;;;
:::::::::::;;;iiiiiiiiiii;;:;;;itLLLLLLLLLLLLLLLLLLLLLfffffffffLLLLLLLLLLLLLLLLffLfLfLfLffffLfi:;;;;
;;:::::::::::::;;iiiiiiiiiiiii;;tLLLLLLLLLLLLLLLLLLfLLfffffffffLLLLLLLLLLLLLLLLLffLLLLLLfLfLLf1:;;;;
`,
  'This Is Fine': `
@CLLLLLLLLLLLLLLLLLLLLCCCCLLLLLLCCCLLLLLLLLCCCCCLGGLCCCCLLLLLCCLLGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLCLLC@
@1;iii111111iii111111111iii1tttt11tttttttttti1ttttti11iiii1111if08@@8@8@@888@@@888@@@8@8@@88881i111@
@1i111111iiiiiiii11iiiiii111t11iiii111ttt1ii1111itfitttttttttiG@@0G088@80@@@880@@@80@@8@80@@@@8:tii@
@1i11111i1ttffttt1;1tttt1itt1ttttttt111ii1tfffft1tfit1t111111;8@@8       THIS IS FINE     08@@0;t1i@
@ttft11t1;111t11111ffttttt1111ii;;i111ii1tt1iii11tfit11iii;iiit0@@@@888@0@@@8888@@8@8888088@@@tiiii@
@t1ttitttftt111ttfffffLLLLLLLfti11iiiiiLLLfffffffff1ttfftttftt11fG8@@@@@@@@@@@@@@@@@@@@@@@80Cffft11@
@tLLLLLCL1111111iiii :LLLLLLLCti1111tiiLGGGGGCCGCfftfffffftit11111111fLLLLLLL@0GGGGGCLLLft111;it111@
@tfLffLLf;111111111i :LLLLLLLLt;i1i11iifCCCCCCCCCLfL00GG0G1LLLLt1LfLGCGGGCCf1@tLCCCCLffttt1tffC1tCf8
@tfLttfLt;ttti1111it;:ffLLLLLCt;i1111iiLCCCCCtiLCLfLLtGG0Lit;:,,;tL1L0000G0fC8t0G00GG0000GG000ffLtt@
@tfffLtLfittf111ti;::i11t1LCLLf;i;;;iiiLCCCCCi11LfLt1t0Lfft1;;itLLf1tC00GG0tGfGGGGGG0GC0GG0GCtfCLGt8
@t1tLftLf1ffff1tft11ttfftfitLLCLttttfftLLLLLL;LtifffttLtifftfttttttff11C00G1LG0GGGGGGftG0GCffLCCfCf8
@ftfftfLf1fLfffffi,tf;1tfC ,CfffCCCCCf;LCLCCtt1fffLtLitLLLitft1tfffftCCttfGC0GGG000GfLtLCffLLtCLLf1@
@fftftLL11LLLLft,. 1f,ift11tt,  1GCLtttLGGGfffftffftLfffi,,ftL0GffL1G0:,,.f0G00CLLCGLCf1fCLfLfLCCGf8
@ftfffCLLffCGCL: .,ffffff11ft11tLGftfii1ttLLLCCfLLffLLf:...tf@G,..;t0G .,.1Lf1:,...;LfCLLfLLCLCCCLt8
@ffffLCLLCfCGCtt;;ffffffffiLLCGL1tffLtLCC1fffLffffffC1..,. it8G....;tCti;itf:  .,..:CLfLfCCCCCCCLLt@
@ffLfCCCfLfCGL1f11f11ffffL1f0GG1fiffLfGGCfLLCLLLffLff..,.. ;ftCfi:;tftffffff,   .,:LCCLfCCCCCCCLLCt@
@tfLfLCLLLfC0C1t1ittii1ttfi1GG0ttttLLLLffLLCCCCCCLLLf.,,,. 1ffttfttttffffffff1ii1tfCCCCCCGGGCCCLCCt@
@tfLLLfLfCfGGCtfi111i;ii1i111tLt1fLft1ttttfffffftfLtL:....;ffffff1if1iti11ttt1ttfLCCCCCCGCCCCCCCCLt@
@tfLLLLLfCfCt1tt1t11;i;:ii;,1tftfLCCL1tfftCLfiitfffiiit1;1fffffffft1i,,,i1CGfLLCGCCCLCCCt11tttt1LCt@
@tfLLLLLfGfLLLfi111ttf,.1i:.ttfLfLfLLtffCfLLLtLCffft1tLtif1t1tttttftt1ii1LftLLfCCCCLLLCC1Lt111tfiLt@
@tfLfLfffCCfLfLttti1t1, 11;;1tt11ttttfLLCfttLCCfffftifL;tfit;tttttttfftfifftCfLCCCCLLCCC1000000G:Lf8
@tfLffffLfLLLCLLLfi1tti:1tiittttttffCLLfCLfCCLfLffft;fL;ft;f;tttttttttttt;LLffLLLLLLCCLLiLCCCCGfi11@
@tffffffLLffLCCCLtt1111tttttt1ttttCGLfLLffLffLLLffft;fL;tf;t1ifttttttttt1;LffLLLLLfi1ttfftttttttff1@
@LffffLffffffftttttttttttttttttftfCLLLLfffffLffffCCttffttf11f1tffffffftf1fLfLffffL1itffffffLfffffff@
`,
  Doge: `
LLLLLLLLLLLLLLCCCCCCLfffffffffLLLLfLLCCCCCCGGGGGGGGGGGGGGGGG000000000000GGGG00000000GGGGG0GGGGGGGGGG
LLLLLLLLLLLLLLCCLLLLffffLffLLCCCLffttLCCCCGGGGGGGGGGGGGGG00GG00000G000000GG000GGGGGG00GG0GGGGGGGGGGG
LLLLLLLLLLLLLLLLLfLLLLCLLLCCGGCCLLft1tfLCCGGGGGGGGGGGGGGGGGGGG00G0G0000GGGG0GGLfffttfC0G0GGG0GGGGGGG
LLLLLLLLLLLLLLLffLCCCCCCCCGGGGCCLLftt11tfCGGGGGGGGGGGG000GG0GG000000000GG00GCLfttt11i1C0GGGG0GGGGGGG
LLLLLffffLLLLLLLLCCCCCCCGGGGGCCCLLft11ttttLCG000GG0GGG0G000GG000000000G00GCLfttfft1iii1C0GGGG00000GG
LLLLLLLLLCCCCCCCCGGGCCGGGGGGCCCLLfftt11tttttLCCGGGGG0000000000000000000GCLLfttttttt11ii1C0GG0000GGG0
CCCCCCCCGGGGGGGGGGCCGGGGGGGCCLLft1tffffffffffffffffLLLCCCCCCCCGGGGGGGGCffftitttt1111111itG0GG0000GGG
GGGGGGGGGGGCCCCCCCCCCCCCCCCCLfLfffLLLLLLLLffffffffffffffffffffffffffffftt1i1tt1111ii11111C00000GGGGG
GGGGGGGCCCCCCCCCCCCLLLLffffLLLLLCCLLLLLLfffffffffffffffLLLLLLLfffft11ttt1iitt1iiiiiiii111tG0000000GG
CCCCCCLLLLLLfffftffttttffLLLCCCCCCLLLLffffffttffffffffffffLLLfffffft11iiii1tt11i;:::;i1111C0G00000GG
LLfffffttttttttttttffLLLCCCCCCCCCCLLLffffttttfffffffffffffffffffffffft1iii1tttt1;:::;11111C0G0GGGGGG
tt11111ttttttttffLLCCCCCCCLLCCCCCLLLfftttttfffffffffffffffffffffffffffff1ii1111;:,:;;1ttt1LGGGGGGGGG
111ttttttttttfLCCCCCCCCCCLLCCCCCCLLfftttfffffffffffffffffffffffffffffffLft111i:,,::;itttttC0GGG00GGG
tttttttttttfLCCCCCCCCCCLLCCCCCCCCLLftttfffffffffffffffffffffffffffffffffffff1;::,:;11ttt1tG00GG00GGG
tttttttttffLCCCCCCCCCCLLLLLCCCCCCLffttffffLLLLLLLLffffffffffffffffffffffffLLftti;11t111iitCGG0GGGG0G
ttttttffffLCCCCCGGCCCLfLLLLLLCCLLftttttffLCLLCCLLLfffffffffffffffLLLfffffLLLLLfft11ttt11ttLGGGGGGGGG
tttfffffLCCCCG00GGCCt;;,,itfCLLfffttttffLCCCLLLLLLLfffffffffffffLLLLLLfffLfLLLLLLftt1tt111fCGGG0G0GG
fLLLLLLCCGCG00000GGLtii::;:fLfffLLfffffLLLCCLLCLLLLLfftttttfffffffLLLLLLLffLLLLLLLLftt1ii1tfCCGG0GGG
CCCCGGGGGCG00000GGCfL:;:.,1fLLLCLLLLLLfLLLLLf1;;:;i1ffffttttfffLLLLLLfLLLLLLLLLLLLLLftti;i1tLCGGGGGG
GGGGGGGGGG000000GGCtt;:;;tLLLLLLLLCLLfffft1i:ifti...,1ttffffffffLLfffffLLLLffffLLLLLfftti;itfLCGG0GG
GGGGGGGGG000000GCLLLfffLCCLLLCCCCCCLLft11;,.1C1,,.,,.,ittfffffLLLLLLLfLLfLLLfffLLLLfffftt1itffCG0GGG
GGGGGGCG0000000GCLLLCCCCLLCCCCCCCCLLLLftt;,,i1;,,..:itfLLLLLCCCCLLLLLLLLLLLLLLLLLLLLfffft1ttffLG0GG0
GCCGGGG00000000GGGGGGCCCCCCCCCCCCCCLLLfffft1i11ii11fLCLLCCCGGCCCCCCCCCCCCCCCLLLLLLLLLLfffttttfLG0GG0
CCCCCGG00GG00000GCCLLfLLLLLCCCCCCCLLLLLffLLLLLffLLLLLLLLCCGGCGCCCLLLCCCCCCCCCCCCCCCCLLfffftffffCGGGG
CLLCCGG000GG00f1i;;;iiiii1tLCCCCCCCCLLLLLLLLLfLffffLLLLCCCCCGGGGCCCCCCCCCCCCCCCCCCCCCLLLLffffffCGGGG
CLLLCGGGGG000C,..,.....,,,:;fGGGGGCCCLLLLLCCCCCLLLCCLLCCCCCCCGGGGGGGGCCCCCCCCCCCCCCCCCCLLLfffffLGG0G
LLLLC00GGGG00Li,,,,..  ...,:tCGGGCCCCCCLCCCCCCGGGGCCCCCCCCCCCCCCCCCCCCCCCCCGGCCCCCCCCCCLLLLfffLLCGGG
LLLCG00GG00GCf;::,,,......,;fLCCCCCCCCCCCCCCCGCGGGGGGCCCCCCCCCCCCCCCCCCCCCGGGCCCCCCCCCCCLLLffLLfLCGG
LLLCGGGGGGGCLfi:,,.,,,,,,;itLLLLLCCLCLLLCCCCCCCCCCCGGGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLLLLffffffLCGG
LLLCGGGGGGCLft1i;:,,,,::iitffLLLCLCCLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCLLLLLLLLLfftffffLLCG
LLLCGGGGGGCLf1iiii;;;;:;;i1fffffLLLLfLLLLLCCCCCCCCCCCLLLLLCCCCLLCLCCCCCCCCLLLLLLLLLLLLLLffttffffLLCG
LLLCGGGGGGCCLf1;:,,,::;;;;1tffffffffLLfffffLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCLLLLLLLLLLLLLLfftttfffffLLC
LLLCGGGGGGGCGC1;:,,...,,,,:itffffLLfftt11tffLLLLLLLLLLLCCLLLLLLCCCCCCLLLLLLLLLLLLLLLLLfffttttffffLLC
CCCCGGGGGGGGCCL1i;:::,:,,,,,::;1i;;:::;;i1fffLLLLLLLLCCLLLLLLCCCCCCLLLLLLLLLCCCCLLLLLfffftttffttffLC
0000GGGGGGGGCCCCLtii;;ii;;;;::,:;;;;ii1tffLLLLLLLLLCCLLLLLLLLCCCCLLLLLLLCCCCCCCCCCLLLLLffttffttfffLL
00000GGGGGGGGCCCLLf111111ttt111ttttttfffLLLLLLLLLLLLLLLLLLLLCLLLLLLLLLCCCCCCCCCCCCCLLLffffffftffffLL
00000GGGGGGCCCCCCCLLfffffffLfffffffLLLLLLLLLLLLLLLLLLLLLLCCCCLLLLCCCCCCCCCCCCCCLCLLLffftttttttfffffL
000000GGGGCCCCCCCCCCCCLLLLLLLLLLLLLLLLfLLffffLLLLLLLLLLLLLLCCLLLLLLLLLLLLLLLLLLLLLLfffttttttttttffff
G00000GGGGCCCCCCCCCCCCLLLLLLLLfLLLLfLfffffffffLLLLCCCLLLLLLLLLLLLCCCCLLLLLLLLLLffffftffftttttttttfff
GGG000GCCCCCCCCCCCCCLLLLLLLLLLfLLLLffLLLfLLfLLLLCLLCCCLLLLLLLLLLCCCCCCCLLLLLLfffffftttttfttt11tttfff
GGGGGGGCCCCCCCCCCCCCLLLLLLLLLLLfLLLLffLLffLLfLLLLCCLLLLLLLLLLLCCCCCCCCLLLLLffffffttttttttt111tttfttf
GGGGGGGCCCCCCCCCCCCCLLLLLLLLLLLLLLfLfffLLfffffLLLLLLLLLLCCCCCCCLLLLLLLLLLLLLffffftttttt1111ttttfftff
GGGGGGGCCCCCLLLCCCLLLLLLLLLLLLLLfLLLLffffLfffLffLLLLCCCCCCCCCCCCLLLLLLLLLLLLLfffffttt111111ttttffffL
GGGGGGGCCCCCLLLLLLLLLLLLLLLLLLLLfLfffffffffffffffLLLLLCCCCLLLLLLLLLLLLLLfffffffffftttt1ttttffffffLLL
GGGGGGGCCCCCCLLLLLLLLLLLLLLLLLLLffLfffffLffffffffLLLLLLLLLLLLLLLfLLLLLLLLLLffffffttttttttfffffLLLLLL
GGGGGGGGCCCCCCCCLLLLLfLLLLLLLLLLffLLfffffffffffffffffffffffffLLLLLLLLLLLLLLfLffffttttttfffffLLLLLLLC
CGGGGGGGGGCCCCCCLLLLLLfffffffffffffffffffffffffffffftfffffLLLLLLLLLffLLLLLfffffffffffLLLLLLLLLLCCCLC
CCCCGGGGGGGCCCCCCLLLLLLffffttttttttttttttttffffffffffLLLLLLLLLLLLLLLLLLLLLLfffffffLLLLLLLCCCCCCCLLLC
CCCCCGGGGGGGCCCCCCCLLLLLLLfffffffffffftfffffffLLLLLLLLCLLLLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCLLLLC
CCCCCCGGGGGGGCCCCCCLLLLffLffffffftfffffffLLLLLLLLLLLLLLLLLLLLLLLLLLLCLLLLLLCCCCCCCCCCCCCCCCCCCCLLLLC
`,
  'You Guys are Getting Paid': `
1Lt.;LCCCCCCCCGGGCGGGGGGGGGGGGGGf::::;tt:,iLLLLffft1iLLCGGCCt.. .L1.,.,,. ......     ............. ,
LCLtLCCGG8800888000000GGGGGGGGGGf:,::::::,iLLf1;;;;;:;1ffLGGf.. ,CL,,,:,. .,....     ..,,,........ :
fLLLLLLLL1i;f0000GCGGGGGGGGG00GG0C1,,;i:,::,:,::::,:,,..,,iL1 . ,ff:,,::,......     .,,,,......  . :
fLLLLLLLf;:;;C80008000000008000880Gf1::::;;::;;;::,,.,,,,,.1t . :00L:,::,......    ,,::,.......... ,
LLLLLLfLt:;;:;G80000000000000088000881:;ii1tffttt111ii;::,,.:.. ;00G;::,....      ,::::,.......... ;
111ttttf1iiii;1G0GCG888888GG8880G888t:;itfLLLLffffffftt1ii;:;,. ;00C::,,...      .:::::,,......... i
,,,::,,:;;;;;;;it11tLLLCCGG000G1;C80i;i1fffffffftttttttttt1i;;, i80f:::,,..      .:::::,,........  1
      .       . .........,,,,,,,,,::::;tfffffffffttttttt111i:;:.;Lfi,:,,.......  ,,::::,,......... t
,,,,,,,,,,,,................. ..   .,:iffftt111t1t1tt111tt11;,,.     ..............................,
LLLLLLLLLLLLLLLLLLLfffffffffffftttt11;ffft1;:,,:;i1i;;;;;ii1::;:::::::,,,,,,,,............          
LLLLLLCCCCCCCCCCCCCCCCCCCCCCCGGGGGLtt1fffft1i;;i1ff1,,,.,:;1:fGCCCCCCCCCCCCCLLLLLLLLLffffffffttttttt
LLLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCLt1fffffffttffffLf11111111;fGCCCCCCCCCCCCCCCCCCCGCCGGGGGGGGGGGLLCG
LLLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCLLLffffftttt1tttt111ttfttiiLCCCCCLfLLfCCCCCCCCCCLfLCCCCCCCCCCftLCC
LLLLLLLCCCCCCCCCCCCCCCCCCCCCCLfLCCLti1fffttt1ttti;;::ii1111itLCCfLffLffffLfLCLCLfLfLLfLffLLLffffCCCC
LLLLLLLCCCCCCCCCCCCCCCCCCCCCCLfti:..,ifffft1ttttt11111i;iii11fL1i;,iLLCLfffLfLLLLfLffCLtfLCCftfCCLLL
LLLLLLLLCCCCCCCCCCCCCCCCCCCGL1:.,;1ti1fffft11i::;;:,::;;;i:,,.,,,,.,iL1;:,,,;fti;;;tGLfffLLLffLfLLLL
LLLLLLLLLCCCCCCCCCCCCCCCCCCf,.,,1fL;.1fffttttt1iiii;;i;;i:,,...,,,,..,..,,,,.,...,.,CCCCCCCCCCCGGGGG
LLLLLLLCCCCCCCCCCCCCCCCCCCL;.,,,,.,,,1ffftttttt1iii;iiii:,.,ii..,,..,:i;.,,.,:i,,,.tGCGGGGCCLLfffftf
LLLLLCCCCCCCCCCCCCCCCCCCCLt1:::,,.,,,tfftttttttt1iiiii;,.,1CL;.,,.:tCLi,,.,iLC;.,,tGLft1i;:,.......,
LLLCCCCCCCCCCCCCCCCCCCCGCt..;ffttti;tffttt11111iiiiiii,.;LGf,.,.,tCGL:..,iLGL:.,.,;,....,:;;i1tfttLC
LLCCCCCCCCCCCCCCCCCCCGLi,..tGCCCCGffffftt1111iiiiiiiii;1GG1.,,.;LGCf,.:1LGCL; ..,::i1tfLCCCCCCCCCCCC
CCCCCCCCCCCCCCCCCCCCC1,.,;LGCGGGGGCttfttt1iiiiii;;;iii;LGt..,,1CCCffLfCGCCLtt1tfLCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCCCCCCi.,,.LGCGGGGGGGCt1t111ii;;;;;;;iii,tCLft1LGCCCCCCCCCCCCCCGCCCCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCCCCCf:.,:1ttfG0GGGGGGGf11111iiiiiiiiii1:1CCGGLtfCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCCCCLfti1fLf1tfCGGGGG000CLft1111iiii11tt1LCCCGGGt1fLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCCCCCLLLLLffftffLCGGCLft11fLfftttttttfffLCCGCCCCL1tLLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCCCLLLCCCCLLLfCLffti,....,,ifLLffffffffCCCLL1,,:tft1i1tffLCCCCCCCCCCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCLLLCCLLti;i;;i;;::;;;;1tfLLLLfLLLfLfLGGGL1;ii::;;:,;;:;;1fCCCCCCCCCCCCCCCCCCCCCCCCCCC
fffffffffffffLGGGGGCti;;;;it1itt1LGCCGGGGGCCCL1tLfCGCCLfLCCCCLLfttLLLLt;fCCCCCCCCCCCCCCCCCCCCCCCCCCC
tttttttttttttLGGGGGGGCfLGCCCGGGGGGGCCGCCCCGGGGLfCGGCCCCGGGCCGGCCGCCCGGLLCLtttttttttttttttttttttttttt
tttttttttttttLLLfLfffffffCGCCCGCCGGGGGGGGGCCLfL0GL1tffLLCCCCGGGCCCGGGL1tttt1111111111111111111111111
CCCLLLLLLLLLLfffftttttttttLGCCGGCCCLfffttttttfLGCfffttffttttttfffLLLC11ttttttttt11111111111111111111
CCCCCCCCCCCCCfffftttttt1tt1ffttt11ttffLLCCCGGGCCCCCGGCCCCCCCLLf11t11iit11ttLCLLLLLLLLLLLLLLLLLLLLLLL
fffffffffffffttt1111111iiii;:;1fttLLLLLLLLLLLffLffffffLfffLLLLLfffffiiii1t1tffffffffffffffffffffffff
`,
  'Unsettled Tom': `
LLLLLLLLCCCCLLftt11ii11i;iii1ttttttttttttttttttttttttttttttttttttttttffftttttttti;ifLLCLLLLLLLLLLLLL
LLLLLLLfft1111111tttt11i1ttttttttttttttttttttttttttttttttttttttttffft1ii1ttttttttt111tfffLLLLLLLLLLf
LLLLLt1tttfLLLftt11iiiiitttttttttttttttttttttttttttttttttttttttff1;, .:i1ttttttttttttt11111111111111
LLLLLLLCCCLf1iiii:i11ttttttttttttttttttttttttttttttttttttttttffi,  .1ffffttttttttttttttttttttttttttt
LLLLCCLf1ii11t1ii1ttttttttttttttttttttttttttttttttttttttttttf1,  .tf11fttttttttttttttttttttttttttttt
LLLLt1ii1fLLCiitttttttttttttttttttttttttttttttttttttttttttft:   ,LCCCtitfttttttttttttttttttttttttttt
LLCLfLLCCCLCi;ftttttttttttttttttttttttttttttttttttttttttft;.  .iCCCCCCL11ftttttttttttttttttttttttttt
ttttfffffLC1,ttttttttttttttttttttttttttfttttttttttttttff1,  .iLCCCCCCCCCtitftttttttttttttttttttttttt
1tttt111111,1tttttttttttttttttttttttttt1tttttttttttttft:   ;LCCCCCCCCCCCCfitfttttttttttttttttttttttt
1iii1tfttfi;ftttttttttttttttttttttffttt1tftttttttttft;.  .tCCCCCCCCCCCCCCCLi1ftttttttttttttttttttttt
ffti;ii1ttt1ttttttttttttttttttttt111tttttitttttttfti.   ;LCLt11tfCCCCCCCCCCC11tfttttttttttttt1ti1ttt
ffffft1:;1tttttttttttttttttttttttftitttttiitttffti,   :fCCC;;,..,;1LCCCCCCCCC::1ttttttt11i11tLf:tttt
ffffffffti;ttttttttttttttttttttttttftt1ttt1t1t1:.  .,fCCCCL::     .:tCCCCCCCL;;:1ttt1ii1fC088@Lift1i
ffffffffffi;fttttttttttttttttttttttttt11ttft1;,.,:ititCCCCC1:.     ,:fCCCCCL:::if1i1fG8@@@@8@@f;1ii1
fffffffffff;ttttttttttttttttttttttttttftt1it11ii1tftt;tCCCCCt;,.  .::fCCCCf:;i1i:1C8@@8888@8GC1:1ttt
fffffffffffitttttttttttttttttttttttttttff1 ,i:;i;ttttt;tCCCCCLf1iii1fCCCC1,i1;,:C@@8888@@8CfL0Lifttt
fffffffffft;tttttttttttttttttttttttttft1;,  iit1:f;1ttti1LCCCCCCCCCCCCCf;;1i.:L@@88888@0LfG8@@8;1ftt
fffffffft1ittttttttttttttttttttttttft;.   .;tttttti1tttf1itCCCCCCCCCLt1;:1i,f@@88888@8LfG@@@@@@Cii1t
fffffiiiiitttttttttttttttttttttttfti.   .::1ttttt1;1tttttt1itfLLLf1i;i1;1i,G@888888@GtG@@@@@@@@@@Gf1
fffff1111111titttttttttttttttttft;.   ,1LCfi;1fttttttttttttt1i;;::;:;1i1ii0@888888@Lf8@@@@@@@@@@@8Ct
ffffffffffi1f;tttttttttttttttffi.   ,tCCCCCCL1itftttttttttttttt1i1t11tf;1@@88888@@fL@@@@@@@@@@@GLL0@
ffffffff1;i11:itttttttttttttft:    1CCCCCCCCCCfiittttttttttttttttttttf;i@888888@8tC@@@@@@@@@8CLC8@@@
fffffffftttttt;ttttttttttttfi.   ,fGfiiiii1LCCCCt;iftttttttttttttttttit@888888@8tG@@@@@@@@8LfG@@@@@@
1ttfffffffffff1iftttttttttf1    iCGt::.  .:;1CCCCCi;ttttttttttttttttit@888888@@C0@@@@@@@@CfC@@@@@@@@
Lt11ttfffffffffi1ftttttttf1.  :LCCCi::     ,;1CCCCCt,1ttttttttttt11t;8888888@@@@@@@@@@@0fC@@@@@@@@@@
LCLLtt11tttttttt;ittttttt1.  ;CCLCCL,;.     ,:LCCCCG:;tttttttt1i1iiii@@@8888@@@@@@@@@@Lf8@@@@@@@@@@@
LLLLCLLfftttttttt1itttttfi  .LCLLCCCf;:,.   ,:LCLLLC:;1ttttt1:,:.    ,1G@888@@@@@@@@GtC@@@@@@@@@@@@@
LLLLLLLLLLLLLLLLLCf;ttttt1  iiLCLLCCCCfti;;;;1CLLLCL..1ttttt1i, ,ft     t@8@@@@@@@@0L8@@@@@8@@@@@@@@
LLLLLLLLLLLLLLLLLLCLi1tttt,;ftifCCLLLCCCCCCCLCLLLCf,,iitttttt, :8@G      8@@@@@@@@@@@@@@@@@808@@@@@@
LLLLLLLLLLLLLLLLLLLLLti1ttttttti1fCCLLLLLLLLLLLCC1;ii1tttttt;  L@t      .8@@@@@@@@@@@@@@@@@@@8@@@@@@
LLLLLLLLLLLLLLLLLLLLLCL1itttttttt11fCCLLLLLLLLCf::;ti1tt11tfi  ;;       :@@@@@@@@@@@@@@GfC0@@@@@@@@@
LLLLLLLLLLLLLLLLLLLLLLLCfi1tttttttt11fLLCCCCCL1.:;1t;i1tC8@@8:          ;@@@@@@@@@@@8L:;C@@@@@@@@@@@
LLLLLLLLLLLLLLLLLLLLLLLLCL1i1tttttttt111tttti;,:t1t1i1G@@888@8CCCCCCCG008@@@8@@@@@Ct:,f@@@@@@@@@@@@@
LLLLLLLLLLLLLLLLLLLLLLLLLLCL1ittttttttttt1i;;ii1ttt118@8888@@@@@@@@@@@@@@@@@CC08Ci,,18@88@@@@@@@@@@@
LLLLLLLLLLLLLLLLLLLLLLLLLLLLCti1tttttttttttfttfttttt8@88@@@@@@@@@@@@@@@@@@@@@@C,,,iG@8CC888@@@@@@@@@
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLCL11ttttttttttttttttti0@8@@0L0@@@@@@@@@@@@@@@@@@8;,iG@8GC0@88888@@@@@@@
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLCtitttttttttttttttti8@8GLL0@@@@@@@@@@@@@@@@@@GitG80GG8@@888888@@@@@@8
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLCfi1ttttttttttttttt0CLC8@@@@@@@@@8G@@@@@@@@@80@@@8@@@888888@@@@@@@@8
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL1ttttttttttttt1,f08@88@@@@@0CCC0@@@@@@@@@@@@@@@@88888@@@@@@@@@@@8
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLC11tttttttttti;1;G@888@@@8CCC0@@@@@@@@@088@@@@@@@@@@@@@@@@@@@@@@@@
`,
  'Panik Kalm Panik': `
                                        iL0GGGGGGGGGGGGGGGGGG000000000000GGGGGGGGGGGGGGGGGG0;
                                        iG@@@@@@@@@@@@@@@@@@@@80GGGG0088@@@@@@@@@@@@@@@@@@@@i
                                        iC@8888888888888@@8GLft111i1tfffLC08@@8888888888888@i
                                        iC@88@@@88@888@@8GLftttttttfLLLLLLfL088@@@8@88@@@88@i
                                        iC@88@@@8@8@@88GLfLLffftttffLLCCLLLftfLC08@8@@@@@88@i
                                        iC@88@@888@80CLfttCCCLft11ffLft11fLLfffLfC0@888@@88@i
                                        1C@88@@88@8CfffffLGCCftt11fff1111tLLtfffffL8@88@@88@i
                                        1G@88@@88@0LLffffLffftt111tLLf1fLfLftitLfff8@88@@88@i
                                        1G@88@@88@GtfLLtfttttt111i1fLCCCLLffLffLftt0@88@@88@i
                                        1G@88@8@8@G1tLL1ttt11111ii1tfffffLLfLftLLttG@8@@@88@i
                                        1G@88@88@8ftfLf111111iiiii11ttfttfftt11tfftf8@8@@88@i
                                        1C@88@@8@GfLfttiiiiiiiiiiii1tttftii11t0CfG008@8@@88@i
                                        iC@888888888GC1iiiii;;;iiii1tttt1i1f1C@@8@@@@8@@@88@i
                                        iC@88@88888@@@Li1iii;;;;;iii11tfftftL@88@888888@@88@i
                                        1C@88@@888888@81111i;;;;:::;;i1tfLfC@@888@@@88@8@88@i
                                        1G@88@@@@@8888@L1t11iiii;::,,:;i11L@88@@@888@@8@888@i
                                        tG@88@@@@@@888@G1tt11iiiiii;:,C880@@@@@008@88@@8@88@i
                                        tG@88@@@@@@888@G1tt111i11ii;:1@G@@    Panik   8@888@i
                                        1G@88@@@@@@8@8@C1tttt11111iitf@8888888888808@@8@888@i
                                        iC@88@@@@@@88@8ffffffffft11LLf0@G8@@8@@@@@@@8@@8@88@i
                                        iC@8888888888@8t11tttttfffLLft0@@@88@88888888888888@i
                                        iC@8@@@@@@@@@8@8GCLffttffLLCG0@@88@@@@@@@@@@@@@@@@@@i
                                        iC@8888888888888@@@@@@@@@@@@@@888888888888888888888@i
                                        ;tCLLLLLLLLLLLLLLLLLLLCCCCCCCCCLLLLLLLLLLLLLLLLLLLLC;
                                        iC@8@@@@@@@@@@@@8@@@@8000000088@@@@8@@@@@@@@@@@@@@@@i
                                        iC@8888888888888@@0CLtt1111ttffLCG8@888888888888888@i
                                        1C@888888888@8@@0LfttttttttfLLLLffLG@88888888888888@i
                                        tG@88@@@@88@8@8GLLffffttttfLLLCLLLLfC@8888@@@@@@@88@i
                                        tG@88@@@@888@8GCCCCCLftt1tfffLCLfLLCf0@888@@@@@@@88@i
                                        tG@88@@@@8888GCCGGCCLft11tffft11tLLLtf@888@@@@@@@88@i
                                        tG@88@@@@88@0LLLLLffttt111fLf1tffLf1;18@8@@@@@@@@88@i
                                        tG@88@@@@88@Gffffftttt1111tLCCCCLfffffG@8@@@@@@@@88@i
                                        fG@88@@@888@Ltttttt1111ii11fffffLLffft0@88@@@@@@@88@i
                                        fG@88@@@@88@C111111111iii11tftftffff1f@888@@@@@@@88@i
                                        LG@88@@@@88@0i111iiiiiiiii1tttft1i1tiG@888@@@@@@@88@i
                                        fG@88@@@@888@fi1iiiiiiiiiii1ttt1iit1t@888@@@@@@@@88@i
                                        tG@88@@@@@@8@0i11ii;;;;;;iii1tfttttt8@8@@@@@@@@@@88@i
                                        1G@88@@@@@8@8@Li11ii;;;;:;;ii1tfLLf8@8@8@@@@@@@@@88@i
                                        iC@88@@@@@@88@011111iii;;::::;ii110@8@888888@8@@@88@i
                                        iC@88@@@@@@88@8t1t11iiiiii;;,100G8@8@8@@@@@88@@@@88@i
                                        iC@88@@@@@@88@8ttt111i11iii;;0@0800@8@G88@8@8@@@@88@i
                                        iC@88@@@@@@88@0tttttt1111ii1t0@i:    Kalm   @88@@88@i
                                        iC@88@@@@@888@Ctffffffft11fLfL@8@8@8@8@8@8@8@88@@88@i
                                        iC@8888888888@Li1tttttffffLftf@@@@@@@@@@@@@@8@@8888@i
                                        iC@888888888888GLft1tttffffLC8888888888888888888888@i
                                        iG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@i
                                        ;fCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC;
                                        iC88888888888888888888888888888888888888888888888888i
                                        iG@@@@@@@@@@@@@@@@@@80CCLLLLCG0088@@@@@@@@@@@@@@@@@@i
                                        iC@888888888888@@8GLtt11111tfffLLC08@@@8888888@8888@i
                                        iC@88@8888888@@8CLffftttttfLLLCCLLLCG08@@88888@8@88@i
                                        iC@88@88888@80GLffLLffttttfLLLLLLLfftfLC08@888@8@88@i
                                        iC@88@888880CLftfLCCLftt1tffft11tfLfffffLC8@88@8@88@i
                                        iC@8888888GLffffLCCLftt11tfft111tfLftffffLG888@8@88@i
                                        iC@88888@0Lffffffffftt1111fLLffLLLff11ffffC8@8@8@88@i
                                        iC@88888@0ftfLftttttt111i1tLLLCLLfffLffLttC8@8@8@88@i
                                        iC@88@88@GttLLt11111111ii11tfffffLLLftfLftf8@8@8@88@i
                                        1G@88888@LtfLf11111iiiiiii1ttttttttt11tffffG@888@88@i
                                        1G@88@8@0LCLft1iiiiiiiiiii1ttttt1i111G0LC08888@8@88@i
                                        1G@888888880Gfiiiii;;;;iiii1ttt1iit1f8@@@@@@88@8@88@i
                                        1C@888888888@G111ii;;;;;;iii1tffffff8@88888888@8@88@i
                                        iC@88@88888888f111ii;;;;:::;ii1tffL8@88888@888@8@88@i
                                        iC@88@8888888@G1t111iiii;::,::11tf0@88@@880@@8@8@88@i
                                        iC@88@8888888@01tt11iiiiiii;,t@808@@@@08888888@8888@i
                                        iC@88@8888888@0tttt11i11iii;;0@i@8    Panik   @8888@i
                                        iC@88@8888888@Gtttttt1111iitt0@@8@8@8@88088@@8@@@88@i
                                        iC@88888888888Ltffffffft11fLfL@80@@@@@@8@@888888888@i
                                        iG@@@@@@@@@@@@GtttttttfffLLLfC@@@@@@@@@@@@@@@@@@@@@@i
`,
  'Leonardo Dicaprio Cheers': `
i1i;::i1i:,,,,,,,,,..    .:;,  .1Lt. :;ii;;iii11tttt1ii;:,,,.;fCLt;,...,;1ff1::;;;::::,... ....     
;::::;tti::,,,,,,,.,::.  ,1t;.,,::,,:;::;i1tttttttffft1i::,,...ifffti,,,:ifGGf;:;;::::,......     ..
::;;;;;;:::,,,,,,:::;i;,..,,,,,,..::,,:;1ttttt11tt11111i;::,,,. .:;1t1:::;;itLfi:,,,::,........  ..,
:;;;::::;;;::::::::,:11,...,,...,;i,,:;iii;:;i11iii:,,,,.,,::,,,..,,:;;::;;;;i1ti:,,:::,,,......,,,,
:::::;;ii;::::::::,,;tt, .,:i1i,,i:.,,:;;,.,,::ii;;;,,...,:::,,...,,,:::::;ii:;1t1;::::,,,..,,::,,,.
;i1tLLti;;;;:,,::,,,,,,.,:,:1f1,,i:,,,,,,,i1;:,::::::::,:;;;;:,.....,,,,:::::::;iii:::::,,,,,:,,....
;;i1ttt1iitfi:ii:,::,..,i1;::,,:i:.....,;tttfttt1i;i;;i11iii;;:,. .,,,,::,:::::;ii;:,:itf1:,,,,:::,,
:::;itft1;;:,,::,:::,,...,,:,..,i, ...:i111ttffffftt1ttt11i;;:::. .:,,;11:,:;;itffti1tLCLLti;;i111i;
,,,:itfti:,,,...,::,::,...:::...,,  .,;ii1111ttftttttttt1ii;;:::,..::,,:::,,,,:;iiifGGGftfft;::;;iii
.,::,,,,,,,,..,11;,......,:;:,,,:i, .,:i1ii111tttttttt1111i;;;;::,,::,..,::,:;;::::ifLLi,,,,,::;;ii;
;tft:,,.......,1ffi.    ..,,,,,,,i;,.,:i11i11ttfffttttttt1;::::,,::,,;i;:;;;i11iii;:,::,,...,,,,,,,,
GCCCf1i;:,......,:,...  ..,,,,,,.,i;,,;i111iiii111tttttti:,:::,,:::;1CGCtfLLLfttLLffti,,.....,,.....
1i;iii;;;:,,.....  ... ..,,,,,,::,:11;i1i;:;;;:,,:;i111;:::;;::;;:;iifLf11tt111tffffff1;:,..........
:;:::::::;;;:,,....   ...,,,,,,::,.:tti11ii;;;iii:;;1ti:;;ii;;ii;::itt1ii;;;;;;iii;;:i1tti:,,.......
:;;:::::::i1i:,....::,....,;:, . .. :1ii1tttt11111fftft;i111tt1i;:iC0Gt;;;;;;;;;:;;;,,::;::::,..,,::
::;::,,::,,::,,,,.;LLfi,.,:iiii;i;:;:;1111ttffffLLfttff;;ii1t11i:,itff1;;;;;;;;::;;:,,,,,,,:::::;;;,
::::;i11;,....,,,;tfff1ii:,,:LtiL::::,1f1ii1ttt11;ittff1;;:::::::,:;;;:::;;;;;:::::,,,::,...:1fti1;:
::::;11i,.......,,:;11i;;,,,:::::;;;:::11iiiiii;;i11;;i;::::;;;::,,,,,:;ii;;:::::::,,it1,...,1ftii;,
::;;::,............,;;;i;::,:,,::;C0L;1tf1iii11ii11iiii;;;::i;::,....,:;ii;;:::::::,.,,:;1tt1i;:;;;:
,:::::,,,........,,:t111;ii11ti,..:;:.,,::;1t1t11tt1111i;;;;;,,,.......,:::::::::,,,..;tLCLLt11;::i;
,,::::iftii,....:1tfLfLLLLLLLCL;.,. .,::i:,;;;;;i111111iii;:,:; ..,,,,,,,::::::::::,,1LCLftttt1i;;i1
,,::::;i1ff:,,,,,;tt11tt11i;;;;::::;i11ft.,,,,:,,:i11tt11;::;1i   .,,,,:::;;;:::;;:,:tCLfftfGGL1;;;i
,,::::,:,:,,,,,,,,i111ii;;iiii11tttffLCf11i...:ti,.,::::,,.,,,,    .,::::;;;:::::::,:tLLttfC00C1iii1
,,,:::::::,,..... ,fLLffttffffffft11ft1t1ti....:t:     ..           ..,::ii;;;;::::,,1ft1i1111ii1111
::,:,,,,::. .....,ftttt1iiiiiiiiiiiit1i;:,.......:...   .            ....,:;i11iii;:,,;iii;;ii;i11i;
::,,,,,,,. ......f1;;itfft1iiiii11i:t:.............   .,;:;,..        ..    .,,:;i;::,,,:;;ii;iii;::
C;,:,,,,,.. ....:C.;i;i111111iiii;::1;............. :1tffftf1;.        ..        ..,,::::,,,,,,,,,,.
1;::::,,   .... ;G;,i;;;;:iiiii;. ,;i; .............,fCCCCLLLf,        ..            .,::,,.........
:;;::,,,  ..... :GC.:;:;;;:::;:.. ,;i: ............. .1CGGCCLf,         ..  .         .ii:,.........
:;;;::,,.........i0f.:iiii;;1;  . ,:i: ..............  iCGGCCC, .        .             ,,......    .
:::,,,,,.....  .. i0f,;i;1LC; ... .:;:   .   .......... iCCCGL....        .              ....,,.    
;:,,,,,.....   ... i0f,:f0L,   ...,i1i,....   .......... iCCC1 .....                   .:,,......   
i::::,........ ...  tGitGf. .,;;ii111ii;;i:,.   ..    ... iLL: ....                    :fi:,. ..... 
`,
  'Grant Gustin over grave': `
;ii;:;i;i;i1i;:;;::::;ii;;i11ffffti::;i1i,:ii1t11i;1tt1t1ffLLCLfLti::::;:;:iLfttti;;::,:;;fffffii1tC
ii;:::;;iiii1i;i11tt1iii1i1tii111t::::;;;:i1;1fLCGCGGL111ti;:,,,,i1::::;:;;;i1fL1;;1i:,:ifCLLf1,,;L0
ii;::::;;i11i1i1111t1tti1i;;:,;i1i,,:;;;i1ti:;fGGGGGGGCti;;;:,,,:i1::;;;;;;;;:ifLtiii,,:;111i::,..,:
i;;::;:;i1ffttt1i;;;;ii1i;::;:,;;,,,,::i111i;:tLCCLCCCL11;::;ifftti::::;iii;;:,;fLLt;::,,,:,:;;:,...
iiiiii;ittt1111t1;::::;;:;;:;;:,:,,,:,,;i1ii:;tfttfftti;i;,,:111i:,,,:ii111iii;;i;1f1:,,,:;:;;i:,,:;
;;;::::,:;;;iiiii::::,::;i;::;:,,,,:::::i;:::it1tfft;;;;ii,,,,.,,,,,:i1iiiiiiii;:,:;1i:;i;;;i;;,,,:;
,,,:;i111i;;;iii1i1tffLLLLLLfft1iiii;;:;i;:::i;:;tfi:::i1ii;:,,,,,,:i1;;;i;;::;;:,,,,::;i;;:;;;,,:::
i:itfLfffff1fLCCCCCCCCCCCCCCCCCCCCCCLLLft;:,,:::,:;::::::;i1i;:,,,,:;i:::::,,,,:;;:,,:;;iii;;;;,,:::
t111ttttttfffLCCCCCGGGGGGGGGGGGCCCCCCCCGL;,.:;:,::::,,,:;;;iii;,,..,,;1;:::,,,,:;;ii;::;i;11i;;;;;;;
ii11111111t11LGGGGGGGGGGGGGGGGGGGGGGGGCGC;,,:,,.,:,:::;ff;;;;;;,...,,,:;;::,,,;;:;;ii1iii:i;:::;;;i1
i;tt1iii11tttCG0GGGGGGGGGGGGGGGGGGGGGGGGC;,,,,,.,,,:::;f1;;;;;:,...,,,,,,::,:::::,:;;;i1;i:,:;::,,:;
11ttttttt11tCGGGGGGCCGGCCCCGCCGGGGGGGGGG1:,,,,...,,,::::;;;;;;:,...,,,,,,::,:::,:,,,,::;::,,,:;:,,,,
1iitttfff11LGGGGGGGGGGGCCCCCGGGGCCCCCCGCi:,,,,....,,:::::;;;;:,....,,::,,,,,,,,,,,,,,,,::;;;;i;:,,::
1;::;;ii1fCCCCCCCCCCCCCCGCCCCCCCCGCGGGGt;,,,,,.,..,,,,,:::::::,...,::::,,.,::,......,,,:;iiiii;:::::
i,...,;ii1LGGGGGGGGGGGCCCCCCGGGGGGGGCCG;,,,,,......,,:;;::::,,,..,:::,,.,.,:;,.......,,,:i111111iiii
i,...,ii:,1GCGGGGGGGGGGGGCGGGGGGGGGGCCGi,,,,,..,,,,:;;;::,,,,,,.,;;,,....,.,:,.......,,,:;11tttttttt
11;,.,;1:,iGCGGGG              GGGGGCCGi,,,,,,:;ii;;;;::::,..,,.:tt;..................,,::;1iiiiiiii
iii;.,:1;,iGCCGGG              GGGGGCCGi,,,,,:;i;;;:::,,,,,,,,,.:tf1,................,,,,,,;i1iii;;;
;i;,.,,:,.:GCCGGG              GGGGGCCGi.,,,,,,,,,,....,::::,,,,.,::,.............,,...,.,:;1tiiiiii
;,.....,..,CGCGGG              GGGGGCCGi.,........,,::::;:::,,,,........,,,....,..,.....,,,:;;;;;;;i
....,,.,,.,LGCGGG              GGGGGCCGi.........;i11iiii;::,,,,............,,,,......,,,,,,ittttttf
....,,.,,..fGCGGGGGGGGGGGGGGGGGGGGGGCCGi.......,:;ii1tf1ii;:,,,,........,,..,,,.......,,,,,:1fffffff
....,,.,...tGLGGGGGGGGGGGGGCCCGGGGGGCCGt,......::;1fCGGL11fi,,,,...,,,,,,,,........,,,,,,,,itttfffff
...,,,,,..:LGCCGGGGGGGGGGGGGGGGGGGGCGGCCi..,,,,,,tLCCCLCGCGt;::::::::::;:,,.....,,,,,,,,,,,1tttfffff
...,,,,,..1GGGGCGGGGGGGGGGGGGGGGGGGGCGCC1..  ....;tfLCCCGGGtii:,,,,::::;;;:,,,,,,,,,,,,,,,,1tfftffff
..,,,,;,..iGGGGCCGGGGGGGGGGGGGGGGGGCCCCGf;:..,,...:tLLLCCCC1:;:....,,,,,:::::;;:::,,,,,,,,:tftttttff
.,:,,;t;..1GGGGCCCCCCCCCCCCCCCCGCCGGGGGGCt;,,,:....,i1fCGCLL;:,......,...,,,,,::;;;;:,,,:;1fffttttff
,,,,;111,;GGGGGGGGCCCCCCCCCCCCCCCCCCCCCCCf:,...  .,;,,;111tfi,..............,,,,,,::;;:itttttttttttf
,,,;1111;iGCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGCi,,,,,,,t1.:i;..::,,............ .....,,,,,:;ttttttttttttt
,,;1tt1:1GGGGGGGGGGGGGGGGG0000000000000000G1::;;itCttfi:..,i1,,................,,,,,,:;1fftttttttttt
:;111i;:10000000000000000000000000000GGGGGGGt;:;fCGGGL:....,;:,,.................,,,,::;tttttttt1ttt
111111LCG0000000000GGGGGGGGGGGGGGGGGCCCCCCCCGt;tCCCLfi,,........................,,,,,,:;iii111tt11tt
111iit080GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGffLLLi:.,,........................,,,,,,:;;;ii1tt1tttt
111iit880GGGGGGGGGGGGGGGGG00000000000000000000GLfLC1,,.,........  .............,,,,,,,::;;:;tttttftt
1iiiif8880000000000000000GGGGGGGGGGGGGGGGGGCCCCffLL;............    ..........,:,,,,,,,:;;;;1ttttttf
1ii11f8000000000GGGGCLftt111i1i111111tttfffffLLt;;,............      .............,,,,,,:;:,;1tt1ttt
iiiiitCCCCCCCCLffft11iiiiiiiiiiiiiiiiiiiiiiiiiii;i;:,..  ....................,:11ttt11:,,:,,:;1t111t
1iii11ttttt1t11iiiiiiiiiiiiiiiiiiiiiiiiiiii;;;;;;iiii;::. ...................iC00000GLi:,..,::;ttt11
111i111iiiiiiiiiiiiiiiiiiiiiiiiiiiii1iiiiii;iii;;;;i1iii,  ......           ,LGCLLftt1i;::.,:,:ifttt
11iiiiiiiiii1iiiiiiiiiiiiiiiiiiiiiii1iiiiiiiiii;;;;;;i;;,       ..          .ffii;;;;;;:,:,,::,:ttt1
;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;;;;;;;;;;;;;:.      ......       ,::::::,:,..,,,::,,1tft
i1tt1iii1iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;ii;;;:;;;;;i:....   ....  ....... .,,,..,,. ..,,:,,,;1ft
;i11t1iii1;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;;;;;;;;;:,,,,...........  ... ......... .,,,:,,,:1tf
iiiiiii;;i;;;iiiiiiiiiiiiiii1iiiiiiiiiiiiii1iiiii;;;;;:;;;::::::,,,,,...................,,,,:,,::itt
iiiiiiiii;;iiiiiii;iiiiii1ii11ii1ii11iiiiiii1111ii;;;;;;::::::::,,,,,,,,,,,,.........,;;,,,,:,,::;tt
1iiiiiii;;;;;;iiiiiiiiii111ii11i1ii11ii1iiii111111ii;;;;;;;;;:::,,,::,,,,,,,,,,......,i;,,,:,,,:::it
1iiiiiiii;;;;iiiiiiiiii11iiiii1iii11i1111iiiiii1iiiii;ii;;;;::::::::::::,,,::,,......:;:,,,,,,,,::i1
1iiiiiiiii;;;iiiiiiiiiii1ii11iiii11ii111111i11111iiiiiiiii;;;;:;;ii;;:::,::::,,.....,;;,,,,,,,,::i1i
`,
  'Whisper and Goosebumps': `
:::::,,,:::;;;;::::,,,...................,;1fLLfttttt11;::tffffti;1tfffLLLLLLLLLLLLLLLCCCCCCCCCCCCCC
::,,:;itttttt11iiiii;,,,,................. .,;ittttfffft11ttttti;1ttfffLLLLLLLLLLLLLCCCCCCCCCCCCCCCC
,..:itLLffttttt1i;;i1i;:,,,,...................:ii1tfffftt1111iittttfffLLLLLLLLLLLLLCCCCCCCCCCCCCGCG
. ,itfLLLLffftt1;::,it1i:,,:,,,................,111tffffftttttfffffffffLLLLLLLLLLCLCCCCCCCCCCCCCCCCC
 .;1tLLLLLLLft1i;:,,1tti;::::::,,,..,,,,,,....,itt1tffffffffLffffffffffLLLLLLLLLLCCCCCCCCCCCCCCCCCGG
 ,i1fLCLLLLLft1i;;,:1tt1i;;::::::,,,,,,,,,,.,,ittttffLLLLLLLLLLLfffffffLLLLLLLLLCCCCCCCCCCCCCCCCCCGG
.:itfLCLLLLLLft1ii;:1tt1i;;;:;::::,,,,,,,,,,i1ttffLLLLLLLLLLLLLLLLLLffLLLLLLLLLCCCCCCCCCCCCCCCCGGGGG
.:1tfLCLLLLCLLfftt1:1tt1i;;;;;::::,,,,,,,,,i1tttffLLCCCLLLLLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCCCCCCCGGGGG
.:1tfLCLfLLCCLLfti,;1tt11ii;;;;;:::::::,,,:1111tttffLCCCCCCLLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCCCCCCCGCGG
.,itfLCLffLLCCLt;,,i1tt11ii;ii;;;;:::::::,:i1111tttttfLCCCCLLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCGGG
,,;1tfCCLffLCCLt:,:i11ii11ii;;;;;;;;;::::::;i111111111tfLCCCLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCCCCCCCGGGG
:,,itfLCLffLLCCtii111i:;1111i;;;;;;;;;::::::;ii;;;;iii11tfLLLLLLLLfLLLLLCCLLLLLLCCCCCCCCCCCCCCCCCCCG
::,,itfCCLfLLCCLttt1i:..;1t1ii;;iii;;;;;:::::;;;:,:ii;ii;itffLffLLLLLLLLCCLCCCLCCCCCCCCCCCCCCCCCCCCG
;;:::itfLCLLfLLCLt;;:,..,i1t1iiiiiiii;;;::::::;;;::,,.....,:itttffffLLLLLCLCCCLCCCCCCCCCCCCCCCCCGGCG
i;;;::itLCCLLfLLCLt;::...,i11iiiiiiii;;;;::::::;;::::,,..,,,,::;i1tffLLLLCCCCCCCCCCCCCCCCCCCCCCCCCCC
1ii;;::;1fLCLLfLLCCfi;;::,,;i1i;iiiii;;;;;:::::;;:::::,,::::::::;;tffLLLLLCCCCCCCCCCCCCCCCCCCCCCCCGC
111ii;;::ifLCLLffLLLftttt1:,:i1i;iiii;;;:::::;iiiiiiii111i1111111tttffLLLLCCCCCCCCCCCCCCCCCCGCCGGGGG
tt111ii;::;tLCCLffffffffft1i;i1i;;ii;;;::::;1111111ttfffffffffffLfftfffLLLLCCCCCCCCCCCCCCCCCCCGCGGGG
ttttt1ii;;:;1fLCLfffffffft111iii;;ii;;;;;:;111111ttfffffffffLLLLLLffffffLLLLCCCCCCCCCCCCCCCCCCCGGGGG
fffftt11ii;:;1fLCLLffffttt111ii;;;;;;;;;;:;1111111ttttfffLLLLLLLLLLLLfffLLLLLCCCCCCCCCCGCCCCCGGGGGGG
fffffftt11ii;;itfLLLLLff111iiii;;;;;;;;;;;:;11111tttfffLLLLLLLLLLLLLLLLLLLLLLLCCCCCCCCCGGGCCCCGCGGGG
LLLfLLffttt111iii1fLLLLLft11iii;;;;;;;;;;;;::;i111111ttfffffLLLfLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCGGG
LLLLLLLLfffttt11iii11tfffft11iii;;;;;;;;;;;;;::11iiiii1ttfffffLLfLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCGGG
fLLLLLLLLLffftt1111iii1111111iiiiii;;;;;;;;;;;:i1111111ttfffffLLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCCCCCC
tLLCCLLLLLLffftttttt11111111iiiiiiii;;;;;;;;;;;i111ttttttffffffLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCCCCCC
ttLCCCCCCLLLffftttttttttt1111111iiiiii;;;;;;;;ittttfffffffffLLLLLLLLLLLLLCCCCCCCCCCCCCCCCCCCCCCCCGGC
fttfLLLLLLLffftttttttt11111111iiiiiii;;;;;;;;i1ttttttttfffffffffffLLLLLLLLLLLLLLLCCCCLLCCCCCCCCCCCCC
,,...,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:::;;;ii;;;;;;;;;;;;;;ii1
..........................................,,...,..,,.,.,,,,,,,,,,,,,,,,,,,,,,,:::;;;;;::::::::::;;;i
.................................,,,,..,,,:,,,,,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,:;;;;;;;:::::::::;;ii
............................,,.,:,..:,,:::,::,,,::,,,,:,,,,,,,:,,,,,,::,,,,,,,,:::;;;;;;::::::::;;ii
.....,,,,.....,,,.,....,::,,,,,::,,,i;:;;:;;;;:ii;;::;;;::;;:ii;;i;;i:;;;:::,:;::ii;;;;;ii;;;;::;;ii
....,,,,,,,,...,,,,,,;ii1i::::i;;;;ii;1t1ittttttftftffffLLLLfCLLLCLLLLCLLLLLLLLLLLffffffffftttt111t1
..,,,:,,:,,::;;ii;;;i1t11ttttffLLLLLLCCCCCGGGGGGGGGGGGGGG0000000000000000000000000000000000000000GGG
:i1::i11ii1tffLLLfLLLLLCCCGGGGGGGGG00G00G00G0000GGGG0GG000000000000000000000000000000000000000000000
fLLffLCCLCCGCCGGGGGGGGGGGGGGGG0GGGGG0GGG0GG000000000000000000000000000000000000000000000000000000000
GGGGGGGGGGGGGGGGGGGGGG0G0000000000000000000000G00000G0G000000000000000000000000000000000000000000000
GGGGGGGGG00G0G0GG0GGG0GG0000G000000000000G0GG000000G000000000000000000G00000000000000000000000000000
GGGGGGGGGGG0GG00GGG0G0GGG0GGGG0G0G00G0G0GG00GG0000GG000G0000G0GG000G00GG0000000000000000000000000000
GGGGGGGGGGGGGGGGGGGGGGGGGGGG0GGGGGGGGGGGG0GGGGGGG0GG00G000G00GG00G0G0GGG00G00G0G0000G000000G00G00000
GCGCCCGGGGGCGGCCGGCCGCCGGGGGGGGGGGGCCGGGGGCGGGGGGGGGGGGGGGG00GGGGGGGGGGG000G00GG0GGGGG0GG0GG000G0GG0
CCCCCCCCCCCCCCCCCCCCCCCCCCCCGCCCCCGCCGCCCCCCCGCGGCGGGGGGGGGGGGGGGGGGGGGGGGGG0GGGG0G0GG0GGGG0GG0GGGGG
CCCLLCLCLLLLCCCLCLLCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGG0GGGGGGGGGGGGGGGGGGG
LLLLLLLfLLLLLLLLLLLLLLLLLLLLLLLCLCLLCCLLCLCCLCCCCCCCCCCCGCCCCGCCCCCGGCGGGGGGGGGGGGGGGGGGGGGGGGGGGGCG
LfffLfffffffffffffLLLLLfLLfLLLLLLfLLLLLLLLLLLLLLLLCLLLCCCCCCCCCCCCCCCCCCCCCCCGGCCCCCCGCCGCCCCCCCCGCC
ffffffffffffffffffffffffffffffffLfLfffffLLfffLfLLLLfLLLLLLLLLLLLLLLCLLCLLCCCCCCLCCCCCCLCCLCCCCCCCCCC
ftttttttttttttttttttttttttttftttffttfffffffffffffffffLfffffffffLLfffffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
1ttt1t111ttttt1tt11tt1tttttttttt1ttttttttttttttttttttfftftffffftffffffffffffffffffffffffffffLfffffLf
1111111111111111111111111i111i1111111111111111111111ttttttttttttttttttttttttfttftttttttttttfffffffff
iiiiii11iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii11i1111111111111tt1111111111111ttttttt1ttt1ttttttt
`,
  'Three-headed Dragon': `
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,::::::::::::::::,,,,,,,,,,,,,,,,,,,,,,,,,,,:::::::::::::::::
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::::::::::::::,,,,,,,:,,,,,,,,,,,,,,,,,,,,::::::::::::::::
:::::::::::,,,,,,,,,,,,,,,,,,,,,,,,,::,,,:,,,:::::::::,,,,,,,:;:,,,,,,,,,,,,,,,,,,,,,,::::::::::::::
:::::::::::::::::::::::,,,,,,,,,,,,,,;;:,,,,,,,,,,,,,,,,,,,,;i,,,,,,,,,,,,,,,,,,,,,,,,,,::::::::::::
::::::::::::::::::::::::,,,,,,,,,,,,,,:i;;,,,,,,,,,,,,,,,,;it:,,,,,,,,,,,,,,,,,,,,,,,,,,::::::::::::
::::,:::::::::::::::::,,,,,,,,,::,,,,,,:iii,,,,:,:,,,,,,,,;11;,::::,::,,,,:,,,,,,,,,,,,,,,:,::::::::
::::,::,::::::::::::,,,,,,,,,:;:,,,,:,,,ii1i,:,;;,;,::,,,,;11i,::::,:::,i;,:::::::,,,,:,:1:,::::::::
:::::::i;:::::::::::,,,,,,,:;1;,:,:,:,:,ii11,;;i;:i;;i;;::1ii1:::;::::::;1,::::::::::::,i1,:::::::::
::::::::1;;::::::::,:::::,,i11:,::::,:,,1iii:ii;;tiii;i;;i11ii;,;;:;:;;:;i:;;;;::::::::::1;,::::::::
::::::;:;iii:,,:,:,,::::::,ii1i,:::,,;:,11iiii;;ft;;fi;;;1t;ii::;;:;;;;:1:;;;;;;;;;:::::,11:::::::::
;;;::::::ii1;;:i;:;i,::::::;iii,::::,ii;;tf1i1i1t1;i1ii1tfiii,:;1;:;i;:1ti::;;;;:;:i:;;,;tfi:;::::::
;;;;:;:::i;1;;;;;;1i;:::::i;i11:::;,,;i;iffft111iiiii1tf1;it;;ii;:::;:ittf1;::::i11;;i:itfft::;::;;;
i;;;;:;,;iii;;i;;ti;1i;::;ii11i:,i:,::;;ii1tfftt1iiiiff1;;11i;i;;;;:;:;tffffti:if1ft;1tfffft;:i;;;;;
;i;:::i::ii1iii;1f1i1ti;;1t1;i:,;i;::;i:i1::1i1ft:i1;ii1t,i1ti:i;:;:i;,;tfttffftt1ffttttttti:i1:;i;i
;;::;:i1;;fft11i111iii;1tfff1::;1i::;;;itt1:::,;iii;1;:,;it1i;;;;;:,iti::;1LLttff1tttCG0f:;;tt1;;;;;
:::::::11itffftt1iiiiitffff1ii1i;:::;i:;1111i1;ii:1ti;1i1i:;ii:;:,,.,iffiLti@@C1fttt@@@81:Cit1;;:,::
,::::;;;;ii;1tffft:11;fttt:;t1;;;;:;::;:i;;;;;itftif;tft;iii1i,;:,,;ii11tG1t@@@1ttt1C8@@80Lii;1i;i::
,::;;::;;t1::;;it1:11;i;:;:ifti,:,::,:::i1i1ii;i1tt;ttt:i1t1i;,,,,,:;1111L080Gt11i111tffftt11;;;;;::
::;;:;i:1ttti;1:;;i111:::11tii;:;;::,:,::ii11iiiiiiiii;;;11i;;,,,,,,;:1ffttttttft1ttffttt1iii;:;;:;:
::i;i;;;;iii;:i1t1;1ti1tt::;i1i:::,,,,,i:;iii;11ittfti1;;11i::::::,;;iii1t1ttitffttfftifLft11;:;i;;:
,;iii;;:;iiii;,;tff11tft:,i1t1i,::,,:,::it111i;i;1111ii;11t;;;,:::::,i:;11tttit11t111iLffCCf;;i;1i,:
:i;i111;;i1tf1,.;11;;ii:,itt1i:,,::::,i;;11i1t1it111tt;i11ii::::::::::::;t1t1tttffffft1CLCCL:11;1i::
:i;ii111i:;i11;,i:.,,.:iiii::,,::::::::;1tt11i11i11111111tt;;::::::::::::::,;1t111iii1;iffti;ft;i1,:
:;;111111iiii;;ii:,:::;;;,,::::::::::::;1i11tttttttttttt111;i::::::::::::::;1i1iiiiiii11ii11;f1;ii::
:;;i111111t111:i1i1tt111::::::::::::::i;1111iiiiiiiiii11ttt;::::::::::::::,;1it111111111ii11;f1;11,:
:;;i11111111i11;ii111i;i,:::::::::::,:;;1i11tt11ttttttttt11;;,::::::::::::,i11ffffffffft111i1t;;11::
;;;111111111111ii1111i:,:::::::::,,,,::i1t1tt111111111tttt1;;,:,,,,,,,,,,,,titt111111111i11;ft;i1;::
:;;11i1tt111111111111i;;,:::,,,,,,,,,;;i1iii1111111111iii11;;,,,,,,,,,,,,,:1ifttttttttt1111;f1;;1i.,
:;;;tt1111111111111ttii:,,,,,,,,,,,,,:;;tttttt11ttt1ttttfft:i:,,,,,,,,,,,,1i1t111111111ii1i1fi;11;,,
;;;;ii11t11ttttttttt11;;,,,,,,,,,,,,,:;i1ii1111111tt1111i1i;;,,,,,,,,,,,.;1iffffttfffft111;tti;1i:,,
,;;;i1111111111111111t;;,,,,,,,,,,,,,,;ittttt11111tt1ttttti;;,,,,,,,,,,,.1i1t111111111iii1;t1;ii;:,,
::;i;1ti11111111111111i::,,,,,::::::,;:i1iii111111i11111i1i;:,,,,,,,,,,.:1ifttffffffft111iifi;11;,,,
,:;;i;1ii1tt11tttt1111t;,:::::::::::::;itttt1111i11111tttf1;;,:,,,,,,:,:1;ttt11111111ii11;tt;11i;:,,
::,;;;111111111111111111;:::::::::::::;i1ii1ttttttt11tt111i;;,:::::::,,1i1fttttffffft111iift;;1;:,,,
::,;;ii11i111111111111t1i:::::::::::,i;ittt111iiii111111tf1;;,::::::::1i1ft111111111111t;1f;i1i:,,,,
:::,:i:ittttt111111111i1ti;::::::::::;;;1i11tttttffttt1t11i;i::::::::11iftttfffffft11i1iif1:i1:,::::
:::,::;;11111111111ttti1111;::::::::::;;1tt11111iiiii111ttt;::::::::t1iftt1111111111111;tt;i1;;:::::
::::,,:i;ii11tt1111i111tt111i::,:,,,,:1;i111tttttttttttt111i::::::,iiifffffffffft1iii1iit;i1i:::::::
:::::,::;;1111111ttttt11111tti;,,,,,,,;;it1111iiii11111tttt;;;,,,,1iitttt111111tt11111;tt:ii:;,:,,,,
,:,,,,.,;;i11111111111ttt1111ii;:.,,,.;;;1111tttttttt1111ii1::,,,1iittttttfttt11iii11;1fi;1;;,,,,,,,
`,
  Stonks: `
:;:::;;i1f1:;;:::::::::::;;;iiiiii;;;;iii1;;;;ifti;;;i1;iiiiii1L1iftiftiitf1i111111111111ttttttttttt
ii::::;::i1;;;;:::::;;;;iiii;;;;;;i1iit1tii;;;tfffti;;1iiiiiiiitftf1i11iiiiii11111ttttttttttttt11ttt
i;ii;::;:::;;;;i;;;;iii;;;;;;;111;t11it;tti;;iftttt1i;i1;iiiiii;iiiiiii1111tttttt11111111111111ttttt
1:;;;:::;;;;;;;;;i11tt11tffftiit111t1ttt;f1i;;;;;;;;;;;1i;iiiii11111111111111111111111tffft111111ttt
;::::;;;;;:::::iffffttttLLCCLLtii1tt11111tiii:;;;;;iiii11i1111111iiiiiii11itt111fffLfLGCLfLt1111111t
;;;;;;;::;;::ifCCCCLft1fffLLfLCf111;iii;iiii1iiiiiiiiiii1iiiiiiiiittf1i1i1tLfttLCLCCCCGGCfft1111111t
;:;iiii;::;;,iCCCCCft11fft11tLf1;;;i;;iii;;;;1iiiiii;iiii1iiiiiiitLitL1i1tffCLLCGCLCGCCCLfLL1111111t
1i;i11iiii:;:1Lfffttt1itLLfLLft11;;::::;::;i:ii;;;it1i;ii1iiiiiii1L1iLfitfLLCCfLCCLLCLCCCfft11111111
;ii;i1;;;i;:;ttttt1111i1ffLfLfLLi:;ii;1iii1ii:i;;;1ffftiii1iiiiiiifLiffift11fffffLLLLfffLLt111111ttt
:;i;;;;;;;;;;i11111iiii1tttfttt1::iii1i11iti11;i;itt1111i;iiiiiiiiittt1i11i1tffffffffffffLtttttttt11
;;::::::::::::1iiiiiiiii1tttii11i:::1i:t;111it;;i;;;;;;;iii1iiiiiiiiiii1i11tfffffffffffffLtiiiiiiii1
;::;::;;iiii;:;1ii;;;;ii11tt1t1:1;;iiii;;i::;;:;i;iiiiiiiii1iiiiiiiiiiiii1tftttttttt11ttfLft1iiiiii1
:;:ii;;i:i;;ii;111i;;;::;i1fLf;::;:;:;;;;;;;;;;;ii;;;;;;;:;;i;;;;i;;;;;;1fftffffftft1fi1f1tLtiiiiii1
;:;:;i:;;;;::;;it11iii;::,:;;;;;;;;;;;;;;;;i;;ii;i;:;;;;;i;:ii;;1Lt;;;i1ffLtfffft1Lt1fti;itftiiiiiii
:;;;::;::;;;;:::ittii1ii;:;;::::::iii;;1i11111111ii:;1tfft;;;i;;;1L;;itfLfLftft1L1Lf;tC1ttitL1iiiiii
;::::;;;;::,,,,..,it11ii1C1::::;;;;;1i:;;t;1111titi;::;1t;:;:ii:;;ftitftfffLttttfiit1t1i1t1t1iiiiiii
:::;:::::::,,.,,...iCCtfG@t,:::::::;1i;ii1iiii1ii1ii:::::::::;i;;;i1tttttttt1iiiiiiiiiiiiiiii1111111
:::,,,,:::,:,,,,,,,.:LLLfLt,::,,::::;;;;;;;;;;;;;;;;i;;;;;;;;;ii;i1ttttttft1iiiiiiiiiiii1ii111111111
:;:,,,,,,,,,,,,,,,,,..:1tfi,:::,,,::::::::::::::::;:;i;;;;;;ii;iitttfttttt111ii111ii11111ttt1t1iiii1
;i:,,,,,,,,,,,..,::,,,,,iCf,:::,,,::,::::::i1:1i;;1i;;;;;i11iiitfffLCLffttLtfffftLLtLffLttttLf111ii1
iii:,,,,,,,,,,,..,::,,,,,;t,::::,,:,,,:::;::ii;ii11i1iii1tLLLfLCCCCLCGLfffCfLGLLCCCLCCLCLttLL11111i1
;;i;:,.,,,,,,,,,..,,,,,,,,,,::::,,:,,,,::::;:i:;;i;i111ttLCCG0000000000G00000000800000G0GCCGLftt1111
::ii;,,,,,,,,,,...,,,::,,,,::,,,,,:,,,,,:::;;:::;;;;i1tLCG0888@@@@@@@@@@@@@@@@@@@@@@@@@@880GCCLftt11
:;ti::,,,,,,,,.. ..,,,,:::,,,:,,,::,.,,,:::i;:i;;;i11fLCG8@@@@@                        @@@@88GCLft11
:;1ii::,,,,:,it, ..,,,,,,::,..,,,:::.,.,,,::ii1111it1CCG0@@@@@@                        @@@@@@0GLft1i
::;1ii:,,,,,,:tt:.,,,,,,,,,:,...,,,,. .,,,:::it1i11t1LCG0@@@@@@                        @@@@@8G0Lft1i
:::i1i;::,,,,,.,:,,:::::::::::,,,:;1;,..,,,,:,;t1iii1tfC0888888@@8888888@@@@@@@@@@@@@@@@@88GCG0Lft1i
;;::;;i;::,.,,,,,,,:,::::::::::::::L0Cf:.,,,,::ifttii1LCGGGGGGG00GG000GG00000000000000000GCCCCCf11ii
;;;::;;;;:,,,,,,,.,,,,,,,,,,,,,,,:,:fLfi,,,,,,,:ttLLtfLLCGCGCCGGGGGCCCCCCCCCCCCCCCCCCCCCCCCLLft11iii
t1;::;::;;:,..,,,,,,,,,,,,,,,,::::::,,,,,,,,::,,:i1ffffLLLftt1tfLLtttftfLtft1ttLttfffftffft11111iiii
;1tt1;.,:::,,.....,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::::i1ttftii;iiiiiiiii1iitittiiitti11tf1f11f1ittt;iii
,:;itti.....,..............,,.,,,,,,,,,,,,,,,,,,:i;:i1t1i;:;;;;;;;;;;;i;;ii;ii;i1;;ttiittif1t11fi;ii
:::::ii.,. ...   .,::;;;;:  .......,,,,,,,,,,,,,;ii;;ii;ii;1i;::::;:::;;:::;:;;;;;;;;ii;iiii;iiti;;i
;;;:::,:..,.   .   ..,,:::..............,:,,,,::::;;;i;;;ii;1i;::1t1;::;:;1;i:::;;::;;;::;;;;;;;;iii
::;:::;:,,........         .............,;;;:,,,,:::::::::::::;;:::;;::;::1;ti::;t;;t;1ii1ii;ii;;;;;
::;:::;:,...............   ......,.......:::;::::::,:,;ii;:;:i:;;:;::::;;:;;;;;;:ii:iiit1t:t1ii1t;:;
:::;;;;:.................   ....;1,.,,,,,:ii:;:::::::::;;i;;;1i;;:;111i:;;;;;;;;;;;;;;;;:i;ii;11i;:;
:::::::,........................;i;,,,,,,,:;::;:::::;i;:::;::;:;;;:;ii;:;;:;11;;;;ii;;;;;;;;;;;;;;:;
`,
  'Disappointed Black Guy': `
                                                             ;::;i:;1t11i;;;::::::::;;;;;iiiit@@@@@@
                                                             ;;;;ii;i111;;::::::::::::::;;;iii0@@@@@
                                                             i:.;i:;1t11;;;::::::::::::;;;;iii8@@@@@
                                                             1,:;i;:i;;;;:::,,,::,::::::;;;iiiG@@@@@
                                                             i,::;;;i;,,:;,,,,,:::,,::::;;;iii;G@@@@
                                                             i;,::.:;;,:;i,,,,,,,,,:::::;;;;ii;G@@@@
                                                             i::;;:;1t;i1;:,,,::::::::::::;;i;18@@@@
                                                             ii::;ii1i1ti;::,,,::;:::::::::;i10@@@@@
                                                             1;:;i11i,;i:,,,,,,::,,,,,,,,:;;t88008@@
                                                             ;:11i11i,:1i:,,,,,,,,,,,,,,,:::;1iii1fG
                                                             i;i1iiiii:;ii;;::::,,,,,,,,,,,,::::;;:1
                                                             i;;ii;;i;:;1ii1i;;::,,,..,,,,,,,,,,,,,i
                                                             i::::,,,,..1ii11;:,,,,........,,,,,,,.;
                                                             i::....... :i::,,.,,,,..............,.;
                                                             ,.,...     .;;:,,,,,...  ............ :
                                                             :,,..,,..,,,,:,,,,..........,,,,:;::::i
                                                             1;,;i:111t11i:::::::::::;;;ii111f888888
                                                             :;i;ii:1111i::::::::::::::;;;i11iG@8888
                                                             ii,;iiiit11;;:::::::::::::;;;ii1iC@8888
                                                             1,,;i,;11i;::::,,,,,,,::::;;;;iiiG@8888
                                                             ;:;;ii;i:,,::,...,,,,,,,:::;;;ii1C88888
                                                             ;,,::.;i;,,:i,.,,,,,:,,,:::;;;;i1if@888
                                                             i:,;:.;i1:,1i,,,,,,,,:::::::;;;i1if@888
                                                             ;;::i;iit1tt:,,,,:::::::::::::;iii08888
                                                             1i,:i1iitt1;:,,,.,:::::,,,,,::;;10@@@88
                                                             ;:;ii1111;i:.....,,,,,,,,,,,,::;CCLLC08
                                                             ;;11i1iiiiti::,,,,,,,,,..,,,,:::;;;;iif
                                                             i;;1ii;ii;;:,,,...........,,,,,,,:::::i
                                                             i;;;;:;::,;:,;;;;::.............,,,,,.;
                                                             i;:,,.... :t;i1i:,,...................;
                                                             :,,  .     ,;::,......       ........ :
                                                             :,,,,,,....,;;::::,,,,,,,,,,,,,,,,,,,.;
`,
  'Boardroom Meeting Suggestion': `
@itffffffffffffffffffffffffff1tffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffttffffti@
@;G88888888888888888888888880G@@@@@@@                                                      8C8888G;@
@;G8000000000000000000000008GC@888888                                                      8L8008G;@
@;G80000000000000000000000000L0@88888                                                      CG8008G;@
@;G800000000088888008000888000CG088888888888888888888888888888888888888888888888888888880GCG80008G;@
@;G8880000000080000808880G088880GGGGG@0G0G00000000000000000000000000000000000000000GGGGGGG0800008G;@
@;CG000088800800888088L;;:;11LG8800GL0L0000000GG0GGGGGGGGGGGGGGGGG000000GGGGGG0000000008888888888G;@
@;;;1111tLG8000000000i.,,,..,.i808GfCG8888888888888888888888888888GfLLLG088888888888888088Lff111LC;@
@:,;;iiiiiif080000888fi:t;1iifG80000880000000000000000000000000008G::::,,L800000000000080i.,.,,,,:;@
@:,;:;iiiii;f808800GCftLtff1C@808888000000000000000000000000000008Ctf1L1,i80000008888808f :f:,,,,.:@
@:,;::iiiiii108Gt11i;iffifi:1f080800080008888888888008880000000008GitfLL1C808888800000G0L,:LL1t,,.:@
@:,;::;i;::,i08L;11;i;:i1i::iit800000000000000000000000000000000808LCLtft088000GGGGGGGGGGt,tCGC:.;;@
@:,;::::;;i:iG0Li11i1i;;;:;1iiiL80888888888888888888888888888800008Gt:tf;ifLLCCCGGGGGGGGGt,,fLf;,:;@
@:,:::;i;i1;LGGti11;iii:;i1;,i1iG00000000000000000000000000GGGGGGGt1:;t;;i11i;ii1tLGGGGCti;ii1t:.,:@
@:,;:;iiiii1GCG1i1i:;ii::;:tt:1i1CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCii;1t;;11tti;;ittGGGG1:;;i;t1:::;@
@:,::;;;iiiLGGG1111;::::::10Gii1i1CGGGCCGGGGGGGGGGGGGGGGGGGGGGGGGL1iiL1i1i:1t1;;ii1GGGLi;ii;Ct;iii;@
@:,:;i;i1LCCCCL;;;:::;;;i;tfft:;iitLLLCCCCCCCCCCCCCCCCCCCCCCCGGGGL:;;;;i1i;;tti;;;1GCGti;ti:i:i1ti;@
@:,:;;i;;fLCGGG;iLLt1ttttttttti:fCCLftfL000000GGGGGGGGGGCCCCCCCCCf;ii:;;;::,:;;::;1GGG1i:ii::;iii::@
@:,;::;ii;;itLCffLCLtffLCCCCCCCCLfffLLLCGGGGGGGGG00000000000000GGG0GGGCCCLLfftt11itCCf:;::::::::;::@
@:,;:::;iiii;1LLLfLLCG000000000000000000GGGGGGGGGGGGGGGGGGGGGGGGGGGG00000000000000GGGGCCLLfff111i;:@
@::;::;:i1ii1i1fffLLLLLCG000000000000000000000000000000000000000000000000000000000000000000000000C;@
@:,:,::,:i;;;;;11111ttffttfLCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGL:@
@f1111111111111ttttt11ttttt1tfttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttftf@
@1fLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLffLLLLLLLLLLLLf1@
@:G88GGGGGGGGGGGGGGGGGGG0888888888888888888888888888888888888888888888888888888888888888888888888G:@
@;G0C00              880GC000008GCGGGGGGGGGGGGGGG0000000000088GGCCCCCCCCCCCCCCCCCCCCCCG0800000008G;@
@;G0L88              8888L08008GC88            80C0800000008GfCG008888888888888888800GCLC80808008G;@
@;G8GGGGGGG0GGGGGGGGGGGGCG80008GC88            80L0000000080t8@8888               888888fC8088008G;@
@;G8880000GfL80000000000880800080GGCGGGGGGGGGGGGG8800008008Gf@88888               88888@Gf8080008G;@
@;G80088888GtC888008888880808880888CtG8000088GCGCLC080080088LC08888@8888888888888888880GfG8088008G;@
@;G8000000080G00001:;;i1G80080000008Cf0800801,.,,,,i080800088GCCCCCC@CCCCCCCCCCGGGGGCCCG080808008G;@
@;C808800080880000ti;i, i8000080080088080081 ;t:,,,.;08000000888000LLLL80000GG0LttfC0888808008008G;@
@;LGG008880000008GiLffLi1800088800000080008f.iLt1t:.:080000000008888CLtC8888G1;,...,;iC8080008008G;@
@;LGGGGG0000080080ti1tCt08000000000000000008;;L1tG:.L80088000000000080GtL8008C:if1:;: i8000008008G;@
@;LGGGGGGGGG00LC88G1itffL888808000008800008L:.iLLt,,C8800080000800800888888888GCLCGG;:f8000008008G;@
@;LGGGGGGGGGLt1L0GLi;tfii1LG08000000000000Gt::;ii:.:itC80080000008000GGCCLCLLCtGGLCtLCf0000008008G;@
@;LGGGGGGGGCi1ffL1i:;ti:i1111G80888888808L;ii;;:i;::i1iL80000000008Gt;;tCCCLtffLt1fLGL00000000008G;@
@;LGGGGGGGGGL1f1fi1i1C11itit1fGGGG0000008fi;iii0fiii:;1108000000808Li;L80G0Gffft1fCLGC08008888808G;@
@;LGGGGGGGGGC;;11;ii;i;i1i;t11GGGGGGGGGG0fi;ii:;:;i1:it1G8000000808f;CCftf00Gf1tLfCGLGL0800000000C;@
@;LCCCCCCCCCGf;1i:;i::;ii;;11iCCCCCCCCCCGt;;;i;:;;;;:;1ifCCCCCCCCCCitLLftLCLLffff1tCtCGLCCCCCCCCCf;@
@;CGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCGGGGGGGGGGGGGGGGGGGGGGGGLLCCCCLftfLLf1tti;tLfCGGGGGGGGL;@
@;C0000000000000000000000000000000000000000000000000000000000000000000GGCCCLLftf1fCCCCCG000000000C;@
@:LGCCCCCCCCCCCCCCCCCCCCCCCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGCLLLCGGGGGGGGGGGGGGGGL:@
@LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLffffffffftfftffffffffffftttffffffffffftttffffftttftf@
@GCCCCGGCGGGGGGGGGGGG00000000000000008088888880it11tfffLLfLLfffftttffffLLLffffffffffffffLLLLLLLLLf1@
@:.,,,,,,,,. .............,:::::::::::::::;;;;;:;;::GGGGG8008888800GGGG0880088880000000008888880@0:@
@;:;;;;;;;:,,,,,,,,,,,,,,,,:iiiiiiiiiiiiiiiiiii1iii:0000L8L:i1tfG0G0000C0888888880000000000000000G;@
@;;iiiiii;,,,,,,,,,..,.:..,iiiiiiii1111111111111111:G000L8L,:,,.LG;1ttGGG800000000000000000000008G;@
@;;iiiii1; .,..:1,;1f1:1,i1111111111111111111111111:G000L8CttttiCGC00CCGG8000000000000000000088880;@
@;i1111111;:fi.itCftLttii11111111111111111111111111,LGGGL8CG000GCGG88GCGG888888888000G00888888888G;@
@;i111111111it1LfCt1ftLi111111111iiiiiiiiiiiiiiiiii,L000080GGGGC00CGGCGC088888000GGGGGGG088888888G;@
@;i1111111iiittLCii1iitiiiiiiiiiiiiiiiiii;;;;;;;;;i,tGCCC00GG000000GGG0CG00GGGCCCCCCGCGGGG08888880;@
@;;iiiiii;1iLiifffL11t::;;;;;;::::::::;;;;iiii1:;;.,::::;0GCGG0GC0ffLfLCfCLLCCCCCCCCCCCCGCCG08888C;@
@::;::::::1ii:;;it1it1:;iii1111ttttfffLLLfffffLttfti,;;:;0GC8080C0f08CfC1f;LGCCCCCCCCCCCCCCCCCGGGL;@
@i:;iiii1i1ttttftfffffffLLLLLLLLCCLt1i11fG00000888@f.;::;0GG8080C0fCGfff11it1CCCCCCCCCCCCCCCCCCCGL;@
@CfLLLLLLLLLLLLLCCCCGGGGG000000f1fti:::::;t10800008L.;;;i0GC0GGGG0CCCCGLLGLfffGCCCCCCCCCCCCCCCCCGL;@
@;LGGG00000888888888888888880000t..,,,,,,,,,f800008L;GG008000000080CftLCLCCGGCCCCCCCCCCCCCCCCCCCGL;@
@;G88888800000000000000000000008Gt1CLffi::,::C80008Li800G00CLLfii8t1ttfCLGCCCCCCCCCCCCCCCCCCCCCCGL;@
@;G8000000000000080880000880808080CLC0C0G;:,i800808C;GG0CG01tt1;10L008CCCGGGGGGGGGGGGGGGCCCCCCCCGL;@
@;G800000000000000000000000000008CGLLC001fC1C800008G;888GG0fGGG0C0LGGCCCCGGGGGGGGGGGGGGGGGGGGGGGGL;@
@;G800000000000000000000000888888CC00CGLfCfG88888880;088GG0C0GGGC0G0008C088888888888000000000GGGGC;@
@;G888888888888888888888888000GGCttLLftiLLfGGGGGGGCL:GGGCG0GGG0008GLfitC0@88888888888888888888888G;@
@:G8000000GGGGGGCCCCCLLLLftttt1111ftttttffffLLLL;tffC0088880GGGGL01:itfC0@8888888888888888888888@0;@
@1fffffffLLLLLLCCCCCGGGGG0000888888@@@@@@@@@@@@@iL800GCLfC0fGG00LGfG00CLG888888888888888888888888G:@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Ltfft1111tftfffftftfftttfffffffffffffffffffffffffft@
`,
};
