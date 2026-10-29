/* ==========================================================================
   IRS Protect Plus — translations (Spanish default / English)
   Text is applied to elements with data-i18n="key" (text content) and
   data-i18n-attr="attr:key;attr2:key2" (attributes). Keys use dot paths,
   so "faqs.0.0" is the first FAQ question. All program facts come from the
   IRS Protect Plus Membership Agreement.
   ========================================================================== */
(function () {
  'use strict';

  var DICT = {
    es: {
      /* Navigation and shared */
      nav_how: 'Cómo funciona', nav_plans: 'Membresía', nav_coverage: 'Cobertura', nav_faq: 'Preguntas frecuentes', faq_short: 'Preguntas',
      login: 'Iniciar sesión', cta: 'Obtén protección', cta_short: 'Únete', cta_join: 'Obtén IRS Protect Plus', per_month: '/mes',
      by_bva: 'de Best Vision Accounting', language: 'Idioma', skip: 'Saltar al contenido', menu_open: 'Abrir menú', menu_close: 'Cerrar menú',
      submit_notice_link: 'Enviar un aviso', contact: 'Contáctanos', help: 'Centro de ayuda', agreement: 'Contrato de membresía', terms: 'Términos del servicio', privacy: 'Política de privacidad',
      from_price: '$19.99 al mes', go_contact: 'Contáctanos', go_home: 'Volver al inicio', optional: '(opcional)',

      /* Page titles */
      title_index: 'Protección ante el IRS por $19.99 al mes | IRS Protect Plus', title_enroll: 'Obtén protección | IRS Protect Plus', title_contact: 'Contáctanos | IRS Protect Plus', title_login: 'Acceso para miembros | IRS Protect Plus', title_notice: 'Enviar un aviso del IRS | IRS Protect Plus', title_help: 'Centro de ayuda | IRS Protect Plus', title_agreement: 'Contrato de membresía | IRS Protect Plus', title_terms: 'Términos del servicio | IRS Protect Plus', title_privacy: 'Política de privacidad | IRS Protect Plus', title_404: 'Página no encontrada | IRS Protect Plus',

      /* Meta descriptions (search results), ~155 characters max */
      desc_index: 'Membresía de representación ante el IRS: revisamos tus cartas del IRS y te ayudamos en auditorías y cobros. Hasta $10,000 en servicios por $19.99 al mes.',
      desc_enroll: 'Inscríbete en IRS Protect Plus en unos dos minutos: 30 días de prueba gratis y después $19.99 al mes. Cancela cuando quieras.',
      desc_contact: '¿Preguntas sobre la membresía IRS Protect Plus, la facturación o un aviso del IRS? Contacta al equipo de Best Vision Accounting en Miami.',
      desc_help: 'Respuestas sobre la membresía IRS Protect Plus, cobertura, facturación, cancelación y qué hacer cuando llega una carta del IRS.',
      desc_notice: 'Miembros de IRS Protect Plus: sube tu aviso o carta del IRS y el equipo de Best Vision Accounting lo revisará y te dirá qué sigue.',
      desc_login: 'Acceso para miembros de IRS Protect Plus: entra al portal, envía un aviso del IRS o contacta al equipo de Best Vision Accounting.',
      desc_agreement: 'Contrato de membresía de IRS Protect Plus: beneficios, elegibilidad, exclusiones, cuotas, cancelación y reembolsos. Best Vision Accounting, LLC.',
      desc_terms: 'Términos que rigen el uso del sitio web de IRS Protect Plus y los servicios en línea de Best Vision Accounting, LLC.',
      desc_privacy: 'Cómo Best Vision Accounting, LLC recopila, usa, comparte y protege la información enviada a través del sitio web de IRS Protect Plus.',
      desc_404: 'No encontramos la página que buscas.',
      not_affiliated: 'IRS Protect Plus no está afiliado con el IRS ni con el gobierno de EE. UU.',
      guides_link: 'Guías de avisos del IRS',

      title_cookies: 'Política de cookies | IRS Protect Plus', title_refund: 'Reembolsos y cancelación | IRS Protect Plus', title_accessibility: 'Accesibilidad | IRS Protect Plus',
      desc_cookies: 'Qué guarda el sitio de IRS Protect Plus en tu navegador: solo tu preferencia de idioma. Analítica sin cookies y sin seguimiento entre sitios.',
      desc_refund: 'Cómo cancelar IRS Protect Plus tras la prueba gratuita de 30 días y cuándo las cuotas de $19.99 al mes pueden ser reembolsables, según el contrato.',
      desc_accessibility: 'Compromiso de accesibilidad de IRS Protect Plus: objetivo WCAG 2.1 AA, lo que hemos hecho, limitaciones conocidas y cómo pedir ayuda.',
      cookies: 'Política de cookies', refund: 'Reembolsos y cancelación', accessibility: 'Accesibilidad',
      legal_cookies_title: 'Política de cookies', legal_refund_title: 'Política de reembolsos y cancelación', legal_accessibility_title: 'Declaración de accesibilidad',
      legal_updated_privacy: 'Última actualización: 9 de octubre de 2026', legal_updated_terms: 'Última actualización: 29 de octubre de 2026', legal_updated_cookies: 'Última actualización: 9 de octubre de 2026', legal_updated_refund: 'Última actualización: 29 de octubre de 2026', legal_updated_accessibility: 'Última actualización: 9 de octubre de 2026',

      /* Hero */
      hero_title: 'El IRS es complicado. Tu protección no debería serlo.',
      hero_sub: 'IRS Protect Plus es una membresía de representación ante el IRS: el equipo de Best Vision Accounting revisa tus cartas del IRS, responde por ti y te ayuda en auditorías y cobros elegibles.',
      stat_rep: 'máximo en servicios de representación', cancel_anytime: 'Cancela cuando quieras.', hero_backed: 'Respaldado por Best Vision Accounting',
      hero_disclaimer: 'IRS Protect Plus es un programa de membresía y no es un seguro. Aplican requisitos de elegibilidad, limitaciones y exclusiones.',
      alt_hero: 'Una mujer sonriente señala una carta del IRS mientras sostiene un sobre del IRS con el sello Resuelto y un escudo azul detrás',

      /* Trust card */
      trust_kicker: 'Apoyo fiscal profesional de', team_kicker: 'Conoce al equipo detrás de tu protección',
      trust_body: 'Cada membresía de IRS Protect Plus está respaldada por el equipo de Best Vision Accounting: los mismos profesionales que revisan tu aviso, preparan la respuesta y te representan ante el IRS.',
      stat_month: 'al mes', stat_anytime: 'Cuando quieras', stat_cancel: 'cancelación', stat_membership: 'Membresía', stat_not_ins: 'no es un seguro',
      alt_team: 'El equipo de Best Vision Accounting',

      /* Features */
      your_membership: 'Tu membresía', active_since: 'Activa desde el 3 de marzo', eligible_note: 'Aviso fechado después de la inscripción. Elegible.',
      f1_title: 'No esperes una carta del IRS. Protégete antes de que llegue.',
      f1_body: 'Para calificar, tu membresía debe estar activa y al corriente en la fecha impresa en el primer aviso del IRS. Un aviso fechado el 1 de agosto no está cubierto por una membresía que inicia el 2 de agosto, aunque abras el sobre después. La cobertura no es retroactiva: la protección empieza antes que el problema.',
      f1_link: 'Protégete hoy',
      f2_title: '¿Recibiste una carta del IRS? Envíanosla.',
      f2_body: 'Muchas personas no saben si un CP2000, un aviso de examen o un aviso de cobro es grave. Tú no tienes que saberlo. Entrega el aviso, la declaración correspondiente y los documentos solicitados, y el equipo de Best Vision determina qué pide el IRS y qué sigue.',
      f2_link: 'Ver qué incluye',
      send_notice: 'Enviar un aviso', upload_notice: 'Sube el aviso del IRS', photo_pdf: 'Foto o PDF', notice_cp2000: 'Aviso CP2000', in_progress: 'En proceso',
      timeline: [['Aviso y declaración revisados', 'Best Vision Accounting'], ['Respuesta al IRS', 'En proceso'], ['Representación y resolución', 'Autorizada ante el IRS']],
      f3_title: 'Tu equipo contable se encarga del asunto con el IRS.',
      f3_body: 'Según la situación, Best Vision Accounting prepara la correspondencia, organiza la documentación, se comunica con el IRS y te representa a través de un Agente Inscrito, CPA o abogado autorizado. Mantén tu membresía activa y al corriente hasta que el asunto se resuelva.',
      alt_envelope: 'Un sobre del IRS con el sello Aviso fiscal importante', alt_couple: 'Una pareja revisa un aviso del IRS en una laptop', alt_advisor: 'Un contador revisa documentos fiscales',

      /* Single plan */
      plans_title: 'Una membresía. Reglas claras.',
      plans_sub: 'Representación profesional ante el IRS del equipo de Best Vision Accounting por $19.99 al mes. Un solo plan, sin niveles.',
      plan_tag: 'Membresía', ribbon: 'Un solo plan', plan_tagline: 'Hasta $10,000 en representación profesional, lista antes de la carta.',
      plan_items: [
        ['Hasta $10,000 en representación profesional', 'Servicios de representación fiscal profesional por contribuyente para asuntos elegibles del IRS.'],
        ['Revisión de avisos, declaraciones y documentos', 'Revisamos la correspondencia del IRS, tu declaración federal correspondiente y organizamos los documentos de respaldo.'],
        ['Respuestas y comunicación con el IRS', 'Preparamos respuestas y correspondencia, y nos comunicamos con el IRS en tu nombre.'],
        ['Ayuda en exámenes y auditorías', 'Asistencia durante exámenes o auditorías del IRS, con representación profesional autorizada.'],
        ['Cobro y resolución', 'Asistencia con asuntos elegibles de cobro o resolución del IRS.']
      ],
      plans_note: 'Los $10,000 representan el valor de los servicios profesionales prestados por Best Vision Accounting, LLC. No es un pago en efectivo al miembro y no paga tu deuda fiscal. Los primeros 30 días son una prueba gratuita: no se cobra nada. Terminada la prueba, las cuotas pagadas durante los primeros 30 días de membresía pagada pueden ser reembolsables si no se ha solicitado, recibido o iniciado ningún beneficio del programa.',

      offer_desc: 'Prueba gratuita de 30 días; después $19.99 al mes hasta que canceles.',

      /* Coverage rules */
      coverage_title: 'Cómo funciona la cobertura', coverage_sub: 'Reglas claras, tomadas directamente del contrato de membresía.',
      rules_t: 'Reglas de cobertura',
      rules: [
        ['La fecha del aviso decide', 'Un asunto es elegible solo si tu membresía estaba activa y al corriente en la fecha impresa en el primer aviso del IRS. La cobertura no es retroactiva.'],
        ['Años fiscales futuros incluidos', 'Mientras tu membresía siga activa, no hay un límite fijo de años fiscales futuros que puedan calificar.'],
        ['Mantente activo durante todo el asunto', 'Debes seguir activo y al corriente hasta que Best Vision determine que sus servicios concluyeron. Reactivar la membresía no restaura la cobertura de asuntos surgidos mientras estaba inactiva.'],
        ['Quién te representa', 'Un Agente Inscrito (EA), un CPA, un abogado u otro profesional autorizado a representarte ante el IRS.']
      ],
      excl_t: 'Qué no está cubierto', excl_b: 'Exclusiones generales del contrato de membresía:',
      exclusions: ['Fraude o evasión fiscal intencional', 'Investigaciones fiscales penales', 'Avisos o asuntos del IRS fechados antes de tu fecha de inscripción', 'Declaraciones falsas o intencionalmente incompletas', 'Asuntos derivados de información ocultada o retenida intencionalmente', 'Representación ante tribunales o el Tribunal Fiscal de EE. UU.', 'Asuntos específicamente excluidos en el contrato'],
      excl_note: 'Best Vision Accounting no garantiza el resultado de ningún asunto con el IRS. El IRS tiene la autoridad final para determinar impuestos, multas, intereses, créditos y reembolsos.',

      /* Covered grid */
      covered_title: 'Qué incluye tu membresía',
      covered: [
        ['Revisión de avisos y documentos', 'Revisamos los avisos y la correspondencia del IRS, tu declaración federal correspondiente y organizamos los documentos de respaldo.'],
        ['Respuestas al IRS', 'Preparamos respuestas y correspondencia, y nos comunicamos con el IRS en tu nombre.'],
        ['Exámenes y auditorías', 'Te asistimos durante un examen o auditoría del IRS, con representación profesional ante el IRS cuando está autorizada.'],
        ['Cobro y resolución', 'Asistencia con asuntos elegibles de cobro o resolución del IRS.']
      ],
      covered_note: 'Hasta $10,000 en servicios de representación profesional por contribuyente para asuntos elegibles. La representación no incluye litigios ni comparecer ante el Tribunal Fiscal de EE. UU. u otro tribunal, salvo acuerdo por escrito.',

      /* FAQ */
      faq_title: 'Preguntas frecuentes',
      faqs: [
        ['¿Qué incluye IRS Protect Plus?', 'Hasta $10,000 en servicios de representación fiscal profesional por contribuyente para asuntos elegibles del IRS: revisión de avisos, declaraciones y documentos; preparación de respuestas; comunicación con el IRS en tu nombre; asistencia en exámenes y auditorías; representación profesional autorizada; y ayuda con asuntos elegibles de cobro o resolución.'],
        ['¿Qué no está cubierto?', 'Fraude o evasión fiscal intencional, investigaciones fiscales penales, avisos o asuntos fechados antes de tu inscripción, declaraciones falsas o intencionalmente incompletas, asuntos derivados de información ocultada intencionalmente y representación ante tribunales o el Tribunal Fiscal. Best Vision Accounting no garantiza el resultado de ningún asunto con el IRS.'],
        ['¿Puedo inscribirme después de recibir un aviso?', 'No. Tu membresía debe estar activa y al corriente en la fecha impresa en el primer aviso del IRS relacionado con el asunto. Si un aviso está fechado el 1 de agosto y te inscribes el 2 de agosto, ese asunto no está cubierto, aunque hayas abierto la carta después. Reactivar una membresía tampoco crea cobertura para un aviso ya emitido.'],
        ['¿Los $10,000 pagan mi deuda con el IRS?', 'No. Los $10,000 representan el valor de los servicios profesionales de representación prestados por Best Vision Accounting. No es un pago en efectivo al miembro y no paga impuestos, multas ni intereses.'],
        ['¿Qué años fiscales están cubiertos?', 'Los asuntos elegibles de años fiscales futuros, sin un límite fijo de años, mientras mantengas tu membresía activa y al corriente. Cada asunto califica cuando su primer aviso del IRS está fechado en o después de tu fecha efectiva de inscripción.'],
        ['¿Quién me representa ante el IRS?', 'El equipo de Best Vision Accounting. La representación puede estar a cargo de un Agente Inscrito (EA), un CPA, un abogado u otro profesional autorizado a representarte ante el IRS en el asunto correspondiente.'],
        ['¿Puedo cancelar? ¿Y si dejo de pagar durante un asunto?', 'Puedes cancelar en cualquier momento. Si cancelas durante la prueba gratuita de 30 días, no se te cobra nada. Terminada la prueba, las cuotas pagadas durante los primeros 30 días de membresía pagada pueden ser reembolsables si no has solicitado, recibido o iniciado ningún beneficio; después, las cuotas pagadas no son reembolsables salvo que la ley lo exija. Si cancelas o tu membresía queda inactiva mientras atendemos un asunto, Best Vision puede suspender la representación y los demás beneficios.']
      ],

      /* Final CTA and footer */
      cta_title: 'No esperes la carta. Ten tu protección ante el IRS lista hoy.', cta_sub: 'IRS Protect Plus · $19.99 al mes · cancela cuando quieras',
      foot_price: 'Membresía · $19.99/mes', a_product_of: 'Un producto de',
      foot_body: 'Los problemas con el IRS son impredecibles. Tu protección no tiene que serlo. Representación fiscal profesional del equipo de Best Vision Accounting, lista antes de que llegue la carta.',
      col_product: 'Producto', col_company: 'Empresa', col_legal: 'Legal',
      foot_legal: 'IRS Protect Plus es un programa de membresía ofrecido por Best Vision Accounting, LLC y no es un seguro. Los beneficios consisten en servicios profesionales de representación fiscal con un valor máximo de $10,000 por contribuyente, sujetos a los términos, requisitos de elegibilidad, limitaciones y exclusiones del contrato de membresía. La membresía debe estar activa y al corriente en la fecha impresa en el primer aviso del IRS relacionado con un asunto y durante todo el asunto. Best Vision Accounting no garantiza el resultado de ningún asunto con el IRS.',
      copyright: '© 2026 Best Vision Accounting, LLC. Todos los derechos reservados.', trademark: 'IRS Protect Plus es una marca de Best Vision Accounting, LLC.',

      /* Forms: shared */
      first_name: 'Nombre', last_name: 'Apellido', email: 'Correo electrónico', phone: 'Teléfono', zip: 'Código postal',
      filing_status: 'Estado civil para efectos fiscales', fs_select: 'Selecciona…', fs_single: 'Soltero(a)', fs_mfj: 'Casado(a) que presenta en conjunto', fs_mfs: 'Casado(a) que presenta por separado', fs_hoh: 'Cabeza de familia', fs_qss: 'Cónyuge sobreviviente que reúne los requisitos',
      continue_btn: 'Continuar', back_btn: 'Atrás', sending: 'Enviando…',
      err_required: 'Este campo es obligatorio.', err_email: 'Ingresa un correo electrónico válido.', err_phone: 'Ingresa un número de teléfono válido.', err_zip: 'Ingresa un código postal válido de 5 dígitos.', err_agree: 'Marca esta casilla para continuar.', err_file_type: 'Solo se aceptan fotos (JPG, PNG, HEIC) y archivos PDF.', err_file_size: 'Cada archivo debe pesar {mb} MB o menos.', err_file_required: 'Adjunta al menos una página de tu aviso.', err_date: 'Ingresa una fecha válida.',
      err_file_empty: 'Ese archivo está vacío. Elige otra copia.', err_file_count: 'Puedes adjuntar hasta {n} archivos.', err_year: 'Ingresa un año de 4 dígitos, por ejemplo 2024.',
      err_notice_busy: 'Recibimos demasiados intentos desde tu conexión. Espera unos minutos e inténtalo de nuevo.', err_notice_unverified: 'No pudimos confirmar que tus archivos se subieron completos. Inténtalo de nuevo.',
      uploading: 'Subiendo {i} de {n}…',
      submit_failed: 'Algo salió mal y tu solicitud no se envió. Inténtalo de nuevo en un momento.',
      mailto_note: 'Tu aplicación de correo debería abrirse con la solicitud lista para enviar. Si no es así, contacta directamente a Best Vision Accounting.',
      mailto_attach: 'Adjunta los archivos de tu aviso al correo antes de enviarlo.',
      no_delivery: 'El envío en línea no está disponible por el momento. Contacta directamente a Best Vision Accounting y con gusto te atenderemos.',
      privacy_short: 'Solo usamos tu información para crear y administrar tu membresía. Consulta nuestra Política de privacidad.',

      /* Enrollment */
      enroll_kicker: 'Inscripción', enroll_title: 'Protégete en unos dos minutos.', enroll_sub: 'Revisa y acepta los términos de la membresía; después registrarás tus datos y tu método de pago en la página segura de Stripe. Tu prueba gratuita de 30 días y tu protección comienzan en tu fecha efectiva de inscripción; el primer cobro de $19.99 se hace automáticamente cuando termina la prueba.',
      step_details: 'Tus datos', step_review: 'Revisar y confirmar', step_pay: 'Pago',
      details_title: '¿A quién protegemos?', details_sub: 'Usa el nombre exactamente como aparece en tu declaración federal de impuestos.',
      review_title: 'Revisa y confirma', review_sub: 'Revisa los términos de la membresía y acéptalos. Después te llevaremos a la página segura de Stripe para registrar tu método de pago: hoy no se te cobra nada y tu prueba gratuita de 30 días comienza al completar el proceso.',
      checkout_note: 'Tus datos de pago se registran en la página segura de Stripe. Con la inscripción comienza tu prueba gratuita de 30 días, sin cobro hoy, y te enviaremos un correo de bienvenida con tu número de miembro. La primera cuota de $19.99 se cobrará automáticamente cuando termine la prueba.',
      checkout_canceled: 'No se completó la inscripción y no se te cobró nada. Puedes intentarlo de nuevo cuando quieras.',
      checkout_failed: 'No pudimos abrir la página de pago. Revisa tu conexión e inténtalo de nuevo en un momento.',
      checkout_unavailable: 'La inscripción en línea no está disponible por el momento. Llámanos al (305) 220-9616 y con gusto te inscribimos.',
      summary_plan: 'Membresía', summary_price: 'Cuota mensual después de la prueba', summary_name: 'Miembro', summary_email: 'Correo', summary_phone: 'Teléfono', summary_zip: 'Código postal', summary_fs: 'Estado civil fiscal', summary_start: 'Fecha efectiva de inscripción', summary_total: 'A pagar hoy', summary_trial: 'Prueba gratuita', summary_trial_value: '30 días', summary_due_today: '$0.00', billed_monthly: 'Prueba gratuita de 30 días. Hoy solo registras tu tarjeta y no se te cobra nada. Al terminar la prueba (día 31) se cobra automáticamente la primera cuota de $19.99 y, después, la membresía se renueva cada mes a $19.99 hasta que la canceles. Puedes cancelar en cualquier momento escribiendo a info@bvaccounting.com, llamando al (305) 220-9616 o desde tu portal de facturación; si cancelas durante la prueba, no se te cobra nada. Reembolsos: no se paga nada durante el mes gratis; consulta las condiciones para los cargos posteriores a la prueba.',
      agree_pre: 'He leído, entiendo y acepto el ', agree_mid: ', los ', agree_mid2: ' y la ', agree_post: '.',
      agree_notice: 'Entiendo que IRS Protect Plus es un programa de membresía y no un seguro; que solo son elegibles los asuntos cuyo primer aviso del IRS esté fechado en o después de mi fecha efectiva de inscripción; y que debo mantener mi membresía activa y al corriente durante todo el asunto cubierto para seguir recibiendo beneficios.',
      agree_billing: 'Autorizo a Best Vision Accounting, LLC a cobrar $19.99 al terminar mi prueba gratuita de 30 días y, después, automáticamente cada mes hasta que cancele.',
      pay_btn: 'Continuar al pago seguro', request_btn: 'Enviar inscripción',
      enroll_success_t: '¡Tu prueba gratuita ha comenzado!', enroll_success_b: 'Tu prueba gratuita de 30 días ya está activa y no se te ha cobrado nada hoy. Cuando termine la prueba, se te cobrará automáticamente $19.99 y después cada mes hasta que canceles. Revisa tu correo: te enviamos un mensaje de bienvenida con tu número de miembro y el enlace a tu portal. Si no llega en unos minutos, revisa tu carpeta de correo no deseado.',
      enroll_redirect: 'Te llevamos al pago seguro…',
      your_plan: 'Tu membresía', includes: 'Incluye',
      member_q: '¿Ya eres miembro y recibiste un aviso?', member_q_b: 'Envíanos la carta directamente. La revisaremos y te diremos qué sigue.',

      /* Contact */
      contact_kicker: 'Contacto', contact_title: 'Habla con el equipo detrás de tu protección.', contact_sub: '¿Preguntas sobre la membresía, la facturación o un aviso del IRS? Envía un mensaje y Best Vision Accounting te responderá.',
      topic: 'Tema', topic_membership: 'Preguntas sobre la membresía', topic_billing: 'Facturación o cancelación', topic_notice: 'Recibí un aviso del IRS', topic_other: 'Otro asunto',
      message: 'Mensaje', message_ph: '¿En qué podemos ayudarte?', send_btn: 'Enviar mensaje',
      contact_success_t: 'Mensaje enviado', contact_success_b: 'Gracias, {name}. Te responderemos en {email} en horario de oficina.',
      contact_details: 'Datos de contacto', contact_email_l: 'Correo', contact_phone_l: 'Teléfono', contact_fax_l: 'Fax', contact_hours_l: 'Horario', contact_address_l: 'Oficina',

      /* Login */
      login_kicker: 'Miembros', login_title: 'Acceso para miembros', login_sub: 'Consulta tu membresía, tus avisos y tus casos, y envía avisos del IRS.',
      portal_open: 'Abrir el portal de miembros', portal_note: 'Irás al portal seguro de miembros de Best Vision Accounting.',
      billing_note: '¿Necesitas actualizar tu tarjeta o cancelar tu membresía?', billing_open: 'Abre tu portal de facturación',
      portal_soon_t: 'El acceso a tu cuenta en línea llegará pronto', portal_soon_b: 'Los miembros ya pueden enviar un aviso del IRS en línea o comunicarse directamente con el equipo de Best Vision Accounting. Todo lo demás sobre tu membresía lo gestiona el equipo en tu nombre.',
      not_member: '¿Aún no eres miembro?', join_now: 'Protégete hoy', member_actions: 'Lo que los miembros pueden hacer ahora',

      /* Submit a notice */
      notice_kicker: 'Miembros', notice_title: '¿Recibiste una carta del IRS? Envíanosla.', notice_sub: 'Sube tu aviso y el equipo de Best Vision Accounting lo revisará, determinará qué pide el IRS y te dirá qué sigue.',
      member_id: 'Número de miembro', member_id_hint: 'Está en tu correo de bienvenida, si lo tienes.',
      notice_type: 'Número de aviso o carta', notice_type_hint: 'Impreso en la esquina superior de la carta, por ejemplo CP2000, CP14 o Letter 525.',
      notice_date: 'Fecha del aviso', tax_year: 'Año fiscal',
      upload_label: 'Sube tu aviso', upload_hint: 'Fotos (JPG, PNG o HEIC) o PDF, hasta {mb} MB cada uno y 10 archivos. Incluye todas las páginas, por ambos lados.', upload_cta: 'Toca para elegir archivos o arrástralos aquí',
      notes: '¿Algo más que debamos saber?', notes_ph: 'Plazos mencionados en la carta, si ya respondiste o cualquier cosa fuera de lo común.',
      notice_btn: 'Enviar mi aviso',
      consent_contact: 'Acepto que Best Vision Accounting use la información de este formulario para responder a mi mensaje, según la ',
      consent_notice: 'Autorizo a Best Vision Accounting a revisar la información y los documentos que envío para atender mi aviso del IRS, según la ',
      privacy_enroll: 'Usamos estos datos solo para crear y administrar tu membresía. Más información en la ',
      consent_phone: 'Usaremos tu teléfono solo para comunicarnos sobre tu solicitud o tu membresía, no para marketing.', remove_file: 'Quitar {name}',
      notice_success_t: 'Aviso recibido', notice_success_b: 'Gracias, {name}. Revisaremos tu aviso y te contactaremos en {email} con los siguientes pasos. Mantén tu membresía activa hasta que el asunto se resuelva.',
      notice_again_b: 'Ya teníamos este aviso, {name}: no hace falta enviarlo otra vez. Te contactaremos en {email} con los siguientes pasos.', notice_ref: 'Tu número de referencia: {no}',
      before_send: 'Antes de enviar', before_items: ['Tu membresía debe haber estado activa y al corriente en la fecha impresa en el aviso.', 'Envía todas las páginas de la carta, por ambos lados.', 'Ten a la mano la declaración del año en cuestión.', 'Envíanos el aviso cuanto antes: los plazos del IRS siguen corriendo mientras lo revisamos.'],

      /* Help center */
      help_kicker: 'Centro de ayuda', help_title: '¿En qué podemos ayudarte?', help_sub: 'Respuestas sobre membresía, cobertura, facturación y qué hacer cuando llega una carta.',
      help_topics_title: 'Cómo usar tu membresía',
      help_topics: [
        ['¿Cómo envío un aviso del IRS?', 'Usa la página Enviar un aviso. Sube una foto o PDF de todas las páginas, indícanos el número de aviso y la fecha impresa, y el equipo de Best Vision Accounting se encarga del resto.'],
        ['¿Cómo se cobra mi membresía?', 'Los primeros 30 días son una prueba gratuita: no se cobra nada, aunque se registra una tarjeta. Al terminar la prueba se cobra automáticamente $19.99 y después la membresía se renueva cada mes a $19.99 hasta que la canceles.'],
        ['¿Cómo cancelo mi membresía?', 'Contáctanos en cualquier momento por correo, teléfono o desde tu portal de facturación. Si cancelas durante la prueba gratuita de 30 días, no se te cobra nada. Terminada la prueba, las cuotas pagadas durante los primeros 30 días de membresía pagada pueden ser reembolsables si no se ha solicitado, recibido o iniciado ningún beneficio. Después de eso, las cuotas pagadas no son reembolsables salvo que la ley lo exija. La cancelación termina la elegibilidad para beneficios futuros.'],
        ['¿Qué pasa si mi membresía queda inactiva durante un asunto?', 'Best Vision puede suspender o terminar la representación y los beneficios. Reactivar la membresía no restaura la cobertura de un asunto surgido mientras estaba inactiva.'],
        ['¿IRS Protect Plus cubre avisos de impuestos estatales?', 'IRS Protect Plus cubre asuntos federales elegibles del IRS. Para avisos de impuestos estatales, contacta directamente a Best Vision Accounting.']
      ],
      still_need: '¿Aún necesitas ayuda?', still_need_b: 'Envíanos un mensaje y te responderemos en horario de oficina.',

      /* Legal */
      legal_kicker: 'Legal', legal_agreement_title: 'Contrato de membresía', legal_terms_title: 'Términos del servicio', legal_privacy_title: 'Política de privacidad', legal_updated: 'Última actualización: 29 de octubre de 2026',

      /* 404 */
      nf_title: 'No encontramos esa página.', nf_body: 'Puede que el enlace esté desactualizado. Vuelve al inicio o contáctanos si necesitas ayuda.'
    },

    en: {
      nav_how: 'How it works', nav_plans: 'Membership', nav_coverage: 'Coverage', nav_faq: 'FAQ', faq_short: 'FAQ',
      login: 'Log in', cta: 'Get Protected', cta_short: 'Join', cta_join: 'Get IRS Protect Plus', per_month: '/month',
      by_bva: 'by Best Vision Accounting', language: 'Language', skip: 'Skip to content', menu_open: 'Open menu', menu_close: 'Close menu',
      submit_notice_link: 'Submit a notice', contact: 'Contact us', help: 'Help center', agreement: 'Membership Agreement', terms: 'Terms of Service', privacy: 'Privacy Policy',
      from_price: '$19.99 a month', go_contact: 'Contact us', go_home: 'Back to home', optional: '(optional)',

      title_index: 'IRS Notice & Audit Protection, $19.99/mo | IRS Protect Plus', title_enroll: 'Get protected | IRS Protect Plus', title_contact: 'Contact us | IRS Protect Plus', title_login: 'Member sign in | IRS Protect Plus', title_notice: 'Submit an IRS notice | IRS Protect Plus', title_help: 'Help center | IRS Protect Plus', title_agreement: 'Membership Agreement | IRS Protect Plus', title_terms: 'Terms of Service | IRS Protect Plus', title_privacy: 'Privacy Policy | IRS Protect Plus', title_404: 'Page not found | IRS Protect Plus',

      /* Meta descriptions (search results), ~155 characters max */
      desc_index: 'IRS representation membership: we review your IRS letters and help with audits and collections. Up to $10,000 in professional services for $19.99 a month.',
      desc_enroll: 'Join IRS Protect Plus in about two minutes: 30 days free, then $19.99 a month. Cancel anytime.',
      desc_contact: 'Questions about IRS Protect Plus membership, billing or an IRS notice? Contact the Best Vision Accounting team in Miami, in English or Spanish.',
      desc_help: 'Answers about IRS Protect Plus membership, coverage, billing, cancellation, and what to do when an IRS letter arrives.',
      desc_notice: 'IRS Protect Plus members: upload your IRS notice or letter and the Best Vision Accounting team will review it and tell you what comes next.',
      desc_login: 'IRS Protect Plus member access: open the member portal, submit an IRS notice, or contact the Best Vision Accounting team.',
      desc_agreement: 'IRS Protect Plus Membership Agreement: benefits, eligibility, exclusions, fees, cancellation and refunds. Best Vision Accounting, LLC.',
      desc_terms: 'Terms governing use of the IRS Protect Plus website and the online services of Best Vision Accounting, LLC.',
      desc_privacy: 'How Best Vision Accounting, LLC collects, uses, shares and protects information submitted through the IRS Protect Plus website.',
      desc_404: 'We can’t find the page you’re looking for.',
      not_affiliated: 'IRS Protect Plus is not affiliated with the IRS or the U.S. government.',
      guides_link: 'IRS notice guides',

      title_cookies: 'Cookie Policy | IRS Protect Plus', title_refund: 'Refunds and Cancellation | IRS Protect Plus', title_accessibility: 'Accessibility | IRS Protect Plus',
      desc_cookies: 'What the IRS Protect Plus site stores in your browser: only your language choice. Cookieless analytics and no cross-site tracking.',
      desc_refund: 'How to cancel IRS Protect Plus after the 30-day free trial and when the $19.99 monthly fees may be refundable, under the Membership Agreement.',
      desc_accessibility: 'IRS Protect Plus accessibility commitment: WCAG 2.1 AA goal, what we have done, known limitations and how to get help.',
      cookies: 'Cookie Policy', refund: 'Refunds and Cancellation', accessibility: 'Accessibility',
      legal_cookies_title: 'Cookie Policy', legal_refund_title: 'Refund and Cancellation Policy', legal_accessibility_title: 'Accessibility Statement',
      legal_updated_privacy: 'Last updated: October 9, 2026', legal_updated_terms: 'Last updated: October 29, 2026', legal_updated_cookies: 'Last updated: October 9, 2026', legal_updated_refund: 'Last updated: October 29, 2026', legal_updated_accessibility: 'Last updated: October 9, 2026',

      hero_title: 'The IRS is complicated. Your protection shouldn’t be.',
      hero_sub: 'IRS Protect Plus is an IRS representation membership: the Best Vision Accounting team reviews your IRS letters, responds for you, and helps with eligible audits and collections.',
      stat_rep: 'maximum in representation services', cancel_anytime: 'Cancel anytime.', hero_backed: 'Backed by Best Vision Accounting',
      hero_disclaimer: 'IRS Protect Plus is a membership program and is not insurance. Eligibility requirements, limitations and exclusions apply.',
      alt_hero: 'A smiling woman points at an IRS letter while holding an IRS envelope stamped Resolved, with a blue shield behind her',

      trust_kicker: 'Professional tax support from', team_kicker: 'Meet the team behind your protection',
      trust_body: 'Every IRS Protect Plus membership is backed by the Best Vision Accounting team, the same professionals who review your notice, prepare the response, and represent you before the IRS.',
      stat_month: 'per month', stat_anytime: 'Anytime', stat_cancel: 'cancellation', stat_membership: 'Membership', stat_not_ins: 'not insurance',
      alt_team: 'The Best Vision Accounting team',

      your_membership: 'Your membership', active_since: 'Active since Mar 3', eligible_note: 'Notice dated after enrollment. Eligible.',
      f1_title: 'Don’t wait for an IRS letter. Be protected before it arrives.',
      f1_body: 'To qualify, your membership must be active and in good standing on the date printed on the first IRS notice. A notice dated August 1 isn’t covered by a membership that starts August 2, even if you open the envelope later. Coverage is not retroactive: protection starts before the problem does.',
      f1_link: 'Get protected today',
      f2_title: 'Got a letter from the IRS? Send it to us.',
      f2_body: 'Many people can’t tell whether a CP2000, an examination notice, or a collection notice is serious. You don’t have to. Provide the notice, the applicable return, and requested documents, and the Best Vision team determines what the IRS is asking for and what happens next.',
      f2_link: 'See what’s included',
      send_notice: 'Send a notice', upload_notice: 'Upload IRS notice', photo_pdf: 'Photo or PDF', notice_cp2000: 'Notice CP2000', in_progress: 'In progress',
      timeline: [['Notice and return reviewed', 'Best Vision Accounting'], ['Response to the IRS', 'In progress'], ['Representation and resolution', 'Authorized before the IRS']],
      f3_title: 'Your accounting team handles the IRS matter.',
      f3_body: 'Depending on the situation, Best Vision Accounting prepares correspondence, organizes documentation, communicates with the IRS, and represents you through an authorized Enrolled Agent, CPA or attorney. Keep your membership active and in good standing until the matter is resolved.',
      alt_envelope: 'An IRS envelope stamped Important Tax Notice', alt_couple: 'A couple reviewing an IRS notice together on a laptop', alt_advisor: 'An accountant reviewing tax documents',

      plans_title: 'One membership. Clear rules.',
      plans_sub: 'Professional IRS representation from the Best Vision Accounting team for $19.99 a month. One plan, no tiers.',
      plan_tag: 'Membership', ribbon: 'One plan', plan_tagline: 'Up to $10,000 in professional representation, in place before the letter.',
      plan_items: [
        ['Up to $10,000 in professional representation', 'Professional tax representation services per taxpayer for eligible IRS matters.'],
        ['Notice, return and document review', 'We review IRS correspondence, your applicable federal return, and organize supporting documents.'],
        ['Responses and IRS communication', 'We prepare responses and correspondence and communicate with the IRS on your behalf.'],
        ['Examination and audit help', 'Assistance during IRS examinations or audits, with authorized professional representation.'],
        ['Collection and resolution', 'Assistance with eligible IRS collection or resolution matters.']
      ],
      plans_note: 'The $10,000 represents the value of professional services provided by Best Vision Accounting, LLC. It is not a cash payment to the member and does not pay your tax bill. The first 30 days are a free trial: nothing is charged. After the trial, fees paid during the first 30 days of paid membership may be refundable if no program benefit has been requested, received, or initiated.',

      offer_desc: '30-day free trial; then $19.99 a month until you cancel.',
      coverage_title: 'How coverage works', coverage_sub: 'Clear rules, taken straight from the membership agreement.',
      rules_t: 'Coverage rules',
      rules: [
        ['The notice date decides', 'A matter is eligible only if your membership was active and in good standing on the date printed on the first IRS notice. Coverage is not retroactive.'],
        ['Future tax years included', 'As long as your membership stays active, there is no fixed limit on the number of future tax years that may qualify.'],
        ['Stay active for the whole matter', 'You must remain active and in good standing until Best Vision determines its services are complete. Reactivating a membership does not restore coverage for matters that arose while it was inactive.'],
        ['Who represents you', 'An Enrolled Agent (EA), CPA, attorney, or other professional authorized to represent you before the IRS.']
      ],
      excl_t: 'What’s not covered', excl_b: 'General exclusions under the membership agreement:',
      exclusions: ['Fraud or intentional tax evasion', 'Criminal tax investigations', 'IRS notices or matters dated before your enrollment date', 'False or intentionally incomplete tax returns', 'Matters resulting from information intentionally concealed or withheld', 'Court or U.S. Tax Court representation', 'Matters specifically excluded under the agreement'],
      excl_note: 'Best Vision Accounting does not guarantee the outcome of any IRS matter. The IRS has final authority to determine tax, penalties, interest, credits and refunds.',

      covered_title: 'What your membership includes',
      covered: [
        ['Notice and document review', 'We review IRS notices and correspondence, your applicable federal return, and organize supporting documents.'],
        ['Responses to the IRS', 'We prepare responses and correspondence and communicate with the IRS on your behalf.'],
        ['Examinations and audits', 'We assist you during an IRS examination or audit, with professional representation before the IRS when authorized.'],
        ['Collection and resolution', 'Assistance with eligible IRS collection or resolution matters.']
      ],
      covered_note: 'Up to $10,000 in professional representation services per taxpayer for eligible matters. Representation does not include litigation or appearing before the U.S. Tax Court or any other court unless separately agreed in writing.',

      faq_title: 'Frequently asked questions',
      faqs: [
        ['What does IRS Protect Plus include?', 'Up to $10,000 in professional tax representation services per taxpayer for eligible IRS matters: review of notices, returns and documents; preparation of responses; communication with the IRS on your behalf; assistance during examinations and audits; authorized professional representation; and help with eligible collection or resolution matters.'],
        ['What’s not covered?', 'Fraud or intentional tax evasion, criminal tax investigations, notices or matters dated before your enrollment, false or intentionally incomplete returns, matters resulting from intentionally concealed information, and court or Tax Court representation. Best Vision Accounting does not guarantee the outcome of any IRS matter.'],
        ['Can I sign up after receiving a notice?', 'No. Your membership must be active and in good standing on the date printed on the first IRS notice relating to the matter. If a notice is dated August 1 and you enroll August 2, that matter isn’t covered, even if you opened the letter later. Reactivating a membership also doesn’t create coverage for a notice already issued.'],
        ['Does the $10,000 pay my IRS bill?', 'No. The $10,000 represents the value of professional representation services provided by Best Vision Accounting. It is not a cash payment to the member and does not pay tax, penalties or interest.'],
        ['Which tax years are covered?', 'Eligible matters for future tax years, with no fixed limit on the number of years, for as long as you keep your membership active and in good standing. Each matter qualifies when its first IRS notice is dated on or after your effective enrollment date.'],
        ['Who represents me before the IRS?', 'The Best Vision Accounting team. Representation may be provided by an Enrolled Agent (EA), a CPA, an attorney, or another professional authorized to represent you before the IRS for the matter.'],
        ['Can I cancel? What if I stop paying during a matter?', 'You can cancel at any time. If you cancel during the 30-day free trial, you are not charged. After the trial, fees paid during the first 30 days of paid membership may be refundable if you haven’t requested, received, or initiated a benefit; after that, paid fees are non-refundable except where required by law. If you cancel or your membership becomes inactive while we are handling a matter, Best Vision may discontinue the representation and other benefits.']
      ],

      cta_title: 'Don’t wait for the letter. Get IRS protection in place today.', cta_sub: 'IRS Protect Plus · $19.99 a month · cancel anytime',
      foot_price: 'Membership · $19.99/mo', a_product_of: 'A product of',
      foot_body: 'IRS problems are unpredictable. Your protection doesn’t have to be. Professional tax representation from the Best Vision Accounting team, in place before the letter arrives.',
      col_product: 'Product', col_company: 'Company', col_legal: 'Legal',
      foot_legal: 'IRS Protect Plus is a membership program offered by Best Vision Accounting, LLC and is not insurance. Benefits consist of professional tax representation services with a maximum value of $10,000 per taxpayer, subject to the terms, eligibility requirements, limitations and exclusions of the membership agreement. Membership must be active and in good standing on the date printed on the first IRS notice relating to a matter and throughout the matter. Best Vision Accounting does not guarantee the outcome of any IRS matter.',
      copyright: '© 2026 Best Vision Accounting, LLC. All rights reserved.', trademark: 'IRS Protect Plus is a trademark of Best Vision Accounting, LLC.',

      first_name: 'First name', last_name: 'Last name', email: 'Email address', phone: 'Phone number', zip: 'ZIP code',
      filing_status: 'Filing status', fs_select: 'Select…', fs_single: 'Single', fs_mfj: 'Married filing jointly', fs_mfs: 'Married filing separately', fs_hoh: 'Head of household', fs_qss: 'Qualifying surviving spouse',
      continue_btn: 'Continue', back_btn: 'Back', sending: 'Sending…',
      err_required: 'This field is required.', err_email: 'Enter a valid email address.', err_phone: 'Enter a valid phone number.', err_zip: 'Enter a valid 5-digit ZIP code.', err_agree: 'Please check this box to continue.', err_file_type: 'Only photos (JPG, PNG, HEIC) and PDF files are accepted.', err_file_size: 'Each file must be {mb} MB or smaller.', err_file_required: 'Attach at least one page of your notice.', err_date: 'Enter a valid date.',
      err_file_empty: 'That file is empty. Choose another copy.', err_file_count: 'You can attach up to {n} files.', err_year: 'Enter a 4-digit year, for example 2024.',
      err_notice_busy: 'We received too many attempts from your connection. Wait a few minutes and try again.', err_notice_unverified: 'We couldn’t confirm your files uploaded completely. Please try again.',
      uploading: 'Uploading {i} of {n}…',
      submit_failed: 'Something went wrong and your request was not sent. Please try again in a moment.',
      mailto_note: 'Your email app should open with your request ready to send. If it doesn’t, contact Best Vision Accounting directly.',
      mailto_attach: 'Please attach your notice files to the email before sending.',
      no_delivery: 'Online submission isn’t available right now. Please contact Best Vision Accounting directly and we’ll take care of you.',
      privacy_short: 'We only use your information to set up and service your membership. See our Privacy Policy.',

      enroll_kicker: 'Enrollment', enroll_title: 'Get protected in about two minutes.', enroll_sub: 'Review and accept the membership terms; next you’ll enter your details and payment method on Stripe’s secure page. Your 30-day free trial and your protection start on your effective enrollment date; the first $19.99 charge happens automatically when the trial ends.',
      step_details: 'Your details', step_review: 'Review & confirm', step_pay: 'Payment',
      details_title: 'Who are we protecting?', details_sub: 'Use the name exactly as it appears on your federal tax return.',
      review_title: 'Review and confirm', review_sub: 'Review the membership terms and accept them. Then we’ll take you to Stripe’s secure page to enter your payment method: you are not charged today, and your 30-day free trial starts when you finish checkout.',
      checkout_note: 'Your payment details are entered on Stripe’s secure page. Enrollment starts your 30-day free trial, with no charge today, and we’ll email you a welcome message with your membership number. The first $19.99 charge happens automatically when the trial ends.',
      checkout_canceled: 'Enrollment wasn’t completed and you weren’t charged. You can try again whenever you’re ready.',
      checkout_failed: 'We couldn’t open the payment page. Check your connection and try again in a moment.',
      checkout_unavailable: 'Online enrollment isn’t available right now. Call us at (305) 220-9616 and we’ll be glad to enroll you.',
      summary_plan: 'Membership', summary_price: 'Monthly fee after the trial', summary_name: 'Member', summary_email: 'Email', summary_phone: 'Phone', summary_zip: 'ZIP', summary_fs: 'Filing status', summary_start: 'Effective enrollment date', summary_total: 'Due today', summary_trial: 'Free trial', summary_trial_value: '30 days', summary_due_today: '$0.00', billed_monthly: '30-day free trial. Today you only enter your card and you are not charged. When the trial ends (day 31), the first $19.99 charge is made automatically, and then the membership renews every month at $19.99 until you cancel. You can cancel at any time by emailing info@bvaccounting.com, calling (305) 220-9616, or using your billing portal; if you cancel during the trial, you are not charged. Refunds: nothing is paid during the free month; see the terms for charges after the trial.',
      agree_pre: 'I have read, understand and agree to the ', agree_mid: ', the ', agree_mid2: ' and the ', agree_post: '.',
      agree_notice: 'I understand that IRS Protect Plus is a membership program and not insurance; that only matters whose first IRS notice is dated on or after my effective enrollment date are eligible; and that I must remain active and in good standing throughout any covered matter to continue receiving benefits.',
      agree_billing: 'I authorize Best Vision Accounting, LLC to charge $19.99 when my 30-day free trial ends and then automatically each month until I cancel.',
      pay_btn: 'Continue to secure payment', request_btn: 'Submit enrollment',
      enroll_success_t: 'Your free trial has started!', enroll_success_b: 'Your 30-day free trial is active and you have not been charged anything today. When the trial ends, $19.99 will be charged automatically and then every month until you cancel. Check your email: we sent a welcome message with your membership number and the link to your portal. If it doesn’t arrive within a few minutes, check your spam folder.',
      enroll_redirect: 'Taking you to secure checkout…',
      your_plan: 'Your membership', includes: 'Includes',
      member_q: 'Already a member with a notice?', member_q_b: 'Send us the letter directly. We’ll review it and tell you what happens next.',

      contact_kicker: 'Contact', contact_title: 'Talk to the team behind your protection.', contact_sub: 'Questions about membership, billing, or an IRS notice? Send a message and Best Vision Accounting will get back to you.',
      topic: 'Topic', topic_membership: 'Membership questions', topic_billing: 'Billing or cancellation', topic_notice: 'I received an IRS notice', topic_other: 'Something else',
      message: 'Message', message_ph: 'How can we help?', send_btn: 'Send message',
      contact_success_t: 'Message sent', contact_success_b: 'Thanks, {name}. We’ll get back to you at {email} during business hours.',
      contact_details: 'Contact details', contact_email_l: 'Email', contact_phone_l: 'Phone', contact_fax_l: 'Fax', contact_hours_l: 'Hours', contact_address_l: 'Office',

      login_kicker: 'Members', login_title: 'Member sign in', login_sub: 'See your membership, notices and cases, and submit IRS notices.',
      portal_open: 'Open the member portal', portal_note: 'You’ll be taken to the secure Best Vision Accounting member portal.',
      billing_note: 'Need to update your card or cancel your membership?', billing_open: 'Open your billing portal',
      portal_soon_t: 'Online account access is coming soon', portal_soon_b: 'Members can already submit an IRS notice online or reach the Best Vision Accounting team directly. Everything else about your membership is handled by the team on your behalf.',
      not_member: 'Not a member yet?', join_now: 'Get protected today', member_actions: 'What members can do right now',

      notice_kicker: 'Members', notice_title: 'Got an IRS letter? Send it to us.', notice_sub: 'Upload your notice and the Best Vision Accounting team will review it, determine what the IRS is asking for, and tell you what happens next.',
      member_id: 'Member ID', member_id_hint: 'From your welcome email, if you have it.',
      notice_type: 'Notice or letter number', notice_type_hint: 'Printed in the top corner of the letter, for example CP2000, CP14, or Letter 525.',
      notice_date: 'Date on the notice', tax_year: 'Tax year',
      upload_label: 'Upload your notice', upload_hint: 'Photos (JPG, PNG or HEIC) or PDFs, up to {mb} MB each and 10 files. Include every page, front and back.', upload_cta: 'Tap to choose files or drag them here',
      notes: 'Anything else we should know?', notes_ph: 'Deadlines mentioned in the letter, whether you already replied, or anything unusual.',
      notice_btn: 'Send my notice',
      consent_contact: 'I agree that Best Vision Accounting may use the information in this form to respond to my message, as described in the ',
      consent_notice: 'I authorize Best Vision Accounting to review the information and documents I send in order to handle my IRS notice, as described in the ',
      privacy_enroll: 'We use this information only to set up and manage your membership. Learn more in the ',
      consent_phone: 'We’ll use your phone number only to contact you about your request or membership, not for marketing.', remove_file: 'Remove {name}',
      notice_success_t: 'Notice received', notice_success_b: 'Thanks, {name}. We’ll review your notice and contact you at {email} with next steps. Keep your membership active until the matter is resolved.',
      notice_again_b: 'We already have this notice, {name}: no need to send it again. We’ll contact you at {email} with next steps.', notice_ref: 'Your reference number: {no}',
      before_send: 'Before you send', before_items: ['Your membership must have been active and in good standing on the date printed on the notice.', 'Send every page of the letter, front and back.', 'Have the tax return for the year in question handy.', 'Send us the notice as soon as possible: IRS deadlines keep running while we review it.'],

      help_kicker: 'Help center', help_title: 'How can we help?', help_sub: 'Answers about membership, coverage, billing, and what to do when a letter arrives.',
      help_topics_title: 'Using your membership',
      help_topics: [
        ['How do I submit an IRS notice?', 'Use the Submit a notice page. Upload a photo or PDF of every page, tell us the notice number and the date printed on it, and the Best Vision Accounting team takes it from there.'],
        ['How is my membership billed?', 'The first 30 days are a free trial: nothing is charged, though a card is collected. When the trial ends, $19.99 is charged automatically, and the membership renews every month at $19.99 until you cancel.'],
        ['How do I cancel my membership?', 'Contact us anytime by email, phone or through your billing portal. If you cancel during the 30-day free trial, you are not charged. After the trial, fees paid during the first 30 days of paid membership may be refundable if no benefit has been requested, received, or initiated. After that, paid fees are non-refundable except where required by law. Cancellation ends eligibility for future benefits.'],
        ['What happens if my membership becomes inactive during a matter?', 'Best Vision may suspend or discontinue the representation and benefits. Reactivating the membership does not restore coverage for a matter that arose while it was inactive.'],
        ['Does IRS Protect Plus cover state tax notices?', 'IRS Protect Plus covers eligible federal IRS matters. For state tax notices, contact Best Vision Accounting directly.']
      ],
      still_need: 'Still need help?', still_need_b: 'Send us a message and we’ll get back to you during business hours.',

      legal_kicker: 'Legal', legal_agreement_title: 'Membership Agreement', legal_terms_title: 'Terms of Service', legal_privacy_title: 'Privacy Policy', legal_updated: 'Last updated: October 29, 2026',

      nf_title: 'We can’t find that page.', nf_body: 'The link may be out of date. Head back home or contact us if you need a hand.'
    }
  };

  /* ---- Runtime ---- */
  var STORAGE_KEY = 'irsprotect.lang';
  var cfg = window.SITE_CONFIG || {};
  var GLOBALS = { mb: cfg.maxUploadMb || 10 };
  function get(obj, path) { return String(path).split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj); }

  /* Each language has its own static pages (Spanish at /, English at /en/),
     so the page's own <html lang> decides the language. The visitor's choice
     is remembered only so the toggle can highlight it. */
  var lang = /^en\b/i.test(document.documentElement.getAttribute('lang') || '') ? 'en' : 'es';

  function t(key, vars) {
    var v = get(DICT[lang], key);
    if (v == null) v = get(DICT.es, key);
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

  /* Switching language opens the same page in the other language, keeping
     its query (Stripe's ?checkout=success, say). The counterpart URL comes
     from the page's hreflang alternate links. */
  function setLang(l) {
    l = l === 'en' ? 'en' : 'es';
    try { localStorage.setItem(STORAGE_KEY, l); } catch (e) { /* ignore */ }
    if (l === lang) return;
    var alt = document.querySelector('link[rel="alternate"][hreflang="' + l + '"]');
    if (alt) { window.location.href = alt.getAttribute('href').replace(/^https?:\/\/[^/]+/, '') + window.location.search + window.location.hash; return; }
    lang = l;
    apply();
  }

  window.I18N = { t: t, apply: apply, setLang: setLang, dict: DICT };
  Object.defineProperty(window.I18N, 'lang', { get: function () { return lang; } });

  document.documentElement.lang = lang;
  document.documentElement.classList.add('js');
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { apply(); });
  else apply();
})();
