const mailModel = (dynamicKey, link, firstName, lastName) => {
  const mailContent = {
    verify: {
      title: "Confirmez votre compte",
      description:
        "Vous avez récemment créé un compte sur KharrazInformatique. Pour terminer votre inscription, veuillez confirmer votre compte.",
      btnContent: "Confirmer votre compte",
    },
    forgotPassword: {
      title: "MOT DE PASSE OUBLIÉ?",
      description: "Il y a eu une demande de changement de mot de passe !",
      btnContent: "Réinitialiser le mot de passe",
    },
  };
  return (
    "<!doctype html>\n" +
    "<html ⚡4email>\n" +
    ' <head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script> \n' +
    "   \n" +
    "  <style amp-custom>\n" +
    '@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px; line-height:150% } h1 { font-size:20px; text-align:center; line-height:120% } h2 { font-size:16px; text-align:left; line-height:120% } h3 { font-size:20px; text-align:center; line-height:120% } h1 a { font-size:20px } h2 a { font-size:16px; text-align:left } h3 a { font-size:20px } .es-menu td a { font-size:14px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:10px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:block } a.es-button { font-size:14px; display:block; border-left-width:0px; border-right-width:0px } .es-btn-fw { border-width:10px 0px; text-align:center } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0px } td.es-m-p0r { padding-right:0px } td.es-m-p0l { padding-left:0px } td.es-m-p0t { padding-top:0px } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { display:table-row; width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } .es-desk-menu-hidden { display:table-cell } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } }\n' +
    "a[x-apple-data-detectors] {\n" +
    "	color:inherit;\n" +
    "	text-decoration:none;\n" +
    "	font-size:inherit;\n" +
    "	font-family:inherit;\n" +
    "	font-weight:inherit;\n" +
    "	line-height:inherit;\n" +
    "}\n" +
    ".es-desk-hidden {\n" +
    "	display:none;\n" +
    "	float:left;\n" +
    "	overflow:hidden;\n" +
    "	width:0;\n" +
    "	max-height:0;\n" +
    "	line-height:0;\n" +
    "}\n" +
    ".es-button-border:hover a.es-button {\n" +
    "	background:#FFFFFF;\n" +
    "	border-color:#FFFFFF;\n" +
    "}\n" +
    ".es-button-border:hover {\n" +
    "	background:#FFFFFF;\n" +
    "	border-style:solid solid solid solid;\n" +
    "	border-color:#3D5CA3 #3D5CA3 #3D5CA3 #3D5CA3;\n" +
    "}\n" +
    "s {\n" +
    "	text-decoration:line-through;\n" +
    "}\n" +
    "body {\n" +
    "	width:100%;\n" +
    '	font-family:helvetica, "helvetica neue", arial, verdana, sans-serif;\n' +
    "}\n" +
    "table {\n" +
    "	border-collapse:collapse;\n" +
    "	border-spacing:0px;\n" +
    "}\n" +
    "table td, html, body, .es-wrapper {\n" +
    "	padding:0;\n" +
    "	Margin:0;\n" +
    "}\n" +
    ".es-content, .es-header, .es-footer {\n" +
    "	table-layout:fixed;\n" +
    "	width:100%;\n" +
    "}\n" +
    "p, hr {\n" +
    "	Margin:0;\n" +
    "}\n" +
    "h1, h2, h3, h4, h5 {\n" +
    "	Margin:0;\n" +
    "	line-height:120%;\n" +
    '	font-family:arial, "helvetica neue", helvetica, sans-serif;\n' +
    "}\n" +
    ".es-left {\n" +
    "	float:left;\n" +
    "}\n" +
    ".es-right {\n" +
    "	float:right;\n" +
    "}\n" +
    ".es-p5 {\n" +
    "	padding:5px;\n" +
    "}\n" +
    ".es-p5t {\n" +
    "	padding-top:5px;\n" +
    "}\n" +
    ".es-p5b {\n" +
    "	padding-bottom:5px;\n" +
    "}\n" +
    ".es-p5l {\n" +
    "	padding-left:5px;\n" +
    "}\n" +
    ".es-p5r {\n" +
    "	padding-right:5px;\n" +
    "}\n" +
    ".es-p10 {\n" +
    "	padding:10px;\n" +
    "}\n" +
    ".es-p10t {\n" +
    "	padding-top:10px;\n" +
    "}\n" +
    ".es-p10b {\n" +
    "	padding-bottom:10px;\n" +
    "}\n" +
    ".es-p10l {\n" +
    "	padding-left:10px;\n" +
    "}\n" +
    ".es-p10r {\n" +
    "	padding-right:10px;\n" +
    "}\n" +
    ".es-p15 {\n" +
    "	padding:15px;\n" +
    "}\n" +
    ".es-p15t {\n" +
    "	padding-top:15px;\n" +
    "}\n" +
    ".es-p15b {\n" +
    "	padding-bottom:15px;\n" +
    "}\n" +
    ".es-p15l {\n" +
    "	padding-left:15px;\n" +
    "}\n" +
    ".es-p15r {\n" +
    "	padding-right:15px;\n" +
    "}\n" +
    ".es-p20 {\n" +
    "	padding:20px;\n" +
    "}\n" +
    ".es-p20t {\n" +
    "	padding-top:20px;\n" +
    "}\n" +
    ".es-p20b {\n" +
    "	padding-bottom:20px;\n" +
    "}\n" +
    ".es-p20l {\n" +
    "	padding-left:20px;\n" +
    "}\n" +
    ".es-p20r {\n" +
    "	padding-right:20px;\n" +
    "}\n" +
    ".es-p25 {\n" +
    "	padding:25px;\n" +
    "}\n" +
    ".es-p25t {\n" +
    "	padding-top:25px;\n" +
    "}\n" +
    ".es-p25b {\n" +
    "	padding-bottom:25px;\n" +
    "}\n" +
    ".es-p25l {\n" +
    "	padding-left:25px;\n" +
    "}\n" +
    ".es-p25r {\n" +
    "	padding-right:25px;\n" +
    "}\n" +
    ".es-p30 {\n" +
    "	padding:30px;\n" +
    "}\n" +
    ".es-p30t {\n" +
    "	padding-top:30px;\n" +
    "}\n" +
    ".es-p30b {\n" +
    "	padding-bottom:30px;\n" +
    "}\n" +
    ".es-p30l {\n" +
    "	padding-left:30px;\n" +
    "}\n" +
    ".es-p30r {\n" +
    "	padding-right:30px;\n" +
    "}\n" +
    ".es-p35 {\n" +
    "	padding:35px;\n" +
    "}\n" +
    ".es-p35t {\n" +
    "	padding-top:35px;\n" +
    "}\n" +
    ".es-p35b {\n" +
    "	padding-bottom:35px;\n" +
    "}\n" +
    ".es-p35l {\n" +
    "	padding-left:35px;\n" +
    "}\n" +
    ".es-p35r {\n" +
    "	padding-right:35px;\n" +
    "}\n" +
    ".es-p40 {\n" +
    "	padding:40px;\n" +
    "}\n" +
    ".es-p40t {\n" +
    "	padding-top:40px;\n" +
    "}\n" +
    ".es-p40b {\n" +
    "	padding-bottom:40px;\n" +
    "}\n" +
    ".es-p40l {\n" +
    "	padding-left:40px;\n" +
    "}\n" +
    ".es-p40r {\n" +
    "	padding-right:40px;\n" +
    "}\n" +
    ".es-menu td {\n" +
    "	border:0;\n" +
    "}\n" +
    "a {\n" +
    '	font-family:helvetica, "helvetica neue", arial, verdana, sans-serif;\n' +
    "	font-size:16px;\n" +
    "	text-decoration:none;\n" +
    "}\n" +
    "h1 {\n" +
    "	font-size:20px;\n" +
    "	font-style:normal;\n" +
    "	font-weight:normal;\n" +
    "	color:#333333;\n" +
    "}\n" +
    "h1 a {\n" +
    "	font-size:20px;\n" +
    "}\n" +
    "h2 {\n" +
    "	font-size:14px;\n" +
    "	font-style:normal;\n" +
    "	font-weight:normal;\n" +
    "	color:#333333;\n" +
    "}\n" +
    "h2 a {\n" +
    "	font-size:14px;\n" +
    "}\n" +
    "h3 {\n" +
    "	font-size:20px;\n" +
    "	font-style:normal;\n" +
    "	font-weight:normal;\n" +
    "	color:#333333;\n" +
    "}\n" +
    "h3 a {\n" +
    "	font-size:20px;\n" +
    "}\n" +
    "p, ul li, ol li {\n" +
    "	font-size:16px;\n" +
    '	font-family:helvetica, "helvetica neue", arial, verdana, sans-serif;\n' +
    "	line-height:150%;\n" +
    "}\n" +
    "ul li, ol li {\n" +
    "	Margin-bottom:15px;\n" +
    "}\n" +
    ".es-menu td a {\n" +
    "	text-decoration:none;\n" +
    "	display:block;\n" +
    "}\n" +
    ".es-menu amp-img, .es-button amp-img {\n" +
    "	vertical-align:middle;\n" +
    "}\n" +
    ".es-wrapper {\n" +
    "	width:100%;\n" +
    "	height:100%;\n" +
    "}\n" +
    ".es-wrapper-color {\n" +
    "	background-color:#FAFAFA;\n" +
    "}\n" +
    ".es-content-body {\n" +
    "	background-color:#FFFFFF;\n" +
    "}\n" +
    ".es-content-body p, .es-content-body ul li, .es-content-body ol li {\n" +
    "	color:#666666;\n" +
    "}\n" +
    ".es-content-body a {\n" +
    "	color:#0B5394;\n" +
    "}\n" +
    ".es-header {\n" +
    "	background-color:transparent;\n" +
    "}\n" +
    ".es-header-body {\n" +
    "	background-color:#FFFFFF;\n" +
    "}\n" +
    ".es-header-body p, .es-header-body ul li, .es-header-body ol li {\n" +
    "	color:#333333;\n" +
    "	font-size:14px;\n" +
    "}\n" +
    ".es-header-body a {\n" +
    "	color:#1376C8;\n" +
    "	font-size:14px;\n" +
    "}\n" +
    ".es-footer {\n" +
    "	background-color:transparent;\n" +
    "}\n" +
    ".es-footer-body {\n" +
    "	background-color:transparent;\n" +
    "}\n" +
    ".es-footer-body p, .es-footer-body ul li, .es-footer-body ol li {\n" +
    "	color:#333333;\n" +
    "	font-size:14px;\n" +
    "}\n" +
    ".es-footer-body a {\n" +
    "	color:#333333;\n" +
    "	font-size:14px;\n" +
    "}\n" +
    ".es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li {\n" +
    "	line-height:120%;\n" +
    "	font-size:12px;\n" +
    "	color:#CCCCCC;\n" +
    "}\n" +
    ".es-infoblock a {\n" +
    "	font-size:12px;\n" +
    "	color:#CCCCCC;\n" +
    "}\n" +
    "a.es-button {\n" +
    "	border-style:solid;\n" +
    "	border-color:#FFFFFF;\n" +
    "	border-width:15px 20px 15px 20px;\n" +
    "	display:inline-block;\n" +
    "	background:#FFFFFF;\n" +
    "	border-radius:10px;\n" +
    "	font-size:14px;\n" +
    '	font-family:arial, "helvetica neue", helvetica, sans-serif;\n' +
    "	font-weight:bold;\n" +
    "	font-style:normal;\n" +
    "	line-height:120%;\n" +
    "	color:#3D5CA3;\n" +
    "	text-decoration:none;\n" +
    "	width:auto;\n" +
    "	text-align:center;\n" +
    "}\n" +
    ".es-button-border {\n" +
    "	border-style:solid solid solid solid;\n" +
    "	border-color:#3D5CA3 #3D5CA3 #3D5CA3 #3D5CA3;\n" +
    "	background:#FFFFFF;\n" +
    "	border-width:2px 2px 2px 2px;\n" +
    "	display:inline-block;\n" +
    "	border-radius:10px;\n" +
    "	width:auto;\n" +
    "}\n" +
    "</style> \n" +
    " </head> \n" +
    " <body> \n" +
    '  <div class="es-wrapper-color"> \n' +
    '   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"> \n' +
    "     <tr> \n" +
    '      <td valign="top"> \n' +
    '       <table cellpadding="0" cellspacing="0" class="es-content" align="center"> \n' +
    "         <tr> \n" +
    '          <td class="es-adaptive" align="center"> \n' +
    '           <table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p10" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0"> \n' +
    "                 <tr> \n" +
    '                  <td width="580" valign="top" align="center"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table> \n" +
    '       <table cellpadding="0" cellspacing="0" class="es-header" align="center"> \n' +
    "         <tr> \n" +
    '          <td class="es-adaptive" align="center"> \n' +
    '           <table class="es-header-body" style="background-color: #3d5ca3" width="600" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p20t es-p20b es-p20r es-p20l" style="background-color: #3d5ca3" bgcolor="#3d5ca3" align="left"> \n' +
    '               <table class="es-left" cellspacing="0" cellpadding="0" align="left"> \n' +
    "                 <tr> \n" +
    '                  <td class="es-m-p20b" width="270" align="left"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    '                      <td class="es-m-p0l es-m-txt-c" align="left" style="font-size:0"><a href="https://viewstripo.email" target="_blank"><amp-img src="https://hjdnfl.stripocdn.email/content/guids/CABINET_66498ea076b5d00c6f9553055acdb37a/images/12051527590691841.png" alt style="display: block" width="183" height="57"></amp-img></a></td> \n' +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table> \n" +
    '               <table class="es-right" cellspacing="0" cellpadding="0" align="right"> \n' +
    "                 <tr> \n" +
    '                  <td width="270" align="left"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table> \n" +
    '       <table class="es-content" cellspacing="0" cellpadding="0" align="center"> \n' +
    "         <tr> \n" +
    '          <td style="background-color: #fafafa" bgcolor="#fafafa" align="center"> \n' +
    '           <table class="es-content-body" style="background-color: #ffffff" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p40t es-p20r es-p20l" style="background-color: transparent;background-position: left top" bgcolor="transparent" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0"> \n' +
    "                 <tr> \n" +
    '                  <td width="560" valign="top" align="center"> \n' +
    '                   <table style="background-position: left top" width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    '                      <td class="es-p5t es-p5b" align="center" style="font-size:0"><amp-img src="https://hjdnfl.stripocdn.email/content/guids/CABINET_dd354a98a803b60e2f0411e893c82f56/images/23891556799905703.png" alt style="display: block" width="175" height="208"></amp-img></td> \n' +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p15t es-p15b" align="center"><h1 style="color: #333333;font-size: 20px"><strong>' +
    mailContent[dynamicKey].title +
    "</strong></h1></td> \n" +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p40r es-p40l" align="left"><p style="text-align: center">Bonjour,&nbsp;' +
    firstName +
    " " +
    lastName +
    "</p></td> \n" +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p35r es-p40l" align="left"><p style="text-align: center">\n' +
    mailContent[dynamicKey].description +
    "</p></td> \n" +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p25t es-p40r es-p40l" align="center"><p>Si vous n\'avez pas fait cette demande, ignorez simplement cet e-mail. Sinon, veuillez cliquer sur le bouton ci-dessous </p></td> \n' +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p40t es-p40b es-p10r es-p10l" align="center"><span class="es-button-border"><a href="' +
    link +
    '/" class="es-button" target="_blank">\n' +
    "" +
    mailContent[dynamicKey].btnContent +
    "</a></span></td> \n" +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "             <tr> \n" +
    '              <td class="es-p20t es-p10r es-p10l" style="background-position: center center" align="left"> \n' +
    '               <table class="es-left" cellspacing="0" cellpadding="0" align="left"> \n' +
    "                 <tr> \n" +
    '                  <td width="199" align="left"> \n' +
    '                   <table style="background-position: center center" width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    '                      <td class="es-p15t es-m-txt-c" align="right"><p style="font-size: 16px;color: #666666"><strong>Contact us:</strong></p></td> \n' +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table> \n" +
    '               <table class="es-right" cellspacing="0" cellpadding="0" align="right"> \n' +
    "                 <tr> \n" +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "             <tr> \n" +
    '              <td class="es-p5t es-p20b es-p20r es-p20l" style="background-position: left top" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0"> \n' +
    "                 <tr> \n" +
    '                  <td width="560" valign="top" align="center"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    '                      <td align="center"><p style="font-size: 14px">Contact us: <a target="_blank" style="font-size: 14px;color: #666666" href="tel:(216) 31 400 421">(216) 31 400 421</a> | <a  style="font-size: 14px;color: #666666">contact@kharrazinformatique.com</a></p></td> \n' +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table> \n" +
    '       <table class="es-footer" cellspacing="0" cellpadding="0" align="center"> \n' +
    "         <tr> \n" +
    '          <td style="background-color: #fafafa" bgcolor="#fafafa" align="center"> \n' +
    '           <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p10t es-p30b es-p20r es-p20l" style=" background-color: #0b5394;background-position: left top" bgcolor="#0b5394" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0"> \n' +
    "                 <tr> \n" +
    '                  <td width="560" valign="top" align="center"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    '                      <td class="es-p5t es-p5b" align="left"><h2 style="font-size: 16px;color: #ffffff"><strong>Have quastions?</strong></h2></td> \n' +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p5b" align="left"><p style="font-size: 14px;color: #ffffff">We are here to help, learn more about us <a target="_blank" style="font-size: 14px;color: #ffffff;text-decoration: none">here</a></p><p style="font-size: 14px;color: #ffffff">or <a target="_blank" style="font-size: 14px;text-decoration: none;color: #ffffff">contact us</a><br></p></td> \n' +
    "                     </tr> \n" +
    "                   </table></td> \n" +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table> \n" +
    '       <table class="es-content" cellspacing="0" cellpadding="0" align="center"> \n' +
    "         <tr> \n" +
    '          <td style="background-color: #fafafa" bgcolor="#fafafa" align="center"> \n' +
    '           <table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p15t" style="background-position: left top" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0"> \n' +
    "                 <tr> \n" +
    '                  <td width="600" valign="top" align="center"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    "                     <tr> \n" +
    "                      <td> \n" +
    '                       <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation"> \n' +
    '                         <tr class="links"> \n' +
    "                         </tr> \n" +
    "                       </table></td> \n" +
    "                     </tr> \n" +
    "                     <tr> \n" +
    '                      <td class="es-p20b es-p20r es-p20l" align="center" style="font-size:0"> \n' +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table> \n" +
    '       <table class="es-footer" cellspacing="0" cellpadding="0" align="center"> \n' +
    "         <tr> \n" +
    '          <td style="background-color: #fafafa" bgcolor="#fafafa" align="center"> \n' +
    '           <table class="es-footer-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p15t es-p5b es-p20r es-p20l" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0"> \n' +
    "                 <tr> \n" +
    '                  <td width="560" valign="top" align="center"> \n' +
    "                 </tr> \n" +
    "               </table></td> \n" +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table> \n" +
    '       <table class="es-content" cellspacing="0" cellpadding="0" align="center"> \n' +
    "         <tr> \n" +
    '          <td align="center"> \n' +
    '           <table class="es-content-body" style="background-color: transparent" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> \n' +
    "             <tr> \n" +
    '              <td class="es-p30t es-p30b es-p20r es-p20l" align="left"> \n' +
    "             </tr> \n" +
    "           </table></td> \n" +
    "         </tr> \n" +
    "       </table></td> \n" +
    "     </tr> \n" +
    "   </table> \n" +
    "  </div>  \n" +
    " </body>\n" +
    "</html>"
  );
};
module.exports = { mailModel };
