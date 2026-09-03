/* ==========================================================================
   IRS Protect — translations (English / Spanish)
   Text is applied to elements with data-i18n="key" (text content) and
   data-i18n-attr="attr:key;attr2:key2" (attributes). Keys use dot paths,
   so "faqs.0.0" is the first FAQ question.
   ========================================================================== */
(function () {
  'use strict';

  var DICT = {
    en: {
      nav_how: 'How it works', cta_short: 'Join', nav_plans: 'Plans', nav_plus: 'Protect Plus', nav_faq: 'FAQ', faq_short: 'FAQ', login: 'Log in', cta: 'Get Protected', cta_plus: 'Get Protect Plus',
      hero: { complicated: "The IRS is complicated. Your protection shouldn't be.", dontwait: "Don't wait for an IRS letter. Be protected before it arrives." },
      hero_sub: 'Professional help with eligible IRS problems, in place before they become your problem.', hero_backed: 'Backed by Best Vision Accounting',
      cancel_anytime: 'Cancel anytime.',
      hero_disclaimer: 'IRS Protect is a membership program and is not insurance. Eligibility, limitations and exclusions apply.',
      trust_kicker: 'PROFESSIONAL TAX SUPPORT FROM', team_kicker: 'MEET THE TEAM BEHIND YOUR PROTECTION',
      trust_body: 'Every IRS Protect membership is backed by the Best Vision Accounting team, the same professionals who review your notice, prepare the response, and represent you before the IRS.',
      stat_rep: 'in professional representation', stat_month: 'per month to start', stat_anytime: 'Anytime', stat_cancel: 'cancellation', stat_membership: 'Membership', stat_not_ins: 'not insurance',
      your_membership: 'YOUR MEMBERSHIP', active_since: 'Active since Mar 3', eligible_note: 'Notice dated after enrollment. Eligible.',
      f1_title: "Don't wait for an IRS letter. Be protected before it arrives.",
      f1_body: "To qualify, your membership must be active on the date printed on the first IRS notice. A notice dated August 1 isn't covered by a membership that starts August 2, even if you opened the envelope later. Protection starts before the problem does.",
      f1_link: 'Get protected today',
      f2_title: 'Got a letter from the IRS? Send it to us.',
      f2_body: "Most people can't tell whether a CP2000, an examination notice, or a collection notice is serious. You don't have to. Provide the notice, the applicable return, and requested documents, and the Best Vision team determines what the IRS is asking for and what happens next.",
      f2_link: "See what's covered",
      send_notice: 'Send a notice', upload_notice: 'Upload IRS notice', photo_pdf: 'Photo or PDF',
      notice_cp2000: 'Notice CP2000', in_progress: 'In progress',
      timeline: [['Notice and return reviewed', 'Best Vision Accounting'], ['Response to the IRS', 'In progress'], ['Representation and resolution', 'Authorized before the IRS']],
      f3_title: 'Your accounting team handles the IRS matter.',
      f3_body: 'Depending on the situation, Best Vision Accounting prepares correspondence, organizes documentation, communicates with the IRS, and provides authorized professional representation. Keep your membership active and in good standing until the matter is resolved.',
      plans_title: 'Two memberships. One simple difference.',
      plans_sub: 'Both include professional representation from Best Vision Accounting. Plus adds help if the IRS determines you owe more.',
      essential: 'ESSENTIAL', protect_tag: 'Professional representation, in place before the letter.', per_month: '/month',
      protectItems: [['Up to $5,000 in professional representation', 'Professional tax representation services per taxpayer for eligible IRS matters.'], ['Notice and return review', 'We review IRS correspondence, the applicable return, and supporting documents.'], ['Responses and IRS communication', 'Prepared responses and communication with the IRS on your behalf.'], ['Audit and examination help', 'Support during examinations and authorized representation before the IRS.']],
      most_protection: 'MOST PROTECTION', premium: 'PREMIUM', plus_tag: 'Representation plus help if the IRS says you owe more.',
      plus1_t: 'Up to $2,000 toward eligible additional federal tax', plus1_b: 'If a qualifying examination, audit, or covered adjustment leaves you owing more, Best Vision may provide up to $2,000 toward that eligible liability.',
      plus2_t: 'Up to $5,000 in professional representation', plus2_b: 'Everything in IRS Protect is included.',
      plus3_t: 'Notice review, IRS responses, audit support', plus3_b: 'Handled by the Best Vision Accounting team.',
      plans_note: 'The $5,000 represents professional services provided by Best Vision Accounting. It is not cash and does not pay your tax bill. Cancel anytime; fees paid during the first 30 days may be refundable if no program benefit has been requested, received, or initiated.',
      plus_title: 'Get more protection with IRS Protect Plus',
      plus_sub: "Professional representation is one thing. What if the IRS determines you actually owe more? That's where Plus comes in.",
      how2000_t: 'How the $2,000 works', how2000_b: 'Examples established in the membership agreement:',
      table_h1: 'IRS DETERMINES ADDITIONAL ELIGIBLE TAX OF', table_h2: 'PLUS BENEFIT UP TO',
      not2000_t: 'What the $2,000 does not pay', not2000_b: "It's assistance toward eligible additional federal tax liability from a covered matter, not a general credit toward anything owed. Among other exclusions:",
      plusExclusions: ['Taxes already owed before membership', 'Tax originally reported as due on your return', 'Pre-existing IRS liabilities', 'Matters from notices dated before enrollment', 'Fraudulent or intentionally false returns', 'Criminal tax matters', 'Estimated tax payments', 'Government filing/processing fees', 'Amounts unrelated to the covered matter', 'Amounts exceeding $2,000', 'Penalties and interest, unless provided in writing'],
      covered_title: 'What your membership includes',
      covered: [['Notice & correspondence review', 'Reviewing IRS notices and correspondence, the applicable federal tax return, and supporting documents.'], ['Responses to the IRS', "Preparing responses and communicating with the IRS on the member's behalf."], ['Examinations & audits', 'Helping during an IRS examination or audit, with professional representation before the IRS when authorized.'], ['Collection & resolution matters', 'Assistance with eligible IRS collection or resolution matters.']],
      covered_note: 'Not covered: fraud, intentional tax evasion, criminal tax investigations, pre-enrollment IRS matters, intentionally false or incomplete returns, intentionally concealed information, and court/Tax Court representation. Best Vision does not guarantee the outcome of an IRS dispute; the IRS determines federal tax liabilities, penalties, interest, credits, and refunds.',
      faq_title: 'Frequently asked questions',
      faqs: [
        ["What's covered?", 'Eligible IRS matters that arise while your membership is active and in good standing, including reviewing notices and returns, preparing responses, communicating with the IRS on your behalf, help during examinations or audits, authorized professional representation, and assistance with eligible collection or resolution matters.'],
        ["What's not covered?", 'Fraud, intentional tax evasion, criminal tax investigations, pre-enrollment IRS matters, intentionally false or incomplete returns, intentionally concealed information, and court or Tax Court representation. Best Vision Accounting does not guarantee the outcome of an IRS dispute.'],
        ['Can I sign up after receiving a notice?', "No. Your membership must be active and in good standing on the date printed on the first IRS notice relating to the matter. If a notice is dated August 1 and you enroll August 2, that matter isn't covered, even if you opened the letter later."],
        ['Does the $5,000 pay my IRS bill?', 'No. The $5,000 represents up to $5,000 in professional tax representation services provided by Best Vision Accounting. It is not cash and does not pay your tax liability.'],
        ['How does the $2,000 Plus benefit work?', 'If a qualifying IRS examination, audit, or covered adjustment results in additional eligible federal tax owed, Best Vision Accounting may provide up to $2,000 toward that eligible liability. It does not cover pre-existing liabilities, tax originally reported on your return, estimated payments, fees, criminal matters, amounts above $2,000, or generally penalties and interest.'],
        ['Can I cancel?', "Yes, at any time. Fees paid during the first 30 days may be refundable if you haven't requested, received, or initiated a program benefit. After that, paid fees generally aren't refundable."]
      ],
      cta_title: "Don't wait for the letter. Get IRS protection in place today.",
      cta_sub: 'IRS Protect from $10.99/mo · IRS Protect Plus from $19.99/mo',
      foot_price: 'Membership from $10.99/mo', a_product_of: 'A PRODUCT OF',
      foot_body: "IRS problems are unpredictable. Your protection doesn't have to be. Professional tax representation from the Best Vision Accounting team, in place before the letter arrives.",
      col_product: 'PRODUCT', col_company: 'COMPANY', col_legal: 'LEGAL',
      contact: 'Contact us', help: 'Help center', agreement: 'Membership agreement', terms: 'Terms of service', privacy: 'Privacy policy',
      foot_legal: 'IRS Protect and IRS Protect Plus are membership programs offered by Best Vision Accounting and are not insurance. Benefits consist of professional services and, for Protect Plus, eligible IRS liability assistance, each subject to the terms, eligibility requirements, limitations and exclusions of the membership agreement. Membership must be active and in good standing on the date printed on the first IRS notice relating to a matter. Best Vision Accounting does not guarantee the outcome of any IRS dispute.',
      copyright: '© 2026 Best Vision Accounting. All rights reserved.', trademark: 'IRS Protect is a trademark of Best Vision Accounting.'
    },
    es: {
      nav_how: 'Cómo funciona', cta_short: 'Únete', nav_plans: 'Planes', nav_plus: 'Protect Plus', nav_faq: 'Preguntas frecuentes', faq_short: 'Preguntas', login: 'Iniciar sesión', cta: 'Obtén protección', cta_plus: 'Obtén Protect Plus',
      hero: { complicated: 'El IRS es complicado. Tu protección no debería serlo.', dontwait: 'No esperes una carta del IRS. Protégete antes de que llegue.' },
      hero_sub: 'Ayuda profesional con problemas elegibles del IRS, lista antes de que se conviertan en tu problema.', hero_backed: 'Respaldado por Best Vision Accounting',
      cancel_anytime: 'Cancela cuando quieras.',
      hero_disclaimer: 'IRS Protect es un programa de membresía y no es un seguro. Aplican requisitos de elegibilidad, limitaciones y exclusiones.',
      trust_kicker: 'APOYO FISCAL PROFESIONAL DE', team_kicker: 'CONOCE AL EQUIPO DETRÁS DE TU PROTECCIÓN',
      trust_body: 'Cada membresía de IRS Protect está respaldada por el equipo de Best Vision Accounting: los mismos profesionales que revisan tu aviso, preparan la respuesta y te representan ante el IRS.',
      stat_rep: 'en representación profesional', stat_month: 'al mes para empezar', stat_anytime: 'Cuando quieras', stat_cancel: 'cancelación', stat_membership: 'Membresía', stat_not_ins: 'no es un seguro',
      your_membership: 'TU MEMBRESÍA', active_since: 'Activa desde el 3 de marzo', eligible_note: 'Aviso fechado después de la inscripción. Elegible.',
      f1_title: 'No esperes una carta del IRS. Protégete antes de que llegue.',
      f1_body: 'Para calificar, tu membresía debe estar activa en la fecha impresa en el primer aviso del IRS. Un aviso fechado el 1 de agosto no está cubierto por una membresía que inicia el 2 de agosto, aunque hayas abierto el sobre después. La protección empieza antes que el problema.',
      f1_link: 'Protégete hoy',
      f2_title: '¿Recibiste una carta del IRS? Envíanosla.',
      f2_body: 'La mayoría de las personas no sabe si un CP2000, un aviso de examen o un aviso de cobro es grave. Tú no tienes que saberlo. Entrega el aviso, la declaración correspondiente y los documentos solicitados, y el equipo de Best Vision determina qué pide el IRS y qué sigue.',
      f2_link: 'Ver qué está cubierto',
      send_notice: 'Enviar un aviso', upload_notice: 'Sube el aviso del IRS', photo_pdf: 'Foto o PDF',
      notice_cp2000: 'Aviso CP2000', in_progress: 'En proceso',
      timeline: [['Aviso y declaración revisados', 'Best Vision Accounting'], ['Respuesta al IRS', 'En proceso'], ['Representación y resolución', 'Autorizada ante el IRS']],
      f3_title: 'Tu equipo contable se encarga del asunto con el IRS.',
      f3_body: 'Según la situación, Best Vision Accounting prepara la correspondencia, organiza la documentación, se comunica con el IRS y brinda representación profesional autorizada. Mantén tu membresía activa y al corriente hasta que el asunto se resuelva.',
      plans_title: 'Dos membresías. Una diferencia sencilla.',
      plans_sub: 'Ambas incluyen representación profesional de Best Vision Accounting. Plus agrega ayuda si el IRS determina que debes más.',
      essential: 'ESENCIAL', protect_tag: 'Representación profesional, lista antes de la carta.', per_month: '/mes',
      protectItems: [['Hasta $5,000 en representación profesional', 'Servicios de representación fiscal profesional por contribuyente para asuntos elegibles del IRS.'], ['Revisión de avisos y declaraciones', 'Revisamos la correspondencia del IRS, la declaración correspondiente y los documentos de respaldo.'], ['Respuestas y comunicación con el IRS', 'Respuestas preparadas y comunicación con el IRS en tu nombre.'], ['Ayuda en auditorías y exámenes', 'Apoyo durante exámenes y representación autorizada ante el IRS.']],
      most_protection: 'MÁXIMA PROTECCIÓN', premium: 'PREMIUM', plus_tag: 'Representación más ayuda si el IRS dice que debes más.',
      plus1_t: 'Hasta $2,000 para impuesto federal adicional elegible', plus1_b: 'Si un examen, auditoría o ajuste cubierto que califique resulta en que debas más, Best Vision puede aportar hasta $2,000 para esa obligación elegible.',
      plus2_t: 'Hasta $5,000 en representación profesional', plus2_b: 'Todo lo de IRS Protect está incluido.',
      plus3_t: 'Revisión de avisos, respuestas al IRS y apoyo en auditorías', plus3_b: 'A cargo del equipo de Best Vision Accounting.',
      plans_note: 'Los $5,000 representan servicios profesionales prestados por Best Vision Accounting. No es efectivo y no paga tu deuda fiscal. Cancela cuando quieras; las cuotas pagadas durante los primeros 30 días pueden ser reembolsables si no se ha solicitado, recibido o iniciado ningún beneficio del programa.',
      plus_title: 'Más protección con IRS Protect Plus',
      plus_sub: 'La representación profesional es una cosa. ¿Y si el IRS determina que realmente debes más? Para eso está Plus.',
      how2000_t: 'Cómo funcionan los $2,000', how2000_b: 'Ejemplos establecidos en el contrato de membresía:',
      table_h1: 'EL IRS DETERMINA IMPUESTO ADICIONAL ELEGIBLE DE', table_h2: 'BENEFICIO PLUS HASTA',
      not2000_t: 'Lo que los $2,000 no pagan', not2000_b: 'Es una ayuda para la obligación fiscal federal adicional elegible derivada de un asunto cubierto, no un crédito general para cualquier deuda. Entre otras exclusiones:',
      plusExclusions: ['Impuestos ya adeudados antes de la membresía', 'Impuesto declarado originalmente como adeudado en tu declaración', 'Obligaciones preexistentes con el IRS', 'Asuntos de avisos fechados antes de la inscripción', 'Declaraciones fraudulentas o intencionalmente falsas', 'Asuntos fiscales penales', 'Pagos de impuestos estimados', 'Tarifas gubernamentales de presentación o trámite', 'Montos no relacionados con el asunto cubierto', 'Montos que excedan $2,000', 'Multas e intereses, salvo que se indique por escrito'],
      covered_title: 'Qué incluye tu membresía',
      covered: [['Revisión de avisos y correspondencia', 'Revisión de avisos y correspondencia del IRS, la declaración federal correspondiente y los documentos de respaldo.'], ['Respuestas al IRS', 'Preparación de respuestas y comunicación con el IRS en nombre del miembro.'], ['Exámenes y auditorías', 'Ayuda durante un examen o auditoría del IRS, con representación profesional ante el IRS cuando esté autorizada.'], ['Asuntos de cobro y resolución', 'Asistencia con asuntos elegibles de cobro o resolución del IRS.']],
      covered_note: 'No cubierto: fraude, evasión fiscal intencional, investigaciones fiscales penales, asuntos del IRS previos a la inscripción, declaraciones intencionalmente falsas o incompletas, información ocultada intencionalmente y representación ante tribunales o el Tribunal Fiscal. Best Vision no garantiza el resultado de ninguna disputa con el IRS; el IRS determina las obligaciones fiscales federales, multas, intereses, créditos y reembolsos.',
      faq_title: 'Preguntas frecuentes',
      faqs: [
        ['¿Qué está cubierto?', 'Asuntos elegibles del IRS que surjan mientras tu membresía esté activa y al corriente, incluyendo la revisión de avisos y declaraciones, la preparación de respuestas, la comunicación con el IRS en tu nombre, ayuda durante exámenes o auditorías, representación profesional autorizada y asistencia con asuntos elegibles de cobro o resolución.'],
        ['¿Qué no está cubierto?', 'Fraude, evasión fiscal intencional, investigaciones fiscales penales, asuntos del IRS previos a la inscripción, declaraciones intencionalmente falsas o incompletas, información ocultada intencionalmente y representación ante tribunales o el Tribunal Fiscal. Best Vision Accounting no garantiza el resultado de una disputa con el IRS.'],
        ['¿Puedo inscribirme después de recibir un aviso?', 'No. Tu membresía debe estar activa y al corriente en la fecha impresa en el primer aviso del IRS relacionado con el asunto. Si un aviso está fechado el 1 de agosto y te inscribes el 2 de agosto, ese asunto no está cubierto, aunque hayas abierto la carta después.'],
        ['¿Los $5,000 pagan mi deuda con el IRS?', 'No. Los $5,000 representan hasta $5,000 en servicios de representación fiscal profesional prestados por Best Vision Accounting. No es efectivo y no paga tu obligación fiscal.'],
        ['¿Cómo funciona el beneficio Plus de $2,000?', 'Si un examen, auditoría o ajuste cubierto del IRS que califique resulta en impuesto federal adicional elegible adeudado, Best Vision Accounting puede aportar hasta $2,000 para esa obligación elegible. No cubre obligaciones preexistentes, impuesto declarado originalmente en tu declaración, pagos estimados, tarifas, asuntos penales, montos superiores a $2,000 ni, en general, multas e intereses.'],
        ['¿Puedo cancelar?', 'Sí, en cualquier momento. Las cuotas pagadas durante los primeros 30 días pueden ser reembolsables si no has solicitado, recibido o iniciado ningún beneficio del programa. Después de eso, las cuotas pagadas generalmente no son reembolsables.']
      ],
      cta_title: 'No esperes la carta. Ten tu protección ante el IRS lista hoy.',
      cta_sub: 'IRS Protect desde $10.99/mes · IRS Protect Plus desde $19.99/mes',
      foot_price: 'Membresía desde $10.99/mes', a_product_of: 'UN PRODUCTO DE',
      foot_body: 'Los problemas con el IRS son impredecibles. Tu protección no tiene que serlo. Representación fiscal profesional del equipo de Best Vision Accounting, lista antes de que llegue la carta.',
      col_product: 'PRODUCTO', col_company: 'EMPRESA', col_legal: 'LEGAL',
      contact: 'Contáctanos', help: 'Centro de ayuda', agreement: 'Contrato de membresía', terms: 'Términos del servicio', privacy: 'Política de privacidad',
      foot_legal: 'IRS Protect e IRS Protect Plus son programas de membresía ofrecidos por Best Vision Accounting y no son seguros. Los beneficios consisten en servicios profesionales y, en el caso de Protect Plus, asistencia elegible con obligaciones ante el IRS, sujetos a los términos, requisitos de elegibilidad, limitaciones y exclusiones del contrato de membresía. La membresía debe estar activa y al corriente en la fecha impresa en el primer aviso del IRS relacionado con un asunto. Best Vision Accounting no garantiza el resultado de ninguna disputa con el IRS.',
      copyright: '© 2026 Best Vision Accounting. Todos los derechos reservados.', trademark: 'IRS Protect es una marca de Best Vision Accounting.'
    }
  };

  /* ---- Additional strings for the enrollment, contact, member and legal pages ---- */
  var EXTRA = {
    en: {
      skip: 'Skip to content', menu_open: 'Open menu', menu_close: 'Close menu', members: 'Members', submit_notice_link: 'Submit a notice',
      alt_hero: 'A smiling woman points at an IRS letter while holding an IRS envelope stamped Resolved, with a blue shield behind her',
      alt_team: 'The Best Vision Accounting team', alt_envelope: 'An IRS envelope stamped Important Tax Notice', alt_couple: 'A couple reviewing an IRS notice together on a laptop', alt_advisor: 'An accountant reviewing tax documents',
      title_index: 'IRS Protect | Professional IRS representation from $10.99/mo', title_enroll: 'Get protected | IRS Protect', title_contact: 'Contact us | IRS Protect', title_login: 'Member sign in | IRS Protect', title_notice: 'Submit an IRS notice | IRS Protect', title_help: 'Help center | IRS Protect', title_agreement: 'Membership Agreement | IRS Protect', title_terms: 'Terms of Service | IRS Protect', title_privacy: 'Privacy Policy | IRS Protect', title_404: 'Page not found | IRS Protect',
      lang_note: 'This document is available in English. The English version governs.',
      first_name: 'First name', last_name: 'Last name', email: 'Email address', phone: 'Phone number', zip: 'ZIP code', optional: '(optional)',
      filing_status: 'Filing status', fs_select: 'Select…', fs_single: 'Single', fs_mfj: 'Married filing jointly', fs_mfs: 'Married filing separately', fs_hoh: 'Head of household', fs_qss: 'Qualifying surviving spouse',
      continue_btn: 'Continue', back_btn: 'Back', sending: 'Sending…',
      err_required: 'This field is required.', err_email: 'Enter a valid email address.', err_phone: 'Enter a valid phone number.', err_zip: 'Enter a valid 5-digit ZIP code.', err_agree: 'Please check this box to continue.', err_plan: 'Choose a membership to continue.', err_file_type: 'Only photos (JPG, PNG, HEIC) and PDF files are accepted.', err_file_size: 'Each file must be {mb} MB or smaller.', err_file_required: 'Attach at least one page of your notice.', err_date: 'Enter a valid date.',
      submit_failed: 'Something went wrong and your request was not sent. Please try again in a moment.',
      mailto_note: 'Your email app should open with your request ready to send. If it doesn’t, contact Best Vision Accounting directly.',
      mailto_attach: 'Please attach your notice files to the email before sending.',
      no_delivery: 'Online submission isn’t available right now. Please contact Best Vision Accounting directly and we’ll take care of you.',
      go_contact: 'Contact us', go_home: 'Back to home',
      privacy_short: 'We only use your information to set up and service your membership. See our Privacy Policy.',
      enroll_kicker: 'Enrollment', enroll_title: 'Get protected in about two minutes.', enroll_sub: 'Choose your membership, tell us who to protect, and confirm the membership terms. Your protection starts on your membership start date.',
      step_plan: 'Membership', step_details: 'Your details', step_review: 'Review & confirm',
      choose_plan: 'Choose your membership', choose_plan_sub: 'Both include professional representation from Best Vision Accounting.',
      protect_choice_body: 'Up to $5,000 in professional representation, notice and return review, IRS responses, audit and examination help.',
      plus_choice_body: 'Everything in IRS Protect, plus up to $2,000 toward eligible additional federal tax if the IRS determines you owe more.',
      details_title: 'Who are we protecting?', details_sub: 'Use the name exactly as it appears on your federal tax return.',
      review_title: 'Review and confirm', review_sub: 'Check your details and agree to the membership terms.',
      summary_title: 'Membership summary', summary_plan: 'Membership', summary_price: 'Monthly fee', summary_name: 'Member', summary_email: 'Email', summary_phone: 'Phone', summary_zip: 'ZIP', summary_fs: 'Filing status', summary_start: 'Start date', summary_total: 'Due today', billed_monthly: 'Billed monthly. Cancel anytime.',
      agree_pre: 'I have read and agree to the ', agree_mid: ', the ', agree_mid2: ' and the ', agree_post: '.',
      agree_notice: 'I understand that IRS Protect is a membership program, not insurance, and that only IRS matters whose first notice is dated on or after my membership start date are eligible.',
      agree_billing: 'I authorize Best Vision Accounting to bill the monthly membership fee until I cancel.',
      pay_btn: 'Continue to secure payment', request_btn: 'Submit enrollment',
      secure_note: 'Payment is processed securely. You can cancel anytime.',
      enroll_success_t: 'You’re almost protected!', enroll_success_b: 'Thanks, {name}. We received your enrollment for {plan}. A Best Vision Accounting team member will contact you at {email} to activate your membership.',
      enroll_redirect: 'Taking you to secure checkout…',
      why_title: 'Why members join', why_items: ['Protection is in place before the letter arrives.', 'Your notice, return, and documents are reviewed by tax professionals.', 'Best Vision Accounting responds to and communicates with the IRS for you.', 'Cancel anytime. Fees in the first 30 days may be refundable if no benefit has been requested.'],
      contact_kicker: 'Contact', contact_title: 'Talk to the team behind your protection.', contact_sub: 'Questions about membership, billing, or an IRS notice? Send a message and Best Vision Accounting will get back to you.',
      topic: 'Topic', topic_membership: 'Membership questions', topic_billing: 'Billing or cancellation', topic_notice: 'I received an IRS notice', topic_other: 'Something else',
      message: 'Message', message_ph: 'How can we help?', send_btn: 'Send message',
      contact_success_t: 'Message sent', contact_success_b: 'Thanks, {name}. We’ll get back to you at {email} within one business day.',
      contact_details: 'Contact details', contact_email_l: 'Email', contact_phone_l: 'Phone', contact_hours_l: 'Hours', contact_address_l: 'Office',
      member_q: 'Already a member with a notice?', member_q_b: 'Skip the message and send us the letter directly. We’ll review it and tell you what happens next.',
      login_kicker: 'Members', login_title: 'Member sign in', login_sub: 'Access your membership, update billing, and submit IRS notices.',
      portal_open: 'Open the member portal', portal_note: 'You’ll be taken to the secure Best Vision Accounting member portal.',
      portal_soon_t: 'Online account access is coming soon', portal_soon_b: 'Members can already submit an IRS notice online or reach the Best Vision Accounting team directly. Everything else about your membership is handled by the team on your behalf.',
      not_member: 'Not a member yet?', join_now: 'Get protected today', member_actions: 'What members can do right now',
      notice_kicker: 'Members', notice_title: 'Got an IRS letter? Send it to us.', notice_sub: 'Upload your notice and the Best Vision Accounting team will review it, determine what the IRS is asking for, and tell you what happens next.',
      member_id: 'Member ID', member_id_hint: 'From your welcome email, if you have it.',
      notice_type: 'Notice or letter number', notice_type_hint: 'Printed in the top corner of the letter, for example CP2000, CP14, or Letter 525.',
      notice_date: 'Date on the notice', tax_year: 'Tax year',
      upload_label: 'Upload your notice', upload_hint: 'Photos or PDFs, up to {mb} MB each. Include every page, front and back.', upload_cta: 'Tap to choose files or drag them here',
      notes: 'Anything else we should know?', notes_ph: 'Deadlines mentioned in the letter, whether you already replied, or anything unusual.',
      notice_btn: 'Send my notice',
      notice_success_t: 'Notice received', notice_success_b: 'Thanks, {name}. We’ll review your notice and contact you at {email} with next steps. Keep your membership active until the matter is resolved.',
      before_send: 'Before you send', before_items: ['Your membership must have been active on the date printed on the notice.', 'Send every page of the letter, front and back.', 'Have the tax return for the year in question handy.', 'Don’t reply to the IRS on your own until we’ve reviewed the notice.'],
      help_kicker: 'Help center', help_title: 'How can we help?', help_sub: 'Answers about membership, coverage, billing, and what to do when a letter arrives.',
      help_topics_title: 'Using your membership',
      help_topics: [
        ['How do I submit an IRS notice?', 'Use the Submit a notice page. Upload a photo or PDF of every page, tell us the notice number and the date printed on it, and the Best Vision Accounting team takes it from there.'],
        ['How is my membership billed?', 'Memberships are billed monthly to your payment method on file: $10.99 for IRS Protect and $19.99 for IRS Protect Plus. You can cancel anytime.'],
        ['How do I cancel or change my membership?', 'Contact us anytime and we’ll cancel or change your membership. Fees paid during the first 30 days may be refundable if no program benefit has been requested, received, or initiated. After that, paid fees generally aren’t refundable.'],
        ['Who does the work on my IRS matter?', 'The Best Vision Accounting team: the same professionals who review your notice, prepare the response, and represent you before the IRS when authorized.'],
        ['Does IRS Protect cover state tax notices?', 'IRS Protect covers eligible federal IRS matters. For state tax notices, contact Best Vision Accounting directly.']
      ],
      still_need: 'Still need help?', still_need_b: 'Send us a message and we’ll get back to you within one business day.',
      legal_kicker: 'Legal', legal_agreement_title: 'Membership Agreement', legal_terms_title: 'Terms of Service', legal_privacy_title: 'Privacy Policy', legal_updated: 'Last updated: September 3, 2026',
      nf_title: 'We can’t find that page.', nf_body: 'The link may be out of date. Head back home or contact us if you need a hand.'
    },
    es: {
      skip: 'Saltar al contenido', menu_open: 'Abrir menú', menu_close: 'Cerrar menú', members: 'Miembros', submit_notice_link: 'Enviar un aviso',
      alt_hero: 'Una mujer sonriente señala una carta del IRS mientras sostiene un sobre del IRS con el sello Resuelto y un escudo azul detrás',
      alt_team: 'El equipo de Best Vision Accounting', alt_envelope: 'Un sobre del IRS con el sello Aviso fiscal importante', alt_couple: 'Una pareja revisa un aviso del IRS en una laptop', alt_advisor: 'Un contador revisa documentos fiscales',
      title_index: 'IRS Protect | Representación profesional ante el IRS desde $10.99/mes', title_enroll: 'Obtén protección | IRS Protect', title_contact: 'Contáctanos | IRS Protect', title_login: 'Acceso para miembros | IRS Protect', title_notice: 'Enviar un aviso del IRS | IRS Protect', title_help: 'Centro de ayuda | IRS Protect', title_agreement: 'Contrato de membresía | IRS Protect', title_terms: 'Términos del servicio | IRS Protect', title_privacy: 'Política de privacidad | IRS Protect', title_404: 'Página no encontrada | IRS Protect',
      lang_note: 'Este documento está disponible en inglés. La versión en inglés prevalece.',
      first_name: 'Nombre', last_name: 'Apellido', email: 'Correo electrónico', phone: 'Teléfono', zip: 'Código postal', optional: '(opcional)',
      filing_status: 'Estado civil para efectos fiscales', fs_select: 'Selecciona…', fs_single: 'Soltero(a)', fs_mfj: 'Casado(a) que presenta en conjunto', fs_mfs: 'Casado(a) que presenta por separado', fs_hoh: 'Cabeza de familia', fs_qss: 'Cónyuge sobreviviente que reúne los requisitos',
      continue_btn: 'Continuar', back_btn: 'Atrás', sending: 'Enviando…',
      err_required: 'Este campo es obligatorio.', err_email: 'Ingresa un correo electrónico válido.', err_phone: 'Ingresa un número de teléfono válido.', err_zip: 'Ingresa un código postal válido de 5 dígitos.', err_agree: 'Marca esta casilla para continuar.', err_plan: 'Elige una membresía para continuar.', err_file_type: 'Solo se aceptan fotos (JPG, PNG, HEIC) y archivos PDF.', err_file_size: 'Cada archivo debe pesar {mb} MB o menos.', err_file_required: 'Adjunta al menos una página de tu aviso.', err_date: 'Ingresa una fecha válida.',
      submit_failed: 'Algo salió mal y tu solicitud no se envió. Inténtalo de nuevo en un momento.',
      mailto_note: 'Tu aplicación de correo debería abrirse con la solicitud lista para enviar. Si no es así, contacta directamente a Best Vision Accounting.',
      mailto_attach: 'Adjunta los archivos de tu aviso al correo antes de enviarlo.',
      no_delivery: 'El envío en línea no está disponible por el momento. Contacta directamente a Best Vision Accounting y con gusto te atenderemos.',
      go_contact: 'Contáctanos', go_home: 'Volver al inicio',
      privacy_short: 'Solo usamos tu información para crear y administrar tu membresía. Consulta nuestra Política de privacidad.',
      enroll_kicker: 'Inscripción', enroll_title: 'Protégete en unos dos minutos.', enroll_sub: 'Elige tu membresía, dinos a quién protegemos y confirma los términos. Tu protección comienza en la fecha de inicio de tu membresía.',
      step_plan: 'Membresía', step_details: 'Tus datos', step_review: 'Revisar y confirmar',
      choose_plan: 'Elige tu membresía', choose_plan_sub: 'Ambas incluyen representación profesional de Best Vision Accounting.',
      protect_choice_body: 'Hasta $5,000 en representación profesional, revisión de avisos y declaraciones, respuestas al IRS y ayuda en auditorías y exámenes.',
      plus_choice_body: 'Todo lo de IRS Protect, más hasta $2,000 para impuesto federal adicional elegible si el IRS determina que debes más.',
      details_title: '¿A quién protegemos?', details_sub: 'Usa el nombre exactamente como aparece en tu declaración federal de impuestos.',
      review_title: 'Revisa y confirma', review_sub: 'Verifica tus datos y acepta los términos de la membresía.',
      summary_title: 'Resumen de la membresía', summary_plan: 'Membresía', summary_price: 'Cuota mensual', summary_name: 'Miembro', summary_email: 'Correo', summary_phone: 'Teléfono', summary_zip: 'Código postal', summary_fs: 'Estado civil fiscal', summary_start: 'Fecha de inicio', summary_total: 'A pagar hoy', billed_monthly: 'Se factura mensualmente. Cancela cuando quieras.',
      agree_pre: 'He leído y acepto el ', agree_mid: ', los ', agree_mid2: ' y la ', agree_post: '.',
      agree_notice: 'Entiendo que IRS Protect es un programa de membresía, no un seguro, y que solo son elegibles los asuntos del IRS cuyo primer aviso esté fechado en o después de la fecha de inicio de mi membresía.',
      agree_billing: 'Autorizo a Best Vision Accounting a cobrar la cuota mensual de membresía hasta que cancele.',
      pay_btn: 'Continuar al pago seguro', request_btn: 'Enviar inscripción',
      secure_note: 'El pago se procesa de forma segura. Puedes cancelar cuando quieras.',
      enroll_success_t: '¡Ya casi estás protegido!', enroll_success_b: 'Gracias, {name}. Recibimos tu inscripción a {plan}. Un miembro del equipo de Best Vision Accounting te contactará en {email} para activar tu membresía.',
      enroll_redirect: 'Te llevamos al pago seguro…',
      why_title: 'Por qué se unen los miembros', why_items: ['La protección está lista antes de que llegue la carta.', 'Profesionales fiscales revisan tu aviso, tu declaración y tus documentos.', 'Best Vision Accounting responde y se comunica con el IRS por ti.', 'Cancela cuando quieras. Las cuotas de los primeros 30 días pueden ser reembolsables si no se ha solicitado ningún beneficio.'],
      contact_kicker: 'Contacto', contact_title: 'Habla con el equipo detrás de tu protección.', contact_sub: '¿Preguntas sobre la membresía, la facturación o un aviso del IRS? Envía un mensaje y Best Vision Accounting te responderá.',
      topic: 'Tema', topic_membership: 'Preguntas sobre la membresía', topic_billing: 'Facturación o cancelación', topic_notice: 'Recibí un aviso del IRS', topic_other: 'Otro asunto',
      message: 'Mensaje', message_ph: '¿En qué podemos ayudarte?', send_btn: 'Enviar mensaje',
      contact_success_t: 'Mensaje enviado', contact_success_b: 'Gracias, {name}. Te responderemos en {email} dentro de un día hábil.',
      contact_details: 'Datos de contacto', contact_email_l: 'Correo', contact_phone_l: 'Teléfono', contact_hours_l: 'Horario', contact_address_l: 'Oficina',
      member_q: '¿Ya eres miembro y recibiste un aviso?', member_q_b: 'Sáltate el mensaje y envíanos la carta directamente. La revisaremos y te diremos qué sigue.',
      login_kicker: 'Miembros', login_title: 'Acceso para miembros', login_sub: 'Accede a tu membresía, actualiza tu facturación y envía avisos del IRS.',
      portal_open: 'Abrir el portal de miembros', portal_note: 'Irás al portal seguro de miembros de Best Vision Accounting.',
      portal_soon_t: 'El acceso a tu cuenta en línea llegará pronto', portal_soon_b: 'Los miembros ya pueden enviar un aviso del IRS en línea o comunicarse directamente con el equipo de Best Vision Accounting. Todo lo demás sobre tu membresía lo gestiona el equipo en tu nombre.',
      not_member: '¿Aún no eres miembro?', join_now: 'Protégete hoy', member_actions: 'Lo que los miembros pueden hacer ahora',
      notice_kicker: 'Miembros', notice_title: '¿Recibiste una carta del IRS? Envíanosla.', notice_sub: 'Sube tu aviso y el equipo de Best Vision Accounting lo revisará, determinará qué pide el IRS y te dirá qué sigue.',
      member_id: 'Número de miembro', member_id_hint: 'Está en tu correo de bienvenida, si lo tienes.',
      notice_type: 'Número de aviso o carta', notice_type_hint: 'Impreso en la esquina superior de la carta, por ejemplo CP2000, CP14 o Letter 525.',
      notice_date: 'Fecha del aviso', tax_year: 'Año fiscal',
      upload_label: 'Sube tu aviso', upload_hint: 'Fotos o PDF, hasta {mb} MB cada uno. Incluye todas las páginas, por ambos lados.', upload_cta: 'Toca para elegir archivos o arrástralos aquí',
      notes: '¿Algo más que debamos saber?', notes_ph: 'Plazos mencionados en la carta, si ya respondiste o cualquier cosa fuera de lo común.',
      notice_btn: 'Enviar mi aviso',
      notice_success_t: 'Aviso recibido', notice_success_b: 'Gracias, {name}. Revisaremos tu aviso y te contactaremos en {email} con los siguientes pasos. Mantén tu membresía activa hasta que el asunto se resuelva.',
      before_send: 'Antes de enviar', before_items: ['Tu membresía debe haber estado activa en la fecha impresa en el aviso.', 'Envía todas las páginas de la carta, por ambos lados.', 'Ten a la mano la declaración del año en cuestión.', 'No respondas al IRS por tu cuenta hasta que hayamos revisado el aviso.'],
      help_kicker: 'Centro de ayuda', help_title: '¿En qué podemos ayudarte?', help_sub: 'Respuestas sobre membresía, cobertura, facturación y qué hacer cuando llega una carta.',
      help_topics_title: 'Cómo usar tu membresía',
      help_topics: [
        ['¿Cómo envío un aviso del IRS?', 'Usa la página Enviar un aviso. Sube una foto o PDF de todas las páginas, indícanos el número de aviso y la fecha impresa, y el equipo de Best Vision Accounting se encarga del resto.'],
        ['¿Cómo se cobra mi membresía?', 'Las membresías se cobran mensualmente al método de pago registrado: $10.99 por IRS Protect y $19.99 por IRS Protect Plus. Puedes cancelar cuando quieras.'],
        ['¿Cómo cancelo o cambio mi membresía?', 'Contáctanos en cualquier momento y cancelaremos o cambiaremos tu membresía. Las cuotas pagadas durante los primeros 30 días pueden ser reembolsables si no se ha solicitado, recibido o iniciado ningún beneficio del programa. Después de eso, las cuotas pagadas generalmente no son reembolsables.'],
        ['¿Quién trabaja en mi asunto con el IRS?', 'El equipo de Best Vision Accounting: los mismos profesionales que revisan tu aviso, preparan la respuesta y te representan ante el IRS cuando están autorizados.'],
        ['¿IRS Protect cubre avisos de impuestos estatales?', 'IRS Protect cubre asuntos federales elegibles del IRS. Para avisos de impuestos estatales, contacta directamente a Best Vision Accounting.']
      ],
      still_need: '¿Aún necesitas ayuda?', still_need_b: 'Envíanos un mensaje y te responderemos dentro de un día hábil.',
      legal_kicker: 'Legal', legal_agreement_title: 'Contrato de membresía', legal_terms_title: 'Términos del servicio', legal_privacy_title: 'Política de privacidad', legal_updated: 'Última actualización: 3 de septiembre de 2026',
      nf_title: 'No encontramos esa página.', nf_body: 'Puede que el enlace esté desactualizado. Vuelve al inicio o contáctanos si necesitas ayuda.'
    }
  };
  Object.keys(EXTRA).forEach(function (l) { DICT[l] = Object.assign({}, DICT[l], EXTRA[l]); });

  /* ---- Runtime ---- */
  var STORAGE_KEY = 'irsprotect.lang';
  var cfg = window.SITE_CONFIG || {};
  var GLOBALS = { mb: cfg.maxUploadMb || 10 };
  function get(obj, path) { return String(path).split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj); }

  var lang = 'en';
  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') lang = stored;
    else if (cfg.autoDetectLanguage !== false && /^es\b/i.test(navigator.language || '')) lang = 'es';
  } catch (e) { /* storage unavailable */ }

  function t(key, vars) {
    var v = get(DICT[lang], key);
    if (v == null) v = get(DICT.en, key);
    if (typeof v !== 'string') return v == null ? key : v;
    if (vars) v = v.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return v;
  }

  function apply(root) {
    root = root || document;
    document.documentElement.lang = lang;
    var nodes = root.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i]; var v = t(el.getAttribute('data-i18n'), GLOBALS);
      if (typeof v === 'string') el.textContent = v;
    }
    var attrNodes = root.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var el2 = attrNodes[j];
      el2.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var idx = pair.indexOf(':'); if (idx < 0) return;
        var attr = pair.slice(0, idx).trim(); var key = pair.slice(idx + 1).trim();
        var val = t(key, GLOBALS); if (typeof val === 'string') el2.setAttribute(attr, val);
      });
    }
    var toggles = document.querySelectorAll('[data-lang]');
    for (var k = 0; k < toggles.length; k++) toggles[k].setAttribute('aria-pressed', String(toggles[k].getAttribute('data-lang') === lang));
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function setLang(l) {
    lang = l === 'es' ? 'es' : 'en';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply();
  }

  window.I18N = { t: t, apply: apply, setLang: setLang, dict: DICT };
  Object.defineProperty(window.I18N, 'lang', { get: function () { return lang; } });

  document.documentElement.lang = lang;
  document.documentElement.classList.add('js');
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { apply(); });
  else apply();
})();
