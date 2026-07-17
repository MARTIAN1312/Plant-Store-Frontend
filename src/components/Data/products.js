const products= [
    {
        id:1,
        name:"Alokazia Amazonian",
        price:23.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_bd144ee3f21e4c4f8ef5f0587a144371~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_bd144ee3f21e4c4f8ef5f0587a144371~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_c98dc1003fe7404887b76f38882665c2~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c98dc1003fe7404887b76f38882665c2~mv2.png'
        
    },
    {
        id:2,
        name:'Anthurium Clarinervium',
        price:16.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_b210ae86c3b446f3a2fc09ae50ebe971~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_b210ae86c3b446f3a2fc09ae50ebe971~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3686a84f54af4a98b4e2be3e55bb559f~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3686a84f54af4a98b4e2be3e55bb559f~mv2.png'
    },
    {
        id:3,
        name:'Cactus',
        price:19.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_843114c3413143ba96b82c284c890e88~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_843114c3413143ba96b82c284c890e88~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_d35214efbdfb4f279e66ff6091351ae6~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d35214efbdfb4f279e66ff6091351ae6~mv2.png'
    },
    {
        id:4,
        name:'Cereus',
        price:15.00,
        imageBefore:'https://static.wixstatic.com/media/c837a6_949ced22a4644932a3824f770682d6e4~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_949ced22a4644932a3824f770682d6e4~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_2c1cfd4a6176464c9232c62d90f04cbf~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2c1cfd4a6176464c9232c62d90f04cbf~mv2.png'
    },
    {
        id:5,
        name:'Crassula',
        price:19.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_884175ddc4ff47109b3656d845399823~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_884175ddc4ff47109b3656d845399823~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_e332ae7dd95f4fb3a0c0ff4d55638e17~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e332ae7dd95f4fb3a0c0ff4d55638e17~mv2.png'
    },
    {
        id:6,
        name:'Ficus lyrata',
        price:35.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_268b2bb21674492e8f23b2c52ae6125b~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_268b2bb21674492e8f23b2c52ae6125b~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_445a44602c654a23837cb6c70828bda3~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_445a44602c654a23837cb6c70828bda3~mv2.png'
    },
    {
        id:7,
        name:'Metal Pot',
        price:19.49,
        imageBefore:'https://static.wixstatic.com/media/c837a6_22c976f0806c4ba2b2e0b27cc356b271~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_22c976f0806c4ba2b2e0b27cc356b271~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_b3650060e6e74f5cbb28206c0042d7d8~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_b3650060e6e74f5cbb28206c0042d7d8~mv2.png'
    },
    {
        id:8,
        name:'Monstera',
        price:26.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_4f12f92bd7cf47969455d604fec3e42a~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_4f12f92bd7cf47969455d604fec3e42a~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_dc77123770a744eca77dd06d54111295~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_dc77123770a744eca77dd06d54111295~mv2.png'
    },
    {
        id:9,
        name:'Raphis Palm',
        price:14.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png'
    },
    {
        id:10,
        name:'Schefflera Arboricola',
        price:24.74,
        imageBefore:'https://static.wixstatic.com/media/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png'
    },
    {
        id:11,
        name:'Zamioculcas',
        price:19.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_27d68e7d7e0e43afb44db8900000fe61~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_27d68e7d7e0e43afb44db8900000fe61~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_a9d8535a935e4541b4150b871a5a3549~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9d8535a935e4541b4150b871a5a3549~mv2.png'
    },
    

]