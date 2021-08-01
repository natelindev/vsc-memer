/* eslint-disable @typescript-eslint/naming-convention */

export const getRandomMeme = () => {
  const meme =
    Object.values(memes)[Math.floor(Math.random() * Object.keys(memes).length)];
  return meme;
};

export const memes = {
  'Distracted Boyfriend': `                                         .:i:,,.                                
                                      .:itLLLCCf.                               
                   .:,...             ;GGfi:iL0C1                               
                  :1t:,;11;.          .1Lt1t;:1i1,                              
                 1Li,...:tCf:           ifii;;itt;            .:;;::,           
                :0L;:,,::;C8L.           :ttiifLi;..         .;:;LGGGt.         
                fGtff;;ttit08i            .ttfCi,,::..       ,ii:iG888t         
               ;Gf;;;:::::1LGC,            .,t1:;;iii;...    1ii;:1G880,        
              .C8Gti1t1i;ifLG0i            .1ti;tt11fLi:::  .LC1i;;t880;        
              i888Gt1iiiit0@88G:           ;fff1tf1;tLt1;;, ,G8LLfi:ifLi.       
             .C8888Ctii1fL88888C,          ;LCf;:t1;:fCftt; ,G88@G;....,,       
             :G88@8CLftt1fG88880i         ,tLCGti1L1:i11tL1 .t00C1,.,::..       
             ;C80GLft1iiiiitCG00i         ;LfC8Ci:ii::1fLCt. ;Lt;i:,,;i,..      
           .,itft1iii;;::,,:;1tti,.       tCfG0Gt1ttiittfCf,.,:.:1:,:i;:,.      
         .,;111ttttt1111111111111i,.     .1ftLG008L:::1tfffi,:,,;1::;i:::.      
        .i;i1111ttttttttttt1111t1:,,.    :fCLCG08G1::1LLCCCf;i::ii;;1i:;:.      
        ,ti1t1111tttttttt11111tt;,,::    ;ftfGCGCLi:;ff1tLCf11,,;;;1t;;i;.      
        ,t1ff1111111tttt111111tt;,:;i.   iLCGCGCGLi;tCCfCCL1.,,::;iti:;i;       
        ,ftff11111tttt111111111ti::;i.  .LGCLtttCti1LLftfff1 .:;;if1:::;:       
        ,ftfLffftttttttttttttttti::;i. .1GGCfLfLfiiLGft1ftt; ,ii1ti,,,:;,       
        .11tCCCLLLLfffffffffffLL1::i;  1Gff11ffCt;t0GfLtfft,,i1t1;:...,:.       
        .11tCLCCCLLLLLLLLLLLLCCC1:;i: ,Cf1LfCL1t1:iCL1t1iti;1tt1iff,....        
        ,t1tL:tCLLffffLLLLLLLCCCi::i,,fGtfLLG0Cf1itGGLLLtLtf1fCCG0G1.,,,,       
        :11tt.tCLffffffffffLLLCCi,,;.iLt1C08888GfffLLtff1ftf,;0GGGGCfLCCf.`,
  'Drake Hotline Bling': `      .,,::,.                                                                   
    .:;i;;ii;:.,,::ii::::.                                                      
   ,::::::::;ii;::::,,,:;1t:.                                                   
  .,..,::,,::;i;,:i;, .,:;fCL,                                                  
  ,,,,:::::;;:::;1ff1,:;;;ifGf.                                                 
  :ti;:,::;;i;,:;tft1::;::;1LL.                                                 
   ;i;:..,,:::.,1ffff::ti:,;tf;,                                                
    ,ii,,,:,,.  ;LLCC1;;,:;tC0GCfi.                                             
   .,:;,.....  .,1LGCff1.,;i1ffCGGL1,                                           
   .::.. ...  ...:fLCf1:.,:;;;itffLGCt,                                         
    it;;,...  ..,:i1fi,.,:::::;i11ttfGCi                                        
   ;Lt;:;:,,::;:::,,,...,:::,,:::;;ifCLf.                                       
  .ff1;,::;ii;;:,,,,,.,,,:,,,,,,,,;11tt1.                                       
 .ittt111i;;:,,,,,,...,,,,,,,.,,,,:::,:i.                                       
:i;itt11;,,:,,,,,,...,,,,,,:,..,:,,,,,,:.                                       
,;i11i;:,,,,,,,,.. .,,::::::,,..,:,,,,,,                                        
 ,i1;::,,,,,,,.,,...,::,,,,,,,,...,:,,,,                                        
  .;;::,,,,:........,::,,,,,,,,,...,,,,,                                        
    ,:::,,.:;,,,....,:,,,,,,,,,,....,,,,                                        
       .   .1;:,...,,,,,,:::,,,,,...,:,,                                        
            ..        ,:;;:.         .                                          
                    .tCGGGCL1,                                                  
                   .ffitCfi1ft.                                                 
                   :GLtfCfiiif:                                                 
                  .fC11;::itLL:                                                 
                 .:ti:i;::,,1ti.                                                
               ,;i;:.........:,.,,.                                             
             .;fLf;;i,.   .,,,:,..,,.                                           
           .:tf1i:.,;;:,,.,,,:t;..,;:                                           
        ,;1LCf;::,..::::,,.,:i1ii::;i                                           
      .;fCLfti::,,i;;;:::,,:::::iiii:                                           
     ,fGLfti:::,.1G0GCLLLL;,,.,:;iiii;,                                         
    ;CCftLL1i1i:,L0888888f:,,,,i1i;;i11:                                        
  .1GGfifLfttt1i;f0888880tii;1tfi:::;;ii.                                       
  tCff1;tffiiiii;t08GC88CfftfLf1::;;:;;;.                                       
.1GLti;:ifftt111;10LiC88t1ttttffi;;:;;;:                                        
fCf1i;;:iCttffft;iLCCCCG;;iitLLLti;:iii:                                        
ft1;;;::1Lftt1i;:1C000GG;;;,:ff1;:iti;;:                                        
ti::::::1fttti;,:tCG00GC;::::,,,,,;tt1i;                                        
fi:,,,,iCf111ii:;iCG00GL:::,::,,,:;i1i1i`,
  'Two Buttons': `CGGGCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCGGGGCCCCCGL.                 
C000000000000000000000000GGGG00000000000000000000GGGCCC0000000L.                
C0GGGGGGGGGGGGGGGGGGG00000000000GGGCCLfft11ii;::,,..  .iG0GGGG0C,               
C0GGGGGGG0000000000GGGCLLft1i1tGf:,.                    ;G0GGGG0G:              
C00000000GGCLft1i;:,..         :G1                       ,C0GGGG00i             
LCCft1i::,.                     ,G1                       .L0GGGGG01            
Ci:                              :01                        t0GGGGG0t           
CC.                               :01                        10GGGGG0L,         
L0f                                :Gi            ,i1ii;:.    i00GGGG0G:        
C00t                                :Gi          :t1111111,    ;G0GGGG0G;       
C0G0i                                ;0i        ,;i1111111i     ;G0GGGG001      
C0GGG:                ,;;;;:,.        ;0i       .iii111111;      ;G0GGGGG0t     
C0GG0C,             .1t111111i:        i0;       ,iiiiiii:.       :G0G000G0t.   
C0GGG0L.           .;ti11111111;        10:        ,:::,.        .:fGGGCCLLG;   
C0GGGG0t           ,ii111111111i         f0:  .t1,          ,:itfLCCLCCGG0G0i   
C0GGGGG0i          .;iii111111;.         .LG, .G@@0L1;,.:1fLCCCCCCGG00GGCLLCi   
L0GGGGGGG:           :;;;i;;;,            .CC.  iC8@@@@0CfLCCCG000GCCLLCGGG0i   
L0GGGGGG0G,            .....              ,i0LtffLftfC@@@0tC0GGCLLCCGG0GGCG0i   
L0GGGGGGG0C.                           ,;1LGGGCCCCCGGLL@@@8ftLLCG0GGGCCCGLL0i   
L0GGGGGGGG0f                     .,;1fCGGGCLLCCG000GGG1L@@@@LtGCLLLffLCCGCC0;   
L0GGGGGGGGG0t               .:itLCGGGCCLCCG0000GCCLLCLLt0@@@@0@@@8@@@880GfL0;   
L0GGGGGGGGGG01         ,;1fCGGGGCCLLCGG000GGCLLLCGG0CL8Lt@@@@@@@@@@@@@@@@@Lf,   
L0GGGGGGGGGGG0;,..:itLCG0GGCLLLCGG000GGCLLLCCG00GGCCtCfttf@@@@@@@@@@@@@@@@@0;   
L0GGGGGGGGGGG0GfLG00GCCLLLCGG000GGCLLLCCG000GCCCCCGG0GGtGt0@@@@@@@@@@@@@@@@@@t  
L0GGGGGG00000GGGCCLLCCG0000GGCLLLCCG000GGCLLLfGCCCCCG00fG10@@@@@@@@@@@@@@@@@@@f 
L0G0000GGGCCLLLCCG0000GGCLLLCCGG000GCCLLCGG0GLLL8880CLLffL@@@@@@@@@@@@@@@@@@@@@t
C0GGCCLLLCCGG0000GGCCLLCCG000GGCCCfLCGG000G0GfGCCG8@@@888@@@@@@@@@@@@@@@@@@@@@@G
fCLCCCGG0000GGCCLLCCG0000GCCCCCCG0LG000GG000GL00GCfG88@@@@@@@@@@@@@@@@@@@@@@@@@G
fGGGGGGGGCLLLLCCGGGGGCLLLLCCGGGGGGLCGGGGGGGGCLGGGGGCLLLLG888888888888888888888@G
                                                                                

                            ..,;ti,,..,:;;;;:,.                 
                       ,L0GCGGGCL@GGGCCfii11ii;,,,..            
                      ,8@@@@8000L@G0@@@@CCC00GCfiiii;;:.        
                      G@@@@@@@8CG00@@80CG0G88888G1;iiiii;,      
                     f@@@@@@@@0L08@GGCL0811LC08888fi;iiiii,     
                    1@@@@@@@@0C80L1t88G08Gft1i1LGf80t;;iii;     
                  ;C@@8@@@@@0G@fi1fGGC080GGCff1;LCLGL;i;;ii.    
               .iG@@@@0G0@@GG81iLLffCLL8CLLi1L0fC8CCf;iiiii.                    
             ,t0@@@@@@@@88LG8fiGfff;LL0CtGGLfLLLG088G;iiiii                     
          ,1C@@@@@@@@@@@G;C@L0LGGCtfGC8GG08888000L0081,;;i:                     
       .:tG8@@@@@@@@@@@f L@CGGL08000L0880CC000880GGfC0:::tL;                 .,.
   ,1C08@@80GG0@@@@@@0i 1@CC0LC8088GLCfCGGGG08080LfC00f,t8t0f            ;1tLG0;
,iC@@@@@@@@@@8GG@@@8C: .80G0GGfL080L0GLLLCG0CG88Lt08808GGfif1          :LCG0000;
fLffffC0@@@@@@@0C88f.  :8G@GGG0fC8CffLLLCLtLGL08L08000088CL;          iGLG0GGG0;
;ii11iiitC@@@@@@0Lf    ;8@@8GG0GL80fiCGCCLGCL0800800000000i          i0LG0GGGG0;
i11111111i1G@@@8@t     :@@8880G0fG80CffffC88800080000008LL.         ,0LC0GGGGG0;
i1111111111iC@80@;     .;,..,t00GL8808808800000000088880L8C.        10L0G000000;
i11111111111i880t             itff0080CG000008888880GLfL008C.       t0LGGGGGGCG;
i11111111111if@f                 C808G08888880GCftiii1f08008C.      ;CLCCCCCCCG;
i11111111111ifG.                 C880880GGCft1111tfLC08000008C.  ,tfCG00G000000;
i11111111111if;                  .;i;:,,1LLLLCCCCCG00800000880L;:tLfCGG0000GGG0;
i1111111111i,.                         .tGfG00GGG08800000880Cft111i1ii11tLCG000;
i111111111i:           .....     .,:;i1LC8CC08888800000880Cf1111111111111ii1tC0;
i1111111ii:...    .:;ii111111i,,;11111tC0088000000008880Lt111111111111111111iit:
i11111i;;i1111i;:i1111111111ii111111111CG800000088880Cf1111111111iiiiiii1111111,
i11i;;;i111111111ii1111111111111iii111ifL08888880GCf1iii1iiiiiiiii1111111111111,
i11;ii111111111111ii1111111111111iiiiiiitfCCCLft1iiiiiiiii111111111111111111111,
i11111111111111111111111111111111111111111iiiiii1111111111111111111111111111111,
;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,`,
  'Change My Mind': `       .,,,,.                                                                   
      :::;;ii,                                         .,,,                     
     .;,it1t11.                                        ;i:;,                    
      ,;:111i1i                                        .::;.                    
       :iii;ii1:.....                        ....        ;;,                    
        .11;::i;;;;:;:.                  ..,;;iii;.      ,;;,                   
       ,;;;;;:;;i:,:;;;,            .,:;;ii;;;;;;;;. ..,,.,:;::;:               
     .;i;:::;1ttti,::::;;.        .;iii;;;;:::::,,,;i11t11ii;,:i:               
     ii;;;:;i1i;::::::,,;;:       :i;;;;::::::::;;::i1111111;;;1i;.             
    :i;:::::,:::,,,,,,,,,:i;.     .i;;;;;;iiiii;,,,,;i11111i;;::;;.             
    i;;;:::,,,,,,,,,::;:,iii:..,,;tCCCGG00Gfiiii;;;;;iiii;:,. .,,,              
   ,i:::,,,....,,,,,:::,:i;,:::ifG888880Cf1i;;;:;i;;:,,.         ,.             
   ,i::,,;:,...,,,,,,,,,,,,:;iffffffft1i;:::,,,,,,.              .,             
    ,:::,:;,...,....,itLCGG00GL111;::::::,,...                    ,             
          .::,,,...,iG88800Gf11111;,,,,..                         .,            
            :;,.,,,;1tt111111ii;;:,.                               :            
             ,;,,::::;;iii;;:,.                                    ,.           
              ,;,,:;;:::,.                                          .           
             .,;,.::..                                              .:          
            .;;i,:ii,                                                ;.         
             ..;;1:ii,                                               .,         
                 :i.i1:                                              .:;;;:;:   
                  i;.;t;                                            .iiiiii;:   
                  .;. ,t,              CHANGE MY MIND               ....,,;i,       
                       ,;.                                  ..,,..    .:,       
                        ,,                             ..,,..                   
                         .:                          ....                       
                          ,:                      .                             
                           :,                ..                                 
                           .;.                                                  
                         .,;t;;;,...                                            
                        .;iff1;i,,,.                                            
                         ,i;,.:;,                                               
                         .,   .:,                                               `,
  'Anakin Padme 4 Panel': `           :tLCCGCLLLf;:                   ,CLt1tfti;;::::,::;;i1tiiii1iiiii;;;t
          ;Ltt11t1i11ffG1                  ,f;:i1:..,,,::;;;iiiii;:,,,:;;::;;1ii
         ;1i;;ii;:;;:;1f0f               ;LfLft1,::;;;i1t1111111111i;,.,:,:::::;
        ::,,,,,,,,,,,,:tC0i             f000GG0i,;;;:;i;1;:;:;1iiiiii;:,..,,,,,:
       .:,,,,,,,,,,,,:;;iff             ffCG0Gt;:;i;:;;:i;:::;;::::;;i::,..,,,:;
        ,,,,;;;;;;;;;;i11i;             :it11i;:1ttfftt1111iii;;;::;::::,.....,,
        ..,:;iiii;;;;;iff11             ;ii11;,;t1t11111ttttttt11111ii;:,,,.....
        ,,,:;::,,,,:,,,,fCt.            :;i;;,,i1ii;:::::;i11111ii11111;:,,.....
        :;,:;;:,,:;;;::;fCt.            :;,,,.:t1;:,,,,:,:;111i:,,,,:;;;::,.....
        .;;;;;ii;;;i1;;;ii:             ,::...;Cf1i;:,::,;i11i;,,,,,::;;:::,....
         ,,,;;;;;;;::::;t.              ,,,,..;ffftt1iiiii111ii;:::::,:;;::,....
         .  .;;;::::,:::ff;             :,,,..;fLttt11111ttt111111iiiiii;,,..,.,
         .   ,;:;;::::;:ii11: .         ,,,,,,ittt11i;;itttt11i;i111111i:,,..,,,
         .    ,:::::,,,,. ,;1itCfi:.    ,,,,,:111i;;;iiiiiiiiii::;11111;::,,,.,,
         ..,,,,:;:,,,,.  ..,,:ifLLLt111i,,,,.:11i;,:;;;;;;:::;;;;:;iii;;;;.,,,,,
      .,::::,,..::,,,.   ....,:;;ii;;itt  ;:,,11i;;:,:i111iiii;:,::;;;;:;:...,,,
   .:i;;,,...., .:,,.  ......,,,,:::,.  ..,..:iiii;i:,,;i1i1ii:,,::;;;:;:.,,.,,:
  .::,,.......,..,,.  ............,,. ..  .,;;,i1iiii;:::::::,,:;;;;;;:,..,,,,,,
 .,,......,.. ,,,,.  .............        ;C1..i1iiiiii;;;;;;;;;;;;::,          
 .........,,..,,:,. ..........,,...... .;;;ii:,ii;;ii;ii;;iiiii;;;::,        .  
,,,,,,.,,,,,,,,,,.,,,,,..,,,,:iiii1t1C; .. ,L;i1:,,,::;iiii1111i;::,,::,,,,,,:;:
,,,,,,,,,,:::::,:::::::::::::::;i11i1L:      ;1:::;;i1tttt1tt1111ii:,,.,,,,.,,:;
...,,,,,:;iiiiiiii;;;;;;;;;;;;;i1Lf1tf.  .:tC0t,;i;;ii1;:;:;1;;;;iii::,..,..,::,
....,,,:;;iiiiiiiii;;;;;;;;;;;;i1Ltitf  fCG80L;;;i;;i:ii::;i;:::,;:::::.......,,
.....,,::;iiiiiiiii;;;;;;;;;;iitC0L;fC. tftt1;;ittffftt1t111iii;;;;:;:,,.,......
;,,,,,,:;iiiiiiiiiii;;;;;;;;;;;1fC0tft  ii11i;:1ffffftttfffffttttttt1i:,,,......
;;::,,:;;;;;;::,::::,::::::,,,,,,:fGff  ;i1i;,.1ti;::::;i1t111i;;;;iii;:,,,.....
;;::,,:;i;::,,,......,:;:,..,,,,:iL01f  ;;:::,:ti;:,,,:,:it11;,,,,,:;i;::,,,....
;:,;:,:iii;;:::,,,,,,,;;;:,:::::;fG0L:  :;,,,,;L11;:,:::;1tt1;,,,.,,,::::::.....
:;;;:::;iiii;;;:::::;iii;i;;;;;;;1LCt   ,::,.,;Lffft1i11tftt11i;;;;;;;;;:,,,...,
.;i;;;;;;iiii;;;;;;;iiiii11;:;;;;i1,   .;,:,,,:1fftttfttLffttttt111111i;,.,:.,,,
,.,::::;;;;;;;;;;;;;iiiii1ti::;;;ii     :,,,,,,1tttttt1tffftt1i1tt1111i::,:,..,,
..    .;;;;;;;;;;:;;::::::::::;;if;     ::,,,,,11tttt1t1iii;iiii11111i;::::,.,,,
..     :;;;;;;;;:;;;;;:::::;;::;tL.     .,:,:,:1t1111ttt1;;ii1111111i;;;;;:,,.,,
 ,      :;;;;;;::::::::,,,:::::;tf1       ,,. :tf111i;;;;;;;;iiiiiii;::;;;,..,,,
..      .:;;;;;:::::::::,,,,:::;i1f1    ,:,    .;t1ii;:::;:::,,:;ii;;:::,..,,,,,
,,       .::;::::;;:::,,,,,:::::::;ti;. .     .,:11i1ii;::::;;;iii;;;:;,,::,... 
.:.      ,;:::::;;;:::::::::::....:;tfL;    ;CGG;itii1iiiiiiiiiii;;;;;;,::.     
..   .,::,:;:;;:::;;;;:::::,,   .,;;::i1   ,fCt1:;1iiiiiiiiiiii;;;;;;i,.:.      
.,;;:;;::..::::;:,,,,,,,,,.        ..,::ifCGG;:::;ii;;;::::;;;;;;;;;;;..:i:     `,
  'UNO Draw 25 Cards': `                                       ii             .,,,.                     
                                       ii           :itttt1i:                   
                                       ii          itt11tfttt;                  
      .  ...                           ;i         .111111ttt11.                 
   iCGG00GGG0GGGGGGGGGGCCCCCCCCCCLL1.  ;i          :iii111i1ii;                 
  t@888GLfLfC@88888888@@@8800088@@@@G, ;i          .iiiiiiitf1t:                
  C880ttLCGG1088888880Cti:,....,;tG8@; ;i           ,ii1tft11ii;,,,,,...        
  C@01fCCGGCt888@@0f;.             i0i ;i          .,,:;;i;;;i;,::::::::::,.    
  C@t1ttCGC1G888Ci.                 ,, ;i       .,,,,:ii1tf1;::,,,,,,,,,,,:::,. 
  G@11tLCft0@8L:                       ;i     .,::;1ffiffttt1i,,,,,,,,,,,,,,,,::
  C@0ffLLC@@C:                         ;i    .::,;fLLftCfttt1tt:,,,,,,,,,,,,,,,,
  C@8@888@0i                           ;i    ,:,,1i1CLtii1tftii1,,,,,,,....,,,,,
  C@8888@f.                            ;i    :,,,,:;t1iiiii:1f;i:.,,,,,,......,,
  C@8880i                              ;i   .:,,,,.:ii11i;i;;11;.,.....     ....
  C@8@G,                               ;i   ,,,,,.,;;;ii;:.........,,,.      ...
  C8@C.                                ;i   .,,,,,;i;:,,. ........,1tfi      ...
  C@C.                                 ;i   ,,,,,.,::.  ...........::,:.     ...
  G0.                               ,  ;;   .,,........   .........:i;:.  ..,,..
  G,                               :L  ;i   ..............,,,,,,,,;1ti,,,,,;;:,:
 .:                               .0L  1i ..:,,,,,,,,,,,,,,,,,,,,.,:,.,,::;ii;:i
                                 .G@f  it,:::::::::,,,,,,,,.,,,:::;;;;ii;;;:,,,.
          OR                    ,G8@f  it,::::::::,,,,,,,,it,:;;;:::,,,,....,,,.
                               ;0@8@t  1L,:::::::::,,,,,,,:tL:.,,,,,,,,,,,,,,,,,
       DRAW                   18@88@1  i8i,::::::::,,,,,,,,.;Lt,.,,,,,,,,,,,,,,,
        25                  ,C@8888@i  i8G;,::::::::,,,,,,,,,,1Li.,,,,,,,,,,,,,,
                          .18@8@@@8@;  iC0G::::::::,,,,,,,,,,,.:ff:.,,,,,,,,,,,,
                         iG@8CLLfG8@;  11f8C::::::,,,,,,,,,,,,,,.iL1,.,,,,,,,,,,
                      .1G@@LtLCtii0@:  i1:G0f,::::,,,,,,,,,,,,,,,.,1Li.,,,,,,,,,
  i.                :f0@@8ffGGftti08,  it.1001,:,:,,,,,,,,,,,,,,,,,.:ff:.,,,,,,,
  GGi.          ,;fG@@@8@Lf0GCLL1C@0.  it,,L0t,::,,,,,,,,,,,,,,,,,,,,.iL1,.,,,,,
  f80Gft1iii1tLG8@@@8888@tfGCLftG880.  i1,:::,,,,,,,,,,,,,,,,,,,,,,,,,.,1f;.,,,,
,itLLLLCC08@@@@@@@@@@@@@@@CCLCG@@@@f   iLt1i111t:,,,,,,,,,,,,,,,,,,,,,,,.:ft:.,,
LCCCLLLLftti;;iii1111ttttfLfLCCCCfi    iG1,:;iit;,,,,,,,,,,,,,,,,,,,,,,,,,.if1,.
LLLLLLLLff1:....                       ;Gi1ftffL,,,,,,,,,,,,,,,,,,,,,,,,,,,.,tf;
LLLLLLLff1i;;iii;:.                    iGtfft1it,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.;f
CCLLfffti;i, ..                        if;i;:.:t,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
CLffft1i;i:                            iLi1iiift,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`,
  'Bernie Sanders Once Again Asking': `                                   :1ffLLt1;,                                   
                               .;LG8888000800Cti                                
                             ,L08800GGGGGGGGG000L                               
                           ,f8@80GGGGGGGGGGGGGCC01                              
                           G@800GGCCCCCCCCCCCCCCCG.                             
                           C80GCCCCCCCGGCCCCCCCLLC;                             
                           i8GCCCCCCCCCCCCCCLCCCLCf                             
                           iCCCLLfffttttfftttfLffLt                             
                          .ttLCffftt1t11LL1111ttfff1i,.                         
                          ,ittCffffLLfffCCffffffffLCt:,,,.                      
                        ,;:,iffffttfft1fLLf1tfffftf1,,..,,,                     
                      .::::;,1Lfftffttt1111tt1ftttt..,:...,:.                   
                     .:.,;:,..;tffLftfffttfff1tfft,.,.;,....:,                  
                     ,. .1;.,  ,1tft11iiiiii11tft, :i:;;..   ;:                 
                    .;,,:i1,... .it1tt111111tttt: :ii;;;;;;::11                 
                ..:tt1ii1i;;,....:i1ttttttttfti:::iiii1tttt1111:,               
             .;1tfftt11iii;;::,:,,::;1tttttti;::::;i;iii1ii11ttff1;,            
           ,1fffttttttt111;:;:,,,,,,,,:;;::,,,,,,:;:iiii111tttttttff;           
          ;ttttttttt11111ii;;;i;:;::::,,...,,,,:;;iiii11111111ttttt1ti          
         ,tttt1tt111111111i;;::;;;::,:::;;;;;;;iiiiiiii11111111111tt1t;         
        ,11tt1111111111111ii;i:,:,:;;::,,:::;;iiiiiiii11111111111111t1t:        
        11i1ii111111111iiiiii;i;;::;i;;;;:::::;;;;;;iiiiiii11111111iii11.       
       ;tiii;ii1ii1i111iiiiiiiiii;;;;;;;;;;;;;;;;;;iiiiiiiiiii11iiii;i111       
      :t1iiii;iiiiiiiiiiiiiiiiiiii;;iiiiiiiii;;i;iiiiiiiiiiiiiiiii;::i1it,      
      i11i;:,;iiiiiiiiiiiiiiiiiiii;iiiiiiiii;iiiiiiiiiiiiiiiiiiiii:,iiii11      
     :t1ii:::.:iiiiiiiiiiiiiiiiii;;iiiiiiiii;iiiiiiiiiiiiiiiiiiii;.:;;iii1,     
    .1iiii;;i,,;;;iiiiiiiiiiiiii;;;;iiiiiiii;;iiiiiiiiiiiiiiiiii;,,;::;iiii.    
    ;1ii;;;;;:,:i;;;;;;;;;;;iii;;;;;;;iiiiii;;;iiiiiiiiiiii;iii;,,;:::;;;i1:    
   .1iii;;;;:,,,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiii;,,:::,;;;iiii.   
   ;iii;;;;;::,,:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;i;;iii;;,.:,,::;;;iiii:   
  .ii;ii;:::,,..,;:;::::::;:::;;;:::;:;;:ii:;:;;;;;;;i;;i;;;::,.,,:::;;;;;;;i`,
  'Expanding Brain': `                                       ,       .:.        ..,,,,,..   ..:,     :
                                       .       ,        .,,,:::;:::,     :.    :
                                       .      ..        ::,,,,::,.,;,    .:    :
                                       .      ..        .,::,,,,,,,::     :.   :
                                       .      ,, ...      .,,,:;::;:.     ,,   :
                                       .       .   ...,.      .,,,,       :.   :
                                       .          .,::::...,,..,         .,    :
                                       .        .:,:;;::::,:::::,...,....      :
                                       .         ,:,:;:::.  . .;;::,:.         :
                                       .          ....,,.....  ::,, .          :
                                       .        .,.,,,,. ....  .,:.,.          :
                                       .         ,,..   ..      ,,,,,.         :
                                       .          .              .,,,:.        :
                                       .              ..         .....,        :
                                       .          .:;iii;i;;iiiii11i;,  ....   :
                                       .        .i11ii1fLt1tf1t1ttt1tt1,   ... :
                                       .       :f111i1tL0Lf1ttfi1iiiii1L;    ..:
                                       .      :L;ittiti1fLCLLLGtf1tfi11;C:     :
                                       .      L1LtfCffC0000GCLfC0LCCf1t;1L     :
                                       .     :LiLLG8GL0GLLLff1L0f1G@Ct1;:f;    :
                                       .     :LifLttt;1fG1f0C1fLL;1t1i:,;Li    :
                                       .     .Cit1;1t11tLtfLGCfi1;:::,,;i:.    :
                                       .      fL;i11i1iitt11t;;;,...,:;1t,,,   :
                                       .      ,Lt;f1:::i1i;;:,.......,:it1,,:, ;
                                       .       ,Ct;11iii;:;,,. ......,,:;t:,.. ;
                                       .        ,C1:::1i,:;...........,:ii;,   ;
                                       .         :C;:,:i,::..........,,:i;1,   ;
                                       .        .,Gi:,.:,,..........,,,,::t, . ;
                                               .,,,,,:i111iiiiiii;,.      .,...;
                                                 :1tfLCCCCCGGGCCCCCLt;. .      :
                                               :fCCCCG088808000800GGG0Gi.      :
                                          .   iGCGGGGGG88888888888888008;      :
                                             :0G08800888@@@@@@@@@@@8@@G00.     :
                                             L08@8@@@@@@@@@@@@@@@@@@880C81     :
                                        .    GG0@@@888@@@@@@@@@@@8@@@@0CG0     :
                                             GGG80G0G08@@@@@@@@@@800GLtfCf     :
                                             t0LGGG008088@@@@800Ltii;;iL:..    :
                                             .00fCG1;itG0GGGLLf;,,...,iGL:,.   :
                                              ,GLfCfi;1Lf1i:,.,....   .;Ci...  :
                                               :8Li;itfi,:,.. .        ,11i    :
                                              .;CC1. ,i. ..            .:;1,.. ;
                                       .       .        . . .,.    .  .:.      :
                                       .  ...:,.   ......,,.:t;...,..;i:.     .;
                                       .    ,i;,,....,,,:;i1tt1i;i:;1:.........:
                                       ::,...   ...,,,:1tfftffftfLCLi.,,,..    :
                                       :;:::;;;;::,,:iLfffft111ttfffCt;it1:,,,.;
                                       ,.......,::ifCGLfffCGfttt11ttfC1it1:... :
                                       ,.........,:tGLtt11LL1i1tttttfL1:,,,,...:
                                       . .. .....,,tfftttttiii1ttffLCC1;,,,,,,,i
                                       :;;:,,,,,,,,tf1ttt11i1tffttffff;,:::,,. :
                                       ,i1;,...;ffi;1;:ii:::iitfff1i;:::,...,,,;
                                       ......:;;i1:,t,.,:,.,,,,;1i;,:,,,::,....;
                                       . .,,,,.....,,..,,...,,::;tti......:tf;.:
                                       ,...    .....::.....,,,,:;ff;,......,;:,;
                                       .          ...;,......,:;,,t.,,.        :
                                       .          ...,:,.,::;i:...;1..,,...... :`,
  'Woman Yelling At Cat': `                                                      ..,;;:::::...,,,,:,,,,,,,,
                                                    .,::,,::.1:.                
             ,,..        ;;:;,:::,.                .:,:  ,,. ,..                
        .1CCi:t;::,     ,1;::itttti:               ,,,. ,.                      
       :GCCf1i111ii;.   .   .::11ii;.              ..,.                         
      .CLffttffLLft1i. .   ,:::ii:,:.    ..... ..     .                         
      tC1LttffftLL1;::.   ,;1tii1ti;    i111,.,,:.    .:,           ..          
     ,ti1t;iii::1fi;;::   :;;;;;ii;.    :;i:,::;;.     ;LCffftff1i1Lt.         .
   ,,;;,;::i111tttttfi:.  .itfftLL1:::. :i: :;:::.      18@@@@@@@0Gf.           
itLft;;;;:;i11tfttt1ii, ,1CGGCCCLLCCLt. ,:. .,,:,      .GGG80LG8888:            
1t:,:if1;1;;i1i1i::,:;;L088CfLC0fi;1;  ,,.    .,.      ,LCtL00GG08@i            
;: ,1GC::;,:;i1tii11itGCCLtfLLCCf;,,:  ,,  .   .,      .ft;i;ifCCGG:            
i:tG0GftLtf1:::i111fCGft1,.:tti,.         .     .    .:;1tftttttttti;;:;:.  ....
;it;;:,.:;i;,ii.,1C0GCCi.   .,.                     ,t1...;111LLfftii;;t1i,tCGCf
1;,        .;;iifGGCCCi    ..,,                .  .:,..       ....,,,.,.,ifLffi:
CCCL,:fLfi, :1L0GCLLf;      .,.                    ....,,,::,,,,,,,::1ttiitLfttt
1ii:.C8008GiLGCCLfff;       .,.       ..    ......          ::i;::;:,iLLLLCLLLLf
;11:1C0000GCCLLfftf;        .,.       ..,:,,,;;:;;;;;;;;iii1fLCLLCLt1it1ttttt1t1
:;;;iffGCCLffftttt;..        .      .. .,,.........,,,,,:itLttffttfttt1111111i;;
  .: :tLLfftttt1i, .         ,.    ...  ..,,........... ,i1fii1t1111111t1i11tt;t`,
  'Monkey Puppet': `           ..,:;i;:::,,,..                                                      
      ,:;ii11111111i11111ii;,                       ..,,::;:,,,...              
   :11t11iii;;;;;;;;;;;;;;iiii:                 ,;1111111111iiiiiii;:.          
 ,tt1i;;;;;;;;;;;;;;;;;iii;::;i;..           .;1t1ii;;;;;;;;;;;;;;;;ii;,        
i1i::::;;:::::::::::;1tffft1i:,:::;         it1i::;;;;:::::;;;;i1t1i:::;;,      
i::::::::::::::::::;1ttttttfft1i;i:        :1;:::::::::::::::i1ffffft1;::i,     
,:::::,,,:,,,,,,::ittttttttttttt1;,        :::::::::::::::::itttttttttt1i;.     
,::::,,,,,,,,,,,:;1ttttttttttttt1i.       ,:::::,,,,,,,,,,:;tttttttttttt1:      
,:::,,,,,,,,,,,,,;tttttttftttttttLf;     .:::::,,,,,,,,,,,:1tttttt111ttt1i.     
,:,,,,,.,,,,,,,,,,iffttt11G00GffLiL8,   .::::::,,,,,,,,,,,,ittttttLCCLttLGL.    
,,,,........,,,.,.,;1ttt, G@0Gttf;1L.  .:::::,,...,,,,,,,,,:1ttttG801;tfC8i     
,,..................,i11;;11iifftf;    .::,,,,.......,,,....,:1t1tti.:tft1,     
,,,,................,:i111ii1ffffLt:.  .,,,.,,................:11i;;1tffft:     
.,;;................:ii1ttffffttttti:  .,...,;;,.............,;i1ttffffffft:    
 .,................,ii1tttttttt1:...,.  .,...::,............,;11ttttttt1;:,,    
  .................:;;:;;;iiiii:,..      .,.................,i;;iiii111;. .     
   ..  ......  ....,:;iiiiiiiii;;.        .,.. .........  ..,:;;;;;;;;;:::.     
    ...          ...,,,,,,,:::;:.          .:;,        ......,::;;:;;;i;:.      
     .1ft1i;,...     .........,.           .:1tii;:,,...      .......,,:        
      iftfttt1tttt11i;::,...  ..             1tfftttffftt1iii;:,,..   ..        
    :tLLft111ii;;iii1111111i;;;:           .tCLLf111iiiiii111ttt111i;::         
::;L0GfLLCCCCCCLt1i;;;;;ittft111;:,,..,::;1G0LfLCCCCLLLft1ii;;;;iii1111;::::::::`,
  'Disaster Girl': `                         ..,,:ii1,      
              .,::;;;;:::;;;;;iiii:,,,,.
            ,;i11i;;:::::;::::,,:;;;;;ii
         .:;iii;;;:::::;;;;;;;;;:::::::;
       .;iii;;;::::;;;;;;;;;;;;;;;;::,,,
      ,;;::::::;;;;ii;:::::;:::::;;::::,
     ,::,,::;;iiii11i;;:,,,:::::::::,,,,
    .::,,:;i111111111;;;,...,,,,,,,.,...
    .:,::i111tttt11ii;:;:,.  ...,,. ..  
    .,,:i11tttttt11i;;,:::,.   ...      
   ..,,;111tttttt11ii;:,:;:,.   ..      
  .;,.:i111tttt11111111i;;i;,.          
   ,..,;iiiiiiii;;;;;ii11iii:,.         
   ...,,,,:;ii;:,,,,,::;;iii;,,...      
  .,..,,,,.:11i;:,,:,..,::;i;,,.,...    
  ... :iiii1Lft111ii;;;i11tt1::,,,...   
  ....;tfffCCLfffffffffLLfft1::,,,...   
 ,,...iffffLfffftfLLLLLLffft1:,,:,..... 
 :,,,,;1111ii;iii1tffffttt11i:,,:,......
 ,;:::,;ii11iiii11iii1iiiiiii::::,......
  ...,,.,;ii;;;;;;;:;;iiiiii;:::,,,,... 
         .:1i;;;;;iiiiiiiii;::::::,,..  
           ;tttt11111iiii;;;::::::,,.   
           .;11ttt111iiii;;;::::::::,...
             .,::i1ii;;;::::::;;ii;:::,,
                .;i;;;;;;;;;;i1tfffti;;,`,
  'Is This A Pigeon': `                                                                     .          
                        ....,,,,.....                               .,:,.       
                     .,,::::::::::::::,,..                       ,;1tLttf1:.    
                   .,::::::::::::::::::::,.                    .1CGCLCLftCCf:   
                  ,:::::::::::iLLLt:;::::,.                     1CGGCCLCttLLf.  
                .::::::::;::i;LGGGGfL1;:,.                       :1LLt1LL:it:   
               ,::::::::11;11i11tGGCttf:.                          ..  .,.      
              .:::::::;tLtittti1itti111;.                                       
              .:::it1:;11iiC00tfi1f;Gft1.                                       
              .::1CLLftCCC1tfftt1LGttft:                                        
               .,tGCCLGGGGGCCCCCGGCCLGC:                                        
                 :fCCLCGGGGGGGGGCCCCGGC:          .,;,                          
                 .:ittCGGGGGGGGCffttCGL.        :1LLt,                          
                   ,,iGGCCGGGGGGCCLCGGi       .1CGL;.                           
                 .:;11GGGCCCCGGGGGCGGt.      :LGGL:......,,:;i1i;.              
                iLG0GLCCCCCCCCCCCCGGf,     .iCGGGCLLLLfLLCCCCCLft,              
                ;11111fC00GGCCGCCCC00Cft;, ;GGGGGGGGGGGGGCCCLft;,               
               .111iiii1f0@0LffCGGC8@@@@@0LfGGGGGGGGGGGGGGCf1;,                 
        .,;i1ttLGGGC1iiiiit1iiiLGGCG88@@@@GCGGGGGGGGGGGCf1:,                    
      :1CGGG000000GGGL1iiiiiiiifGGGGCCG0@8CGGGGGGGGGCf1:.                       
    ,tG00000GG00000GG0GLtiiiiiitGGGGGG0GGCCGGGGGGC1:,                           
   ,C00000000GG00000GCG00Cf1iii1fLCG00GCCGGGGGGGCf;,..                          
   t0000000000CG000000CG000GCf1iiii1LGCGGGGGGGGCCGGGC1i:,.                      
   L0000000000GCG000000CG00000GL1ii1LGGGGGGGGGCt1LGGL1LL1;i;;:,,...             
   1000000000000GGG00000C000000GCLCCCCCCCCCGGGL1tG0C1tLf;1CLLLftt1i;;:,,.       
   .L0000000000000CG0000GG000GGG000000CG0GLCGL1100GL1ffi;fLLCfCLCtLCffLi:       
    ,L0000000000000GG0000G00CG00000000GLCGGLL1i1G0Gttft;;1ffLLCCCfCCffL;.       
     ,t0000000000000G000GGGGGGGGGGG00000CCGGtii1G0G1ffi;i1i;;;i11tffLLt:        
       ;C0000000000000GGGG00000000GG00000GG0Lii1G0Ltff;;itCLf1;;;;;;;;;.        
        .iLGG00000000000000000000000G00000GL1iiiCGtLLt;;;;1CGGL1;;;;;;:         
           ,:;i1tfLLLLCCCCCCCCCCLLLLftt11i:.....,,it1:,,,,,;tLCCfi;;::.         
                     ............                            .,:::..            `,
  'Clown Applying Makeup': `                                                        1tttttttttttti;::       
                                                        C888888@@8880ft1;       
                                                       .CG0080888888Gftt:       
                                                       .CLLL08CfLCC00ffLL:      
                                                     .,;00GG88GCCG088CLGC,      
                                                   :tLC0CGG00G888@888CGC:       
                                                 :fCCCGCLGGCG08888880C1,        
                                                 LGCCGGCCCGG00088888CL,         
                                                 1CCCGGG0GG0008880GCLC:         
                                                 iGCCG0GffC00880GCCCGCf1;,.     
                                                 :ttttft.:11111tttfftt1tt:,,    
                                                     tCCGCCGGCCCLt1ii,          
                                                     L00088008880Lftt:          
                                                    .fLG00ttttG80Lfff1.         
                                                    .f11G8L1it0880fCCG:         
                                                    .GLL888GL00000CCG1          
                                                     tG0008880GGG0CC1           
                                                     ;CCGG00GC088GLf            
                                                      tf1;tGCffCGCCL.           
                                                      .LftGGtt1fGGCL1:..        
                                                    ...:CGGCCG000GGCLCL:,,.     
                                                  .::::;tttttttttftttt:...,,    
                                                  ;LLfft1111111tffLLLL;         
                                               ..tCfftttt1tttttfffLLLCGi        
                                              itLLffttttttt1tttffLLLLLLL,       
                                            .1fCGf11iiLLfLCCCCLffLLf1LCtL.      
                                            1CLLCCf1;;tfC0t1tL0CffLitGGCG,      
                                            tCLLLf1;11tiL8C11C8L;fLC00GGf       
                                            tLi,.   :tLf008800LiiLCGGGGG:       
                                            ;:        1fLG00CGf1;tGGGGL:        
                                                      .1iitLLf1;itfLG1          
                                                       ;LLGCt;:i:...i,          
                                                    :;i;1t1i;;ii;;;;;i;         
                                                  .tCLLLftttttttttfLLCCt.       
                                                  :CLLfffffttfttttfLLLLGi       
                                                  tffftfCCGGGGCGCfLLCCLLL,      
                                                  tf1t1fffG@0t1t0CLCLLLfL1      
                                                  .1fi1Gt;tCCt1L80LLffffLf      
                                                   .fffLL1111L00GGLt1tfff:      
                                                    .1LLttttfGGG0GfffL1,.       
                                                       ;Lt1ttfLG0Ct;i;          
                                                        f0CLG88GCGt             
                                                    ...:11fLft1tttt1;,...       `,
  'Hide the Pain Harold': `                                                   ,iit1;.                      
                                                 :fGGGGGGCf;.                   
                                                ;LCfffLCGG08i                   
                                               ,GCfffttLGG08C:                  
                                               :GLfLftttLCGGC;                  
                                               ,Ltftt11ttLC11i                  
                                                1t11ii1t1fLtfi:                 
                                                ,t1i11111fCL11G1:,              
                                                 iL111t1tti;iLGGGGLt;,          
                                             ,it1fGLtt1i;:,itfCGGGG00Gf;.       
                                           :tLGftfCL1i:,::;1tLCCCGGGGGG0L,      
      .;;;;;;;;::::,,,,....               10GCttffCCffttttffLLCCCCCCCLG00Ci     
      .tCCCCGGG000000GGGGCCC1           .tLGCLfffCGGGCffLLLLLLLLLfLCLCGGGGGi    
       iCCCCCCGGG000000888880:          i0ffffff00800CfLLLLLftff1tfLtLCCLCCL.   
       ,LCCCCCGGGG00000000088t         iCGL1ittfG0000CtLfLLftf11ii1t1fLtLCG0i   
        1CCCCCCGGGGG000000008C.     .;f0GLLi;ttfC0000LtffLt1fCLLt111;iifLCGGG:  
        :LCCCCCCGGGG0000000000;    ,fCGCCffi:tfLLG000L1ttf1tLCCCCLLLLtitfttfLf: 
        .tCCCCCCGGGG0000000008f.,:itf11ii;;;:1fftfCCL11ti11tfLLLLLLCGGtLCCftttt,
         ;CGCCGCGGGGG000000000GtfLCLfi;;;;:,,i11i1iiiitt1iiii1tfffffLCLLffLftft:
         .tLLLLCCCGGGG000000000tii1111;::;;:,;iii;;i1tt1iiiiiii1tfffLLLLLtfffLf:
          ...,,,::;;ii11ttfLLLCti1t11iii;:;:,;;;::;iiii;;;;:;;;:::;;11fffLfffft.
           ..            .....,.itLLLft1i;:,.                ... .....:,,,,:::. 
                ................,:;:,,...                                       `,
  'American Chopper Argument': `                                                                                
                                    ....                                        
                                  .:1t11i;:,                                    
                                 :11tfffLCLf;                                   
                                ;fttffffLLfft.                                  
;.                              ,tt1t11ii11i1,                                  
11;;i;:,.....                   .ii1111111ttfi                                  
i1ttfLLLLLffftt1:,..    ..:;::,,,:i1111tt11tft:..                               
.,:;i1tttffffffLCCCfttt1tf1:,,,,...:;ii1tiii1t:.,,,.                            
    .,:;i111ttfLLLLffffft1,...... ..::iii;;;ii...,,::,                          
        .,,::;;iii;;;i;;i:....  .....:;:,,........,,,:,.                        
                ...,,,,,,..............      ......,i1i:                        
                        ............ .    ........,i11i;                        
                          ...... ..,,,,....... ..:i1ii;;                        
                           .......,,,:,...... .;i11ii;i;                        
                            .......,,,...    .i1111111i:                        
                ..           ...            .it111111i;.                        
                it1;,.        ,.            ,tt11iiii;,                         
                .;tffft1i;:,,,,..           ;ttt1ii;:,                          
                  .:ifLLLLLLL1,..      ..,:;1fLft1;,.                           
                     ,;tfLLLLft1i;::;ii1tfLLLfft1;,                             
                       .itfLLfLftt11111111111ii;;,                              
                         .:;;;;::,,,,,,,,,,,,,,,.                               
                                                                                
                                          .,,,:::,,.                            
                                        ,it1:::::::::.                          
                                      .:i11;;::,,,,,,:,                         
                                ..,,:::::::,,,,....,,,:.                        
                                ,,:;;:::::,,,.........,.                        
                                   ..:::,,,,,:::,.....,.                        
                                    ,i;;;;;i1tt1:::;;,,                         
                                    :;;;1tffftt;:11ii:,,,....                   
                                  ..,;;;i111111;;1t1i:..,,,,,,,,..              
                              .,,::,,i1i;iiiiii;;;;iii,.....,,,,:::,.           
                            .,,,,,,.:t11i;;;;::::;ii1i..........,,,,:,.         
                          .,,,......,;i;:,,,,,::;;;i;..............,,,,,.       
                        .,,,,...      .    .,,::;;:,...................,,,      
             .         .,,,,...              .,,,........................,.     
         .;iit1:,     ,:,,,,...                .  .... .....................    
        .1LGCGCft;,,;i;,,,,....             ....   .   .........    ..  ......  
       .1LLCLGLfLffffLLt;,...     ..          ....      ....             ..  .. 
       ifffttLftt1tt1ttff1:.  ....  ..       ,:;:,..    ..                   ...
       :i11iiiii;;11ttft1i;:..       ..      .::,.::.                          .
       .,:::::::;;i1t11fi:,.          ..                                        
            .,,,,::;;;1f:              ...........  .. ..........  ..   ........
                      .                                                         
                                                                                
                               .,:ii111;                                        
                             .:11ttttfff;                                       
                           .:1t11tffLCCCLi                                      
                           ;fftttttfLLCCCL;                                     
                           ;tttt1ttttt11t11,                                    
                           :1111111iii11tfti                                    
                           :1ii11111tff111ff:                                   
                          .:;;i111111ii1111fi                                   
                    ...,,,,..,;;;;;;ii1;:;;1i,..                                
                 .,::,,....  .:i;::;111;;i1ti,,,,.                              
              ..:::,,.....    .,:::iiii;;;ii:...,,                              
            ..,::,,.......      ..,,,,...........,.                             
            ..i1i;,.......             ..........,:                             
           .,i1111:.......            ...........:;                             
           .i1iiiii:.....           ........... ,i:                             
           ,tii;;;;;,          ..,,,::,,.......,i1i                             
          .11i;;;;;;:.        ..,,,:,,,,,.... .;;i1,                            
         .i1iii;;;;;;,       ....,::,...... ..:;;i1:                            
         :11iiiiiiii;:       .........      .:;;iii;                            
         ;1iiiiiiii;:.      ........... ..  .::;;i11,                           
         .,,,,,,,,,,.. ..   ......................,,.                           
                                                                                
                                                                                
                                                                                
                                                                                
           .;;i1;.                                                              
           ;t111t;                     ..,:;,                                   
           :i111ti                     ,::i,.......       .....                 
        ....,:ii;:.                    .,,:.    .........,:::::,.               
      ,i1i;::::,,,,                      ......      ...,,,,,.,,,.              
     :i11iiiiiiii;i.                           ..    .,,,,...  .,,              
    ,1iii,..,,::::;.                            .     ,:,,,,....,.              
   ,1111:     .. .i:                            ..    ::,.,,,,..,..             
   1tti:        .;t1.                           ..    :,,....  ...,,            
  .i1tt1:.      :CG0;                           ..    ...        ..,            
    ,ii1t1;.    ,L@G;                 .,,,,..    .    .   .....   ..            
     :::;itf1:,,;fC:                  :;ii11i;;;:;:,:::::::........             
     .;:::itt1:,:;i,                  ,;i11111iiiiii11ttttti,......             
     ,;:::,;;;,.,,:i,                  ,,::;::::::::;;;;;;;;:.  ...             
     ,::,,....  ...,.                          .,,,,..,,,,.      ..             
                                                  .:.           ..              
                                                  .:.   ...,,,,,,.              
                                                  .,.....,,,:,,,,               
                             ,,,.                                               
                          .:;iii;;,                                             
                        .:ii;ii11t1;,                                           
                       ,iiiii11ttttt1;.                                         
                      .i111ii11111ii1;:                                         
                      .;iiiii111iii111i:                                        
                       ,i;;;iii111tt1ii1:                                       
                       .;;iiiii1111111iii.                                      
                       .:,:;;;;;ii111i,:i,          ..,,:,                      
                      ..:,,:::::;i111i;;i,     :i111111i:,                      
                   .,:,,...,;;;::;ii1ii;i.   .iffttt111i                        
                  ,:,........,:::;;;:::..  .,i111ti;;;;:                        
                .,,...,,,,,..........,. .,;ttii;:::;i;,                         
               .,..,:;iii1i;:...    .,:;1tfft1;;::::,.                          
              .,..,;ii111111i,....,:i1ttffft1;,.                                
              ,...,;;ii111iii,,:i1tffffttt1;,.                                  
             .:...:;;ii1tt1111tffffffft11;:.                                    
             ,,...:;iii1ttttttffffttt1i;:.                                      
            .:,...:;iii1ttttfffttt11i;:,,                                       
            ,:....:;;ii11ttttt11iii;:,..,                                       
           .:,....,,:;iii111ii;;;::,...,.                                       
           ,:......,.,:;;;i;;:,,.......,                                        
`,
  "They're The Same Picture": ` Corporate needs you to find the differences between this picture and this picture
                                                   ...,,..                        
                                              .,::,,,,,,,,.                     
                                             ,::,,:;i;:.,,:,                    
                                            ,:,:1fLLLLf1:.,:.                   
                                           .:,;fLLLLCLLL1,.,,                   
                                           .,,111tfft11tt1.,,                   
                                            ,;i;;itf1ii1tf;i;                   
                                            .1tfftfLfLLLftti,;.                 
                                            ii1tf11ttffftt;,.:;                 
                                           :1,;t1i111tttti ...:,                
                                          .i:iti11ttttt1i,...,,,                
                                       .,:;1fG01i11111i1i1:.,,,::;,             
                                   .:i11tttLG8@Li1ii111tiGC:,,:;;111:           
                                  .1ttttttfGf1CLitttttt11CL1:,,:;;1tti.         
                                 .i1111tttLfiitffttttttttfLfi;:::;1ttf;         
                                .1t111111tf1t1tfffLLLLffLLGL1;:::;1tttt,        
                               .1t1t11111tttt1tLLLLfLfC0GGGti;:::i1t11tt.       
                              .it1111i1i1tttt1tGGG0CfC8800Ci;;;;i111111t1.      
                             .1t11111iii11tttt1CGG8808@8GGL11111tiiii111t1,     
                            .it111111i;i11tttt1L0G8@@@@0GGt1ttttt;:iii111ti     
                           ,11111111ii;11111tt1fGG0@@@8GGL1ttttt11;;ii1iii1;    
                           1t1111i1ii:i11111ttt1C008880GGtttttttt1.:;iii111t:
                                        They're The Same Picture             `,
  'Bike Fall': `    .                      .,.                                            .     
    .                     .1tft.                                          .     
    .                      ;LLCi                                          .     
    .                    .;iGGf:                                          .     
                        ;0@@CGGGi    :,                                   .     
    .  .. ..        ...,@@CGC0fC01 .;,     ....    ..                 .. ..     
                       C@@8CGC. iCt;                                     ..     
    .                 .G8@@@GLCt:iLL1;,                                   .     
    .                  ifLCf;:tCCfi:,:,                                         
    .                   ,;1tt1iiffi:                                      .     
                       ., .;tft1ft1;.                                     .     
                      .tC1:i1t1iiLt;ti,                                   .     
                      .ftiiift;1tGiiLtt,                                  .     
                       1i:tif1:tt;;1i:11                                  .     
    .                  :LtL1,,:it, if:iC,                                 .     
    ..                  ;LGi   ,,, .tLLC;                  .. .           .     
                         ,;.        .iLC:                                 .     
                                      .,                                        
     ......,.........   ......  ......  ......... .   ...      .....            
     .                                                          ...       .     
    ..                                                                    .     
     .                                   ,iG00fLi                         .     
     .                                ,t1ffG@CCCGL.                       .     
                                     ,80itt1ffLLt1f;                      .     
     .                               :88GCGftLt:.                         .     
     .                                fGGCf:it1;                          .     
     .                              ,:,;CLi:t1;;,.                        .     
     .                             .fC1;LtCfii1;1;:                       .     
                                   ,f1;iC;if111i1it,,,                    .     
     .                              t1it,.;fi.,ii,f1..                    .     
     .                              :fCf. ,f1  ;t1LL.                     .     
     .                               ;Li   i1:. 1CGG,                     .     
     .                                .         .;t1.                     .     
     .                                                                    .     
     ....................    ...        .. ..     .   ..  .               .     
     .  ....                                                      .  .   ..     
     .                                                                    .     
     .                                                                    .     
     .                              .                                     .     
    .                          ... :1                                     .     
    .                ....;;,.......:;.                                    .     
    .           .ifLt1fCGt::,.   ..;;              .,:i;.                 .     
    .           ,tLLftt1:.  ,    ..i:..       .,;tfGG0@@C:                .     
    .                              ,,..,:,..;1fftLGtLLLCLC1;.             .     
    .                               ..,;1ttfti:it1L1Cf1CCfffi             .     
    .                                    .,..,i11i;:;GCf:...              .     
    ..                                      .,.      .,                  ..     
     .                                                                    .     
     .                                                                          
     ...  .                                      ...                       `,
  'Surprised Pikachu': `                .                                                               
               .;;:,.                                                           
                ;iiii;:,.                                   .,:;.               
                :i;iiiiii:,                            .,:;;iiii.               
                 ;iiiiiiiii;:.                    .,:;;iiiiii;i:                
                  :iiiiiiiiiii:......,,,,,.....,:;iiiiiiiiiiii;                 
                   ,iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:                  
                    .:iii;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,                   
                      .:;;iiiiiiiiiiiiiiiiiiiiiiiiiii;;ii;,                     
                       :iiii;;iiiiiiiiiiiiiii;;iiiiiii;:.                       
                      ,iiii;1f:;iiiiiiiiiiii;if;:iiiiiii.                       
                     .iiiii:iL..iiiiiiiiiiii;:f: iiiiiiii.                      
                     ;iiiiii:.,;iiii;iiiiiiii:..:iiiiiiii:                      
                    .i;;;iiiiiiiiii;,,;iiiiiiiiiiii;;iiiii.                     
                    ::,,,,:iiiiiiiiiiiiiiiiiiiiii:,,,,:;ii:                     
                    ;,,,,,:iiiiiiii;;;;;;;iiiiii;,,,,,,;iii.                    
                    ;i;;;;iiiiiiii;:;;;;;:iiiiiii;::::;iiii:                    
                    ,iiiiiiiiiiiiii;;;;;;:iiiiiiiiiiiiiiiiii.                   
                     .iiiiiiiiiiiiii;;;;;iiiiiiiiiiiiiiiiiii:                   
                      .;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;                   
                       ;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.                  
                      .;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,                  `,
  Doge: `                                     ;;.                                        
                                    ,t;i,                 ,;;;:                 
                                    :t::i,              ,;i;:,:,                
                                    11;:;i;.          .;i;:::,,:                
                                   ,1;i11i11iii;;;;::;;:,:,..,,:.               
                                 .:1ttt11i;iii1111ii;:.,:,. .,::.               
                             ,i1tfftfffti;;ii;iiiiiii;:,,.  ,:;,                
                            ;Lfffttttft1;;;i111i;;iii11i:..,:,;;                
                           .fLLLt:,,;t1i;;1tttt1ii;iii1111i;:,:1;               
                           1C00Ci. .i1t111ii;;:,:;;iii11111i;,,it.              
                          ,C00Ct1i1tttftti:. :.  ,ii11111111i;:;1,              
                          t0GGGfffftffftt1i;::,:i1tfffttttt11iii1;              
                         ,CCGC;,...,;fLftt1tt11111tfLLftffftt11i11.             
                         iGLGt       tLfftttfffLffffffLfffttt1ii11i             
                         iGLf;.    .:i1tt11ffffffLfffftt1111ii;iiit;            
                         1GLt:..  ..:iii1111ttttt1ttt1111111i;;i;i1t            
                         ;GLLt,     .,::::,:i11111t11ttfttt1i;;;;iit:           
                         .LCLft;.........,:i1111ttttttttt11i;;;;;;i1i           
                          ,LLfff1iiiiiiii111111111tttt11iii;;;;::;;it;          
                           tfffftttt1111iiiiii1ttttt111iii;;;:::;;;iti          
                          :Ltttttt1111iiiiiii1tttt111111iii;:::;iii1t1          
                          ;Lftt11111111iiiiiiii;iii11111ii;;;ii111t1f1          
                          tLffftt1ii;ii;;;;;;;;ii11111111ii1tttttttttf          
                          fCLfftt11ii;;;;;;ii11t11111tttttffffffftttt1          
                         ,LCLLfft111iiiiiii11t111ttt11tttffttfffftt11:          
                      .:1fLLLffttt11iiiiii111111111ttft1tffffffftt1ii;          
                    ,1fLLCLLffttt111iiiii11111111t1tttfftfffffftt1i;;i          
                 .:tffLCCCCLfftt1111i1i1111111t1t1111ttffffttt11ii;;;i          
                ,fLffLGGCGCLfftt111ii11111t1tttttttt11tfffftt111i;;;;1          
               :fftfCGGLCCLLftt111ii1ii1111111tt11tttt1tttttttttti;;;t.         
               :11tLGGLfffffttt1111iiiiiiii11111111i1111tttttffft1;;;1.         
           .,;i111tCCLfftt11t11111i1ii1iiiiiii1i1ii11111ttttttfft1;:;:          
         ,:;iiiii1tLLfttftt1iiiiiiiiiiiiiiiii1iii11111i111ttttttti;;;,          
         ;;:;;;::1ffffffLLfftt111111iii1iiiii1ii111111ii11ttttttti;;i,          
         .:::::iLGftffLLLLLLfttttttt1iii11tttttt11iiiii111ttttttti;;;           
           ...;1tt1tfLLLLLLLfftt11t1ttfLCCLLLftt111iiii1111tttttt1ii.           
                   1CLLLLLLLfftttffLGGGGCLLCLft1t11iii111t111ttttt1,            
                   ,ttfffLLLLLfffLLGGLCCff11fttt11iiii11111111tt1t,             
                       ..:;itf1tfffttt;1ti;::11i;;;iiiii111111111i              
                             ..:1t1;::...:;, :1tfi,;ii;ii1111ii;i.              
                                 ..,;;:.....;11tLL;:,:::;;;iiii;:               
                                     ,;... .:,:i;1i,         ...                
                                              ....,                             `,
  'You Guys are Getting Paid': `                                        ...                                     
                                  .,....,,...                                   
                                .,...,..    ..                                  
                              .,:;i111ii;::,.  ..                               
                             .,:tLCGCCLLLLt11;,,,                               
                             ,,iLCCLLLfffttftt1;:.                              
                             .,tCLLfLLfttttt111i,.                              
                            :,iCLti:,:;iii;;;iii.                               
                           :fifCLf1;,,;tf, . .,;,.                              
                           1ftLLLLLfffLCCf;ii1ii;.                              
                           ,LCLLfftt111ii;;1ff1i:                               
                            .,fLfft1fLt;::ii;;;1:                               
                              fLfft1i:;:::::,::,                                
                             .fLfftt1;;;:,,,::                                  
                             .LLfffff1i;;::::                                   
                             ;Lfft1tt1i;;;;,                                    
                         ,tttLLft1iii;::::;,                                    
                       .t8@0ffffti;;::::::;if;                                  
                     :t8@88@Gt111i:::::::;;.L@Ct,.                              
                  .itfG@8888@0f11i;::::::;i,f88@Gt;:                            
                ,iCGf1fC08@@@80CCLtiiiii1tft0888@81tCti,                        
             .ifG88GGCG0GGLi:,..:LCLLfffLLC000GiitLfLLCGCi                      
           .tG00GCf11i11;:::,:i1fLGCGGCCCG88C1i:.:i;,::;iCf.                    
          .G@880fi;i;1t1ftL00888@888G1CG080GCG00GGCfL0CGti8:                    
          ;@08008GG88888@888888888888C08GG088888@@88888@CCC,                    
          ;GLLffffftC888@888800GCCLff0@CtttfLLCCCGG080@Litt;                    
          :CLffttt1t1fGCCLfLffLLCCG0088080000GGCCLttLtti11ti                    
          :ftt11i1i;;;:;tftLGGG000GGGGGGGGGGGGGGGGCLCC1;iit1.`,
  'Unsettled Tom': `              ..,,:::;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::1ffLLLLLLLLLLL
             ..,,::;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::::iiiiiiii;ii11ttttttttt
          .,,,:;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,:;iiiiiiiiiiiii;;;;;;;;;;
        .,..,:;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,t1iiiiiiiiiiiiiiiiiiiiiiiii
           :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  ;C00L1iiiiiiiiiiiiiiiiiiiiiii
          :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  :tG0000Gfiiiiiiiiiiiiiiiiiiiiii
::::::,,..;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,tG00000000Liiiiiiiiiiiiiiiiiiiii
;;;;iiii::iiiiiiiiiiiiiiiiiiiii;iiiiiiiiii;.  ;C00000000000C1iiiiiiiiiiiiiiiiiii
11i;::;i;;iiiiiiiiiiiiiiii;;;iiii;iiiiii;,  :f0Ct11fC0000000G1;iiiiiiii;;;;i:;ii
11111i;:;iiiiiiiiiiiiiiiiiiiiiiii:;iii;,  ,tG00i,. .,iL000000L,:iii;;;;itLCf:ii;
1111111i:;iiiiiiiiiiiiiiiiiiii;;iii;:,..,:t0000t,    .:L0000C;,,;;;ifCG88@@L:;;:
11111111i;iiiiiiiiiiiiiiiiiiiiiii;;;:::;ii;f000Gt:.. .:f000L;,::;tG8@@@@88Gt:;;i
11111111i;iiiiiiiiiiiiiiiiiiiiiii,.:,::;;ii;f0000Cft1tLG0Gf::,,iC8@@8@80CC0C;iii
11111111;;iiiiiiiiiiiiiiiiiiii;,.  :;;:;:;ii;1C00000000GLi::,iC8@88@80CG8@@81;;i
1111iii;;iiiiiiiiiiiiiiiiiii;,  ..:iiii;:;iii;itCGGGCLti;:::f8@888@8CC8@@@@@8L1i
1111;;;;;;;;iiiiiiiiiiiiii;.  .iLCt;;ii;;iiiiii;;i;:::,:::;L8@888@0L0@@@@@@@@8Gf
1111111i;;:;iiiiiiiiiiii;,  .1C0000Gt;;iiiiiiiiiii;:;;;;;;G@8888@GC8@@@@@@@8GG08
111111i;;;;:iiiiiiiiiii:.  :LGLLLCG00C1;;iiiiiiiiiiiiii;iG@888@@CC@@@@@@@0CG8@@@
i1111111111;;iiiiiiiii:  .1GL;,..,iL000Li;iiiiiiiiiiii;i0@888@@0C@@@@@@8CC8@@@@@
.,;i11111111;;iiiiiii:  ;L001,    .:f000Gi:iiiiiiiii;;;C@8888@@@@@@@@8GC8@@@@@@@
   .,:;iiiii;:;iiiii:  iGG00L:.    .;G000L,;iiii;::::::C8@@8@@@@@@@@0C0@@@@@@@@@
        ..... .:iiii: .tGGG00L1;,..,iGGGGf.:;iii;,..,. .:f88@@@@@@@CC8@@@@@@@@@@
                :iii;.:;tGGGG00GCLffCGGGL:,:iiii;..f0i    L@@@@@@@@8@@@@@88@@@@@
                 ,:ii;ii;1LGGGGG00GGGGGf;::;ii;;, ;8t.    f@@@@@@@@@@@@@@@8@@@@@
                   ,;iiiii;1LGGGGGGGGLi,:;:;i1tfi .:      C@@@@@@@@@8GLC8@@@@@@@
                    .:iiiii;i1fLCCCCt:,:;;:1C08@0i:::::;;i0@@@@@@@0LiiG@@@@@@@@@
                      ,;iiiiii;iii;:,:;;;;t8@@8@@@88888@@@@@8088G1::f8@@@@@@@@@@
                       .:iiiiiiii;;;;iii;f8@@@@@@@@@@@@@@@@@@8Gi,,t08G0@@@@@@@@@
                         ,;iiiiiiiiiiii;i8@80GG@@@@@@@@@@@@@@8t:1G80G88888@@@@@@
                          .:iiiiiiiiiii;180CC0@@@@@@@@@@@@@@@CL08008@@888@@@@@@@
                            :iiiiiiiiii;;CG88@@@@@8GG0@@@@@@@@@@@@@888@@@@@@@@@@
                            ,iiiiiiii;:::0@@8@@8GGG0@@@@@@888@@@@@@@@@@@@@@@@@@@`,
  'Panik Kalm Panik': `.                                                                               
.                                                     .,,:,,::,,                
.                                                  ,;i1iiii1tfffti.             
.                                                ,;tft1ii;ittfLfffii1;.         
.                                              ;tt11LLf1i;itt1i;1f11tft:        
.                                     .       ;f111tLfti;:it1;;i1f1;11t1        
.                                     .       i1t1111ii;;::1fffft11i1tii.       
.                                     .       iit1;;i;;;:::i11ttttt11t11,       
.                                     .      ,1tti:::::::::;iiiiiii;;1tt:       
.                                            ,;1i;::::,:,:::iiii,:i: ,,.        
.                                                ::::,,,,,::;iiii1;             
.                                                .;;::,,,.,,,:;1f1.             
.                                     .           ;;;;:::,....,,,.              
.                                     .           ;i;;:::::,..                  
.                                     .           ;iii;;;::,;,                  
.                                                ,1111111;;tf;                  
.                                                .:;;iii11tt1:    Panik          
.                                                       ...                     
.                             ..                                                
.                                                      ......                   
.                                                   ,;;;;;;i111i:               
.                                     .           ;1111ii;ittffff1.             
.                                     .         .tCLffti;;1ttffttLf.            
.                                     .         1CLCLLti;;11ii;ittt:            
.                                     .        ,fttt11i;;:iftit1t1;;.           
.                                     .        :tiiii;;;::;ttfft11t1.           
.                                    ..        ,i;;;;::::::iii1111i:            
.                                    .,         :::::::::::;iii;:;;.            
.                                    ..         ,::::,,,,::;iii:;i:             
.                                     .          ::::,,,,,,::i1tt;              
.                                                ,;;;:,,,...,,;ii.              
.                                                .;;;;::::,,.                   
.                                                .i;;;::::,,,                   
.                                                :111iii;::1i                   
.                                                :i1111t11ff1,   Kalm           
.                                                  ..,,,:::,.                   
.                                                                               
.                                     .                                        .
.                                                     ..,,,::,,.                
.                                                  .:;iiiii1tttt1;              
.                                                ,itt11iiiitffLfffi;:.          
.                                              ;1t1tffti;i1tt111t11tffi.        
.                                            ,tft11LLf1i;;11i;;;tti111f1        
.                                            if111111ii;;:itt1ftt1iit11t        
.                                            1i1tiiii;;;::;1tfftttt1ttit.       
.                                     .      iit1;;;;::::::iiii111i;1ttt:       
.                                     .     ,ffti::::::::::;iii;:;;;,ii:.       
.                                     .     ..:ii:::,,,,,::;iii:;i;.            
.                                     .         :;:::,,,,,,::;1tfi.             
.                                                ;;;;:,,,...,,;i;.              
.                                                ,i;;:::::,,...                 
.                                                ,i;;;::::,,:                   
.                                                i1111ii;::1i.                  
.                                               .ii1111111tft:                  
.                                     .          .:;;;::;ii;:.   Panik          `,
  'Leonardo Dicaprio Cheers': `                                  .:;it1i;:,,..                                 
                               .:i1tfffLLLf1i;,,,.                              
                             .:;;i1tffLfLLCLti:,,,,.                            
                           .,,,:iLLLLLffffftti;:,,,,.                           
                           :,,,;11i;;i11ii:,,,,,,,,,,,                          
                          ,:..,:;,.,,,:;;::,...,,:,,.,.                         
                          ;,..,,,:tf1;;;::::::::;;:,..,                         
                          ,....,;fLLCCCCLt111tt1;;;,,.,                         
                          ....,i1ttffLCCCLfffft1;;::,.,                         
                          ....,i11ttfLLLLfffftt1;;:::.,                         
                          ::..,;tt1tffLCLLLffffti::::,,                         
                          ;i,.:i1ttt1ttffLLfLL1:,,,,,:.                         
            .1i:      .....11:;11i;;;::,:;1tt;,,::,,::                          
            ;0Ct1:..,Lif1,:ifLf11ii11ii;:;ift::;;;;;;:                          
             :t1ti::,:,::,,,iLfLftt1t1ttfCLCC;i1ttf1i:                          
              ;11ii:;ii1;f0Ci11fiifLttGGCLLLG1;;i11i;,                          
              1Lt1111i...;t1::::,,iLftf1itttf1:::::::.                          
            .iC0GGG00C:...  :1;Gi,,iii;itti;;:::,:;;:                           
            tftft1iii;:,:;1tfC;:;:;1t1tttttft1;::;::.                           
            .1fti;i1ttfLLCG00CffCt,:;;i1ffft1ii;;,,,                            
            .LGCffffffffttffftti:,..,,,:i1tfft1;,;;..                           
           .;L1tftt1iii111iii:.......,i:,,::::,,:i;...                          
          ..Lt:1fLfft11it1,;: ........;t,........ .......                       
         .,.G1,i;;;i11ii:.,,,...........,...... ...... ..,..                    
        ,,..GG,;;;::;:;i..,:,................,::,..............                 
       ,....i@1,;111;it, .,::..............;fLLtf1,...............              
      ,..... t@;:1iiGG, ...:: .............,f00GGC; ................            
     ,....... L8:.18G, ...it1,...............t880G1..................           
    ,..........8L1@C.,;iiitt1iiii:........... t808f ..................          
   ............,:;i..,,::,:,,,,................f08t ...................         
   ,...........    ...  ........................fG; ...............  .,         
  ..............................................,i.................;, .,        
  ,................................................................Lt...,       
 ,............................................................... ;i:...,,      
.,.................................................................  ....,,     
,.........................................................................,.    
,..........................................................................,    
...........................................................................,.   
  ..........................................................................,   
      ......,. ..............................................................,  
             ,................................................................, 
              ,...............................................................,.
               , ..............................................................,`,
  'Grant Gustin over grave': `                                        .,,..                                   
                                      .,;iiii;.                                 
                                     .,:itLCt;i:      ..                        
                                      .iLGGCGGGf,.,...,,,,.                     
                                       ,1LGGG00f;:......,,:,...                 
                                        ,1fLGGGf,,.   ......,,,,,,.             
                                        .,,ifffL;...        .....,,,,           
                                        1;.;:.,:..             .....,,          
                                       iGfLi,  :i..           ......,,          
                                      iGGGL,    ,...     .     ......,..        
:;::,                                ,LGL1,..       .          ......,::,.      
11ii:                                ,fCG:...                 .......,,:,,      
1iii,             ....,,,,......     .1f1.                    ........,:,,.     
iiii,        ..,::;;;;;;;;;;;;;:::;;;:::,.                 .  .,:::::..,..,     
iiiii;;;::,::;;;;;;;;;;;;;;;i;;;;;;;;::;;;:,.                .tG000Gf:......    
11iiiiiiiiii;;;;;;;;;;i;;;i;iii;;;;;;::::i;;:.               ;0CLffti:,....,.   
1i;;;;;;;i;;;;;;;;;;;;;;;;iiiii;;;;;:::::::::.               ,t:::,,:,....,..   
;i1i;;;;;;:;;;;;;;;i;i;;;;;;;;;;i;;::::,::::;.                .......  ...,..   
:i11i;ii::;;;;;;;;;;;;;;;;;;;;;;;;;;;::::::::....              ..  ..  .......  
;i;;;;:;::;;;;;;;;;;;;ii;;;;ii;;;;ii;;;::::,,,,,,,,......           .........,. 
i;;;;;;:::;;;;;;;;iiiiiiiii;iiii;;iiiiii;::::,,:,,,............     ,;,......,, 
iii;;;;::::;;i;;;;iiii;iiiiiiiiii;;iiiii;;::::::,,,,,,,........     ,;.......,,.
ii;;;;;;::;;;;;;;;iiiiiii;iiiiiiiiiiiiii;;;;;;:::,,:::,,,..,,..    .,,......... 
`,
  'Whisper and Goosebumps': `      .......                     .,:;::::,,..,::::,.,:::;;;;;;;;;;;iiiiiiii1i11
    ,:::::,,,....                    .,,,::::,,,,,,.,::::;;;;;;;;;;iiiiiii111111
   ,;;;;::::,...,,.                   .,,:::::,,,,:::::::;;;;;;;;;;iiiiiii111111
  .:;iii;;:,... ,:,.                  ,,,::::::::::::::::;;;;;;;;iiiiiiiii111111
  ,:ii;ii;:,....,:,..                ,,,:::;;;;;;;;;:::::;;;;;;;iiiiiiiiii111111
 .,:ii;iii;:,,,.,:,...             .,,::;;;;;;;;;;;;;;;:;;;;;;;;iiiiiiiiii111111
 .::;i;;iii;::,.,:,,....          .,,,:::;iiii;;;;;;;;;;;;;;;;;;iiiiiiiii1111111
 .,:;i;;;ii;:. .,:,,,.....        .,,,,::,:;iii;;;;;;;;;;;;;;;;;;iiiiiiii1111111
  ,:;ii;;i1i,...,,,,,.....         .,,,,,,,,:;ii;;;;;;;;;;;;;;;;;iiiiiiii1111111
   ,:ii;;;ii:,,,,..,,,,.......      ......,,,,:;;;;;;;;;;;i;;;;;iiiiiiiiii111111
    ,;ii;;;ii:,..   ,,,........      ........ .,,:::::;;;;i;ii;iiiiiiiiiiiii1111
..   ,;ii;;;ii:..   .,,,..,.....      ....       ..,,::;;;iiiiiiiiiiiiii11111111
,,..  .:ii;;;ii;,... ..,,..,....      ...... ........,::;;;iiiiiiiiiiii111111111
,,,,.. .:iii;;;;;:::,...,......    ..,,,,,,,::,:,,,::::::;;;iiiiiiiiiii111111111
::,,,,.  ,;ii;;;;::::,,,,......   .,,,,,,::::::::;;;;:::::;;iiiii111111111111111
::::,,,.. ,:ii;;;;:::,,,........  .,,,,,,::::;;;;;;;;;::::;;;;iiiiii111111111111
::::::,,,,..,;;i;;;:,,,,........   .,,,,,:::;;;;;;;;;;;;;;;;;;iiiiii111111111111
;;;;;::::,,,.,,:;;;;:,,,,.......     .,,,,,,:::::;;:;;;;;;;;;;;iiiiiii1111111111
;;;;;;;;:::,,,,.,,,::,,,..........    ,,,,,,,:::::;;;;;;;;;;;;iiiiiiiii11i111111
:;ii;;;;;:::,,,,,,,,,,,,,,.........  .,,,,,,,:::::;;;;;;;;;;;iiiiiiiiiiiiiiii111
::iiiiii;;::::::::,,,,,,,,,,,........,::::::::;;;;;;;;;;;;iiiiiiiiiiiii111111111
,,,:::::,,,,,,,,......................,,,,,,,,,,,,,,,,,::::::::::::::::::::::::;
                                                                                
                                                                                
                                                                                
                   ..        . .......,....,,.,,.,,,,,,,,,,...,.,..   ..        
            .   ..,,,..,,:::::;;;;iiiiii1111111t11t1ttttttttttttt1t11111111iiii;
 ,. .....,::;;:;;;iiii111tttttttttttfftttfttfffftfffffffffffffffffffffffffffffff
;i;;iiii1111111t1tttttttfttttttftttfffffffftfffLfffffLffLfLLfLfLffffffffffffffff
t11ttt1ttttttttttttfffftffffffffffffffffftffffLfffffffffffLLLfffffffffffffffffff
1ttttttftttfftttttttfttttttftftfttfttfffttffffffffttfffftfffffffffffffffffffffff
tt1t1ttttttttttttttttttttttttttttttttttfttftfftttttftttttffttttttfftfftfftftffff
1111111111111111111111111111111111111ttttt1ttt1tttt1tttttttttfttttttttttttfftttt
iiiiiiiiiiiiiiiiiiiiiii1iii1i11ii1111111111t1111tt11t1tttttttttttttttttttttttttt
;;;;;;;;;;;i;;;ii;;i;iiiiiiiiiiiiiiii1iii11111111111111111tt1tttt1111t1t1tt11t11
;;:;:::;;;;;;:;;;;;;;;;;;;;;;;;;;;;;iiiiii;iiiiiiiiii1iiii1ii11111111111111i111i
:::::::::::::::::::::::::;:;::::;;:;;;;;;;;;;;;;;;;;;i;;i;iiiiiiiiiiiiiiiiiiiiii
:::,:,,:::,,,:,,,,:::::::::::::::::::::::::::::::::;;:;:;;;;;;;;;;;;;;;;;;;;;;;;
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,::::::::::::::::::::::::::::::::::::
,,,,,,,,,,,,,.,,.,,..,,..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,,,:::::`,
  'Three-headed Dragon': `                                                   .                            
                            ..                   .:.                            
                            .::.               .:;.                             
                              ,i:.            ,i1.                              
    .                   ,:.    ,ii:  ..,.     :11,       .             .,       
    ,:.               ,;;.  ,. .ii1,,;i:;,:,. ;i1;  ,.   ,i.          ,1,       
     ,1:.            :i1,    :..1i1:ii;iiiiii;11ii.,;     1,          ,t.       
      :1i: .....     ;11:    ::.1i;ii;1f;11;;i1ii: i;    ;i            11       
   ,, ,iii::i;;i.    ;ii;  :.:1:ift1i1t1;11itf1i;.;1,   :t1.    .,;::,,tf;      
    :,:1ii;i;;1ii:. ;ii1i :;.,;iitfftt1iii1ftiit;ii::.. 1tfti, :tt1;iifff1.,,   
   .:;:iiiii;tt;t1;:11i1:.i: :i;ii;ttff;i1itti;t1;;;. ::,1ffffttttf1tttff;;1.   
  ,;;1i;ft11it1i1iitff1:,i1,.:;;tt:;:;1iiii:;i11i;;;,.:t;,;1fftfttffLCL;;it1:.  
 ,;::i1itffft1iii1ffft1i1i;,,:;;111iii1;1t;111;;i;::.. ;ftt11@0tfft0@@Cif1ti;,  
.::;:;;1i:11ff;1iit1i:tt;::. .:;ii;iiiff11tfii111;,, ,;i1iCLG@8t1t1fC0GGf1;iii; 
,:;;;;ifti;;:i;i1;::i1t1;:::.  ,i111i;i1ii1i;it1i:    ,;1tfLCLttt11tttt111;;;;: 
:;;;;;;i11:i11;1ti1t;;iii::.   ;:iii;1i1ttii;i1i:,   .;;11t1t1tfftffttLf11i:;i;.
,iii;;;iiii,iff1tff::1tt;,,.  ,;i111iii1111iittii,     ::i1tf11tttt11LfCCt;i;1:.
;i;111;i1tt:.i;::;;:1t;;.     :ii111t11111ti111i:        ,i;;1ttffttt1LLL1it;1;.
:ii1111;iiii;;.,,,;i:.        .;111tttttttttttti;           :i1iiiiiii111itt;i;.
:;i1111111i:11i11i1:          ;i1111111111111tti:           i1tt11111t1i1i11;1;.
:;i111111111ii111ii.          ;i111t111t111ttt1i;          .11tttttttt111iti;1;.
;;i11tt11111i1111i,          .;i1111111t1111t11;;          ,11ftttttt11111f;i1:.
:;it111111111111ti;          .iitt11111111111tt;;.         ;11ttt111t1i1itt;i1: 
:;;i11111tttttttti:           ;i111ttttttttt111;;         ,11fttttttt111if1;1i, 
:;;i111111111111t1;.          ;itttt111ttttttt1;:         ;1tttttttt1i11ifiii;. 
,:;;11itt1111t1111;.         ,;i111111111111111i:        ,11tttttttft11i1t;11:. 
 ::;;1i11111tt1111i,         .;i111ttttttttttt1;:       .1ifttttttt1111if1;1;:  
  :;i1111111111111ti:.       ,iit1111111111t1t1;:      .1ittt1111tt111i1f;ii:   
  .:i;1t111i1111111ti;       ,;;111tttttt1t1tt1;;     .111ttttttttt111iti;1;.   
   ,:;i111111111111tt1;.      ;;1t111111111tttti,    .111fttttt111111i1t;1i;.   
    .;;;111t1111ttt111ti:     ;;i1111111t111t1ti;.  .ii1fttttttff1111it;ii;.    
    .,;;11111111111t111ii:.   :;i1111t1tttt1t11i;, .111ttttttt111i11itt;1;,     
`,
  Stonks: `                                                           ,1,                  
                              ......                     .ifL1                  
                           .;1ttttLLf1,                 ;fffff,                 
                          :LCLfttfLLLLL:              ,tffffffi                 
                         ,CCCLf11ff1tff;            ,1Lffffffff.                
                         iLttt11ifLLLfft.           :iitffffffLi                
                         ;t1111ii1fffff1               ffffft;i1.               
                         ,1iiiiii1tt1it,              ifffff,                   
                          ;1i;;;;i1tff:              .fffff1                    
                          ,t1ii;:::;i;               ifffff,                    
                         .,;11iii;:                 .fffff1                     
                    ..,,.,,.,iftitGi...             ifffff,                     
                .,,,::::,,,,..;LLLGt::::,,,.       .fffff1                      
                ;,,,,,,,,,,,,,.,;tfi,::,,::::,     ;fffff,                      
                ::,,,,,,,,..,:,,.:ft,::,,:,,::.   .fffff1                       
                ,i:,,,,,,,,..,,,,,,;,:::,:,,,::   ;fffff,                       
                .1:,,,,,,,,..,,,:,,,::,,,:,,,,:, .fffff1                        
                 ;;:,,,,,:, ..,,,::,,,:,,:,,,,::.,1tfff:                        
                 ,1;:,,,,;f:.,,,,,,:,..,,:,..,,::,  ..,                         
                  ;i::,,,,,:,,:,,:,:::,,,;1:,.,,,:,                             
                  .;;;:,,,,,,,,,::::::::::LGC;,,,,:.                            
                   .;;:,,.,,,,,,,,,,,,,,:::;;:,,,,,:                            
                    ,:::,.....,,,,,,,,,,,:,,,,,,,,,:.                           
                    ....,....,,,,,,.....,,,,,,,,,,,,.                           
                    ,,..     .,::;:........,,,,,...                             
                    :,,......      ............                                 
                    :,...........   ....:,...,.                                 
                    ,,............. ...,1;,,,,.                                 
                                        ..                                      `,
  'Disappointed Black Guy': `                                               C80Gf1i;;::::::;;;i1tLCCCG1      
                                              :888Ct1i;;;::::;;;iii1fCCGGL      
                                              f@@8Ltt1ii;;:::;;;ii11tLCGCt      
                                             .GLfCfti;:,,,::,,::;ii11tLCC1.     
                                             ,Gf,:i1,....,;::,,:;ii11tLGGGC.    
                                              1f,::G;...,,.:,,,:;iii1tfCGGG.    
                                              f8ii00i,..,::::;;;;;ii11tCG0f     
                                             :880@@fi;:,,:i1t1i;;;;;;itLGC,     
                                             ;0;C0fi;::,.:;;;:,,,,,,:;1Li.      
                                              i,i0t,....,::,,......,,;tf11fffi. 
                                               ,,G8ti:,.,,,........,,:;;fCCCGGCt
                                                .1fLCLftt1i:,..........,,::;;;i;
                                           ,,,.,.;@LL0Ct11;:,...................
                                        ...,,,.,. f8L08C;,,.....      ......... 
                                      .,:. .      ,Ci:,. .....       .....      
                                        ..         ;Li:,,,..                    
                                            .   :::,::,,.........,,,:::::       
                                              .L@88G1i;;:::::;;ii1fC0888@t      
                                              t@88G1;:;::::::::;;;itLG0880.     
                                              C@88C1ii;::::::::;;;i1fCG000,     
                                              G@8Ct1ii;,,,,,,::;;;i1tLC00C.     
                                             .Ct:.,:,... .:,.,,,:;i11tLG0C.     
                                              ft.,,t;....,,::,.,:;ii11LG880;    
                                              ,L::i8i...,,,::,:;ii;i11fC0081    
                                              ;@Ct0C:,,,,:::;iiii;;;;;1LG0G,    
                                              1@@@81;:,..:;;ii;::,,,,:ifCC;     
                                              ;@GLi:.... ,::::,.....,:;ff: ..   
                                              .GCGL.,...,,,,........,,;1fLG00Gt;
                                               ,0@81;................,,,:11tfLGf
                                                i1,.,......    ............,,,,,
                                         ..,,.., iG,tfffti,.            ........
                                       ,,,..     .8CfCC1:.                      
                                      ...         ,11i,                         
                                                   ,1:....                      `,
  'Boardroom Meeting Suggestion': `                    .                                                           
 .:,,,.           ,,:.,,.   .                                                   
 ,11ffft;        ;;i:i;,.   .                        .,:,..            .,,,::;: 
 .;:1ffLL1     .,i0CLG;                              :CfG1,            .it,,,:. 
 ,;;;fftt1. .itftfGfLii;                             ,GG8C.            .i0LL:,. 
 ,;;;1i;i;. :CLtf11f;;fLi                             itGC.             ,f88;,; 
 .;;;i1tL;  :LLtff1itLitL,                           :;;Ctff1:::;,    .;;1LG;,, 
 .;:iLfff.  ;Cfi1fi;11fiLf.             . .         .ftfCitCGCt1CL   .1t1tfL;;: 
 .;;t1it;   1Lf1;iii;G@ftL1                         ,ftCfLL;LGf1ft   ;fftfCtLC; 
 .;itt;     ;tti,....::::1GL1:,.                    ,i1i1ff1iLL111   t1Lf;;tCC: 
 ,;;itf1;,  :C0Gi,       ,i1ttt:                     ..,,,,:,:;;ii  .1ii1ii111, 
 .;;;;tLff;  .,,                                                     ..,,:::;;, 
 ,i;;;iLLLL:                                                                    
 .:::::i111;                                                                    
                                                                                
                                                                                
                                                   ..................           
                                       .        ..                    .         
         .                                      .                      .        
         ..                 .,         .        ..                    ..        
              .,,,..         .     .,,,,:,        .... ......... .. .           
              :Cff;,              ..1Li;,,.           ...     ..,,,.            
              ;CLGG.               .tGL0;..             ,.    .:t;,:,           
           :.  1tCG,                :LGC:.                     C0001:           
         .iL, ,;1Gffi;.           ;1;i1;.1t:           ,.,;;::;00GCGL.          
         .10;:GtfC1fCCC,         iftftLti;fG:         1tf8@@8G0GfLC8,           
          ,LttfffLfCff0;         1tfftf1LfiGt         iL880@@0CL0880G.          
           ;Li;1:;iti1L;         ;1;i:;ii;;ft        .f80CG0GGCCCf8G@G.         
                                                      :itLCLffLC;.,:fG.         
                                                           .:111,               
                                                                                
                                      ::,:;iiiiiiii;;:                          
        .. ...........                .,,f@@@@@8@@@@@@Gf;.                      
        ,,,,,,,...,,,.                  .1@@808:;iiG0L08@1                      
        ... ;i:;t:i:..                   i@@888111;L0LGC81                      
         iL.tCCC0Lf,                     i888880@8800@@88t                      
         .CLG0CfLCt                      ;@@@@@888888880@t                      
       .,;LL0CfLfL:          .      .....,tftC@0888880GG8f.                     
 .,::;iiCCf1LC0fC1.,...  ........   . ,;..:;:f@0@@@00C8GGt..                    
 .::::,.:,......            ....          ;;:L@0@@@08G8GGi.;;.                  
                         ....,,::,,       ;11C@08888800G81 ,:,.                 
                          .:tii:,::,      0@@@@@880G@GftGt                      
                           t888GL:,,      C880@GGG1i8G0881                      
                          .0GG8@LLL.      C@@08G000000@881                      
                           C@88G08;       L@@G80888888@081                    . 
                     :;;;itLCCL1LL,    ..,L888@888008f1iC1                    . 
                     ,,,,...           L@@@@80@088@88L08@1                      
                                       :1i::::i;ii1iii1ii,                     `,
};
