
import React from "react"

const ReturnMenu = () => (
  <a className="md:hidden w-1/5 float-right" href="#toc-menu">
    Menu
  </a>
);

export default () => {
  return (
    <div className="flex w-full md:w-4/5 md:overflow-y-scroll md:overflow-hidden px-4 leading-relaxed text-lg">
      <div className="w-full md:flex-row">
        <div className="my-4">
          <span className="anchor" id="2019-changes" />         
          <p>
            <b>Cambios del 2019</b>
          </p>
          <p>
            • El formulario 1040 ha sido rediseñado
          </p>
          <p>
            • Formulario 1040-SR, un nuevo formulario, esta disponible para contribuyentes de 65 años y mayores.
          </p>
          <p>
            • Este manual de instructivo incluye amos formularios
              Formulario 1040 y 1040-RS.
              Para detalles en los mismos y otros cambios, vea la sección "Novedades" de este instructivo. 
          </p>
          <br/>
          <p>
            <b>Futuros cambios</b>
          </p>
          <p>
            Visite IRS.gov y IRS.gov/Forms para saber la última información sobre los cambios relativos al formulario 1040 y 1040-RS y sus instrucciones, así como la legislación aprobada después de ser publicada vaya al sitio IRS.gov/Form1040.
          </p>
          <br/>

          <p>
            <span className="anchor" id="helpful-hints" />
            <h1 className="border-b mb-1 text-2xl">
              <a>Consejos útiles para los formulario 1040 y 1040-RS</a>
              <ReturnMenu />
            </h1>
              Para el 2019 usará el formulario 1040 o, si usted nació después del 2 de Enero de 1055 tiene la opción de usar el nuevo formulario 1040-RS.
              Usted solo necesitará llenar el formulario 1040 o 1040-RS si se encuentra entre los listados 1 y 3. Sin embargo, si su devolución es más complicada (por ejemplo si usted está declarando una cierta cantidad de deducciones o créditos o si debe impuestos adicionales), usted tiene que completar una o más de los listados numerados. Debajo se encuentra una guiá general sobre que listado(s) necesita llenar basado en sus circunstancias. Para mayor información vea las instrucciones para los listados. 
              Si usted llena eléctricamente su devolución, usted generalmente no notará muchos cambios y el software que usted utilice determinara que listado necesita.
          </p>
          <br/>
          <p>
            <b>Listado 1, Parte I</b>
          </p>
          <p>
            Tiene ingresos adicionales, como pueden ser ingresos o perdidas por negocios o granjas,  indemnizaciones por desempleo, premios o atribuciones en dinero, o ganancias de apuestas.
          </p><br/>
          
          <p>
            <b>Listado 2, Parte I</b>
          </p>
          <p>
            Debe un impuesto mínimo alternativo o necesita hacer un reembolso sobre un exceso de pago por adelantado de un impuesto sobre las primas.  
          </p><br/>
          
          <p>
            <b>Listado 2, Parte II</b>
          </p>
          <p>
            Debe otros impuestos, como el impuesto al trabajador autónomo, el impuesto de los trabajadores domésticos, impuestos adicionales sobre la cuenta individual de retiro o otros planes de retiro calificados y otras cuentas con beneficios fiscales.
          </p><br/>
          
          <p>
            <b>Listado 3, Parte I</b>
          </p>
          <p>
            Puede solicitar créditos no reembolsables que no sea el crédito fiscal por hijos o el crédito fiscal por otros dependientes; como lo es el crédito fiscal extranjero, el crédito por educación o los créditos por negocios en general.
          </p><br/>
          
          <p>
            <b>Listado 3, Parte II</b>
          </p>
          <p>
            Puede solicitar créditos reembolsables que no sea el crédito por ingresos, crédito "Oportunidad Americana" o el crédito de impuesto por hijo adicional; como lo es el crédito por el impuesto la prima neta o el crédito por impuesto de cobertura médica.
            Tiene otros pagos, como lo son la cantidad pagada con un requerimiento de una extensión por llenar o el exceso retenido por el impuesto de seguridad social.
          </p><br/>
        </div>

        <div className="my-4">
          <span id="taxpayer-advocate-service" className="anchor" />
          <h1 className="border-b mb-1 text-2xl">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Servicio de defensa al contribuyente</a>
            <ReturnMenu />
          </h1>
          <p>
            <b>¿Que es el servicio de defensa al contribuyente?</b>
          </p>
          <p>
            El servicio de defensa al contribuyente(TAS por sus siglas en ingles) es una organización independiente dentro del servicio de impuestos internos (IRS por sus siglas en ingles) que se encarta de ayudar a los contribuyentes y defender sus derechos. Nuestro trabajo es asegurarnos que cada contribuyente sea tratado de manera justa, y que sepa y entienda sus derechos bajo la carta de derechos del contribuyente.            
          </p><br/>

          <p>
            <b>¿Qué puede hacer por ti el servicio de defensa al contribuyente?</b>
          </p>
          <p>
            Podemos ayudarle con los problemas que usted no puede resolver con la IRS. Adicionalmente, nuestro servicio es gratuito. Si usted solicita nuestra ayuda, usted sera asignado con un miembro de nuestro servicios que hará todo lo posible para resolver su problema y que trabajará con usted a través del proceso de resolución de su dilema<br/>
            TAS te puede ayudar si:<br/>
            • Su problema le está causando dificultades financieras a usted, a su familia o a su negocio.<br/>
            • Está atravesando (o su negocio está atravesando) una amenaza inmediata de acción lesiva.<br/>
            • Usted está repetidamente tratado de contactar al IRS pero no ha obtenido una respuesta, o la IRS no le ha respondido en la fecha prevista.
          </p><br/>

          <p>
            <b>¿Cómo puede contactarnos?</b>
          </p>
          <p>
            Tenemos oficinas en todos los estados, en el Distrito de Columbia, y en Puerto Rico. El número de su servicio local lo puede encontrar en www.TaxpayerAdvocate.IRS.gov y en su directorio local. También nos puede llamar al número 877-777-4778.
          </p><br/>

          <p>
            <b>¿Cómo puede aprender sobre sus derechos como contribuyente?</b>
          </p>
          <p>
            La carta de derechos del contribuyente describe diez derechos básicos que todo contribuyente tiene cuando se encuentra tratando con la IRS. Nuestro juego de herramientas sobre los impuesto que puede encontrar en www.TaxpayerAdvocate.IRS.gov puede ayudarle a comprender que significan esos derechos para usted y como aplicarlos. Esos son sus derechos. Conózcalos. Úselos.
          </p><br/>

          <p>
            <b>¿De que otra manera el servicio de defensa al contribuyente puede ayudar a los contribuyentes?</b>
          </p>
          <p>
            El TAS trabaja para resolver problemas a gran escala que afectan a muchos contribuyentes. Si usted conoce alguno de estos grandes problemas, por favor reportánoslo en IRS.gov/SAMS.
          </p><br/>

          <p>
            <b>Ayuda a contribuyentes de las clínicas de contribuyentes de bajo recursos </b>
          </p>
          <p>
            Las clínicas de contribuyentes de bajos recursos (LITCs por sus siglas en ingles) con independientes de la IRS. Algunas sirven a personas cuyo ingreso está por debajo de cierto nivel y que necesitan resolver problemas con sus impuestos. Esas clínicas proveen representación profesional gratuita, o por una pequeña cuota, ante la IRS o en tribunales en: auditorias, apelaciones, controversias en la recaudación de impuestos, y otros problemas. Algunas clínicas proveen información en muchos idiomas distintos, a personas que hablan el Ingles como segunda lengua, sobre los derechos y responsabilidades del contribuyente. Para mayor información, y para encontrar una clínica cerca de usted, lea la pagina del LITC en IRS.gov/LITC o la publicación 4134 del IRS, listado de clínicas de contribuyentes de bajos recursos.
            También puede tener está publicación en su oficina local del IRS o llamando al número 800-829-3676.
          </p><br/>

          <p>
            <b>Foro de la defensoría del contribuyente</b>
          </p>
          <p>
            ¿Tiene alguna sugerencia para mejorar el IRS y no sabe como contactarnos? El Foro de la defensoría del contribuyente (TAP) tiene distintos grupos de voluntarios que escuchan a los contribuyentes, identifican los problemas de los contribuyentes y hace sugerencias para mejorar el servicio de la IRS y la satisfacción del usuario. El foro es demográficamente y geográficamente diverso, con al menos un miembro en cada estado, el Distrito de Columbia y Puerto Rico. Contacte al TAP en www.improveirs.org o al número 888-912-1227 (gratuitamente). 
          </p><br/>

        </div>

        <div>
          <span id="affordable-care-act" className="anchor" />
          <h1 className="border-b mb-1 text-2xl">
            <a>Acto de cuidado accesible</a>
            <ReturnMenu />
          </h1>

          <p>
            <b>Requerimiento para conciliar el pago adelantado por crédito de impuesto sobre las primas</b>
          </p>
          <p>
            El crédito de impuesto sobre la prima ayuda a pagar primas compradas en el mercado para seguro médico. Personas elegibles pueden tener directamente en su compañía de seguros un pago anticipado por los créditos de impuestos sobre las primas a su favor.<br/>
            Si usted o algún miembro de su familia registrado en su seguro médico a través del mercado junto con el pago anticipado sobre los créditos de impuestos sobre primas hacen que su compañía de seguro reduzca su prima de pago mensual, usted debe de adjuntar el formulario 8962 a su devolución para conciliar (comparar) el pago por adelantado con su crédito por impuestos sobre primas del año.<br/>
            El mercado es requerido de enviar el formulario 1095-A a más tardar le día 31 de enero del 2020, enlistando los pagos adelantados y otra información necesaria para completar el formulario 8962.<br/>
            1. Usted completara el formulario 1095-A desde el mercado.<br/>
            2. Completar el formulario 8962 para reclamar el crédito o conciliar su pago adelantado del crédito.<br/>
            3. Incluir el formulario 8962 junto con el formulario 1040, formulario 1040-RS, o el formulario 1040-NR. (No incluya el formulario 1095-A).
          </p><br/>

          <p>
            <b>Reporte de cobertura médica</b>
          </p>
          <p>
            Si usted o alguien en su familia fue trabajador en el 2019, el empleador puede requerirlo para que mande su formulario 1095-C. La parte II del formulario 1095-C muestra si su empleador le ofreció cobertura en su seguro médico, y si es el caso, muestra información sobre la oferta. Usted debe recibir el formulario 1095-C antes de marzo del 2020. Esta información puede ser relevante si se compro la cobertura de su seguro médico para el 2019 a través del del Mercado de Seguros Médicos y desea reclamar el crédito del impuesto sobre prima listado 3, linea 9. De igual manera, usted no necesita esperar a recibir este formulario para llenar su devolución. Usted puede confiar en información distinta por su empleador. si usted no desea reclamar el crédito por impuestos sobre primas para le 2019 no necesita la información contenida en la parte II del formulario 1095-C. Para mayor información sobre quien es elegible para el crédito por impuestos sobre primas, vea las instrucciones del formulario 8962.
          </p><br/>
          <p>
            Recordatorio: Cobertura de seguro médico. SI usted necesita una cobertura de seguro médico visite el sitio www.HealthCare.gov para conocer más respecto de las opciones de seguro médico que existen para usted y su familia, como comprar un seguro médico y como puede calificar para obtener asistencia financiera para comprar un seguro médico.
          </p><br/>
        </div>

        <div className="my-4">
          <span className="anchor" id="what-is-new" />
          <h1 className="border-b mb-1 text-2xl">
            <a>Novedades</a>
            <ReturnMenu />
          </h1>
          <p>
            Para obtener información sobre cambios adicionales sobre la ley de impuestos del 2019 o el desarrollo de cualquier cambio en el formulario 1040 o 1040-RS o sus instrucciones, visite el sitio IRS.gov/Form1040. 
          </p><br/>

          <p>
            <b>Formulario 1040-SR</b>
            <br />
              Formulario 1040-RS, U. S. A.
              Devolución de impuestos para adultos mayores (tercera edad), ha sido introducida para el ejercicio fiscal 2019. Usted puede usar este formulario si nació antes del 2 de enero de 1955.
              El formulario generalmente sustituye el formulario 1040.
              Este instructivo incluye ambos formularios, el 1040 y el 1040-RS.
          </p><br/>

          <p>
            <b>Menos listas numeradas</b>
            <br />
              Este año, hay tres listados numerado en lugar de seis. Listado dos y cuatro han sido combinados dentro del listado dos y es ahí donde usted tiene que reportar cualquier impuesto adicional que deba. Listado tres y cinco han sido combinados dentro del listado tres y es ahí donde donde usted reportará cualquier crédito que usted no reclame en el formulario 1040 o 1040-RS.
          </p><br/>

          <p>
            <b>IRA y el reporte de pensiones</b>
            <br />
              Ahora su IRA reportara por lineas separadas sus distribuciones, pensiones y anualidades.  
              Use las lineas 4a y 4b del formulario 1040 o 1040-RS para reportar su IRA y la distribución y su base gravable. Vea el instructivo para las lineas 4a y 4b, y posteriormente, las lineas 4c y 4d.
          </p><br/>

          <p>
            <b>Ahora tienen que ser reportadas las ganancias (o perdidas) de capital en la linea seis</b>
            <br />
              En 2018, las ganancias (o perdidas) de capital eran reportadas en listado 1 (formulario 1040), linea trece. En 2019, será reportado en el formulario 1040 o 1040-RS, linea seis.
          </p><br/>

          <p>
            <b>Responsabilidad de pago compartida en la cobertura de gastos médicos</b>
            <br />
              Para el 2019 usted ya no tiene que hacer una responsabilidad de pago ni que llenar el formulario 8965, si usted no tiene el la cobertura de seguro médico del mínimo esencial por una parte o por el total del 2019.
              La casilla "Cobertura anual de seguro médico o su excepción" ha sido removida del formulario 1040.
          </p><br/>

          <p>
            <b>El importe de la deducción estándar ha aumentado</b>
            <br />
              Para el 2019, el importe de la deducción estándar ha incrementado para todos los contribuyentes. Los importes son:<br/>
              • Soltero o casado solicitado por separado-$12,200.<br/>
              • Casados solicitándolo en conjunto o viuda(o) elegible-$24,400.<br/>
              • Jefe(a) de familia-$18,350.
          </p><br/>

          <p>
            <b>Deducción de ingresos para negocios elegibles.</b>
            <br />
              La hoja de trabajo simplificada para calcular su deducción de ingresos para su negocio elegible es ahora el formulario 8995, calculo de deducción de ingresos para negocios elegibles. Si usted no reúne los requisitos para llenar el formulario 8995, use el formulario 8995-A, deducción de ingresos para negocios elegibles. Para mayor información vea las instrucciones de cada formulario.
          </p><br/>

          <p>
            <b>La cuota de excepción del impuesto mínimo alternativo (AMT por sus siglas en ingles) ha sido incrementada.</b>
            <br />
              La cuota de excepción del ATM ha sido incrementada a $71,700 ($111,700 si es presentada por un matrimonio en conjunto o un(a) viudo(a) elegible; $55,850 si es llenado por un matrimonio por separado). El nivel de ingresos al cual la excepción del AMT empieza a eliminarse gradualmente ha sido incrementada a $510,300 ($1,020,600 si es solicitada por un matrimonio en conjunto o un(a) viudo(a) elegible).
          </p><br/>

          <p>
            <b>Oportunidad de inversiones elegibles.</b>
            <br />
              Si usted tiene una inversión elegible para el fondo de oportunidades elegibles durante cualquier parte del año, usted debe adjuntar el formulario 8997, declaración inicial anual del fondo de oportunidades de inversiones elegibles (QOF por sus siglas en ingles), para sus devoluciones. Para mayor información vea el formulario 8997 y su instructivo.
          </p><br/>

          <p>
            <b>Moneda virtual.</b>
            <br />
              Si en el 2019, usted se involucro en transacciones que involucran monedas virtuales usted necesita llenar el listado 1. Vea las instrucciones del listado 1 para mayor información.
          </p><br/>

          <p>
            <b>Dirección de correo electrónico</b>
            <br />
              Un campo adicional para su dirección de correo electrónico ha sido añadido al formulario 1040 y 1040-RS
          </p><br/>

          <p>
            <b>Exención de pagos del Medicaid</b>
            <br />
              Se han realizado cambios a como serán tratadas las exenciones de pago del Medicaid con propósito de recibir ingresos por los créditos. Vea las instrucciones de la linea 18a.
          </p><br/>

          <p>
            <b>Ampliación de las disposiciones fiscales.</b>
            <br />
              La legislación reciente ha ampliado ciertos beneficios fiscales que expiraron en el final del 2017. Esos beneficios fiscales se incluyen a continuación.<br/>
              • Reducción de las matriculas y cuotas.<br/>
              • Deducciones por primas de seguros de hipotecas.<br/>
              • Crédito de energía de propiedad no empresarial.<br/>
              • Crédito de vehículos de recarga con combustibles alternativos.<br/>
              • Crédito de empleados de la India.
              Si en 2019 usted es elegible para uno o más de estos beneficios, puede reclamarlos en su devolución del 2019. Si usted es elegible para uno o más de estos beneficios en el año fiscal 2018, usted necesita llenar una devolución corregida, formulario 1040-X, para poder reclamarlos. Visite IRS.gov/Form1040X para mayor información sobre la corrección en su devolución de impuestos.
          </p><br/>

          <p>
            <b>Alivio tributario en situaciones de desastre.</b>
            <br />
              El alivio tributario en situaciones de desastre fue decretado para ciertos desastres declarados por la federación. Los beneficios fiscales ofrecidos por esta ayuda incluyen incluye los siguientes.<br/>
              • Un incremento en el estándar de deducciones basado en la elegibilidad de la perdida por el desastre.
              Vea las instrucciones para la linea 9 y las instrucciones para el listado A para información sobre la elegibilidad y el calculo del incremento en el estándar de la deducción.<br/>
              • Elección de usar su ingreso ganado en 2018 para calcular su crédito sobre el ingreso ganado del 2019. Vea las instrucciones para la linea 18a para mayor información sobre esta elección.<br/>
              • Elección de usar su ingreso ganado en 2018 para calcular su crédito del impuesto por hijo adicional para el ejercicio 2019. Vea las instrucciones para la linea 18b y las instrucciones para el listado 8812 para mayor información sobre esta elección.
          </p><br/>

        </div>
        <div className="my-4">
          <span className="anchor" id="free-software-options" />
          <h1 className="text-2xl">
            <a>Opciones de software gratuitos para hacer su declaración de impuestos</a>
            <ReturnMenu />
          </h1>

          <p>
            <b>¿Por qué 49 millones de americanos usaron el software "Free File"</b>
            <br />
              • El software utiliza la ultima tecnología en encriptación para guardar de manera segura tu información.<br />
              • Solicitudes tempranas de pago flexible; a pagar para el 15 de abril del 2020 (para la mayoría de las personas).<br />
              • Mayor veracidad y menores errores significa un procesamiento más rápido.<br />
              • Un reconocimiento de rápida entrega-recepción de que su solicitud de devolución ha sido recibida y aceptada. <br />
              • Sea ecológico y reduzca la cantidad de papel que usa.<br />
              • Es gratuito a través de IRS.gov/FreeFile.<br />
              • Rápido reintegro y deposito; ocho de cada diez contribuyentes que obtienen de manera más rápido su reintegro por usar la presentación directa y el llenado electrónico.
          </p><br/>

          <p>
            <b>Haga su declaración de impuestos gratis</b>
            <br />
              Si usted tuvo durante el 2019 un ingreso bruto de $69,000 o menor,usted puede usar el software "Free tax" para preparar y llenar eléctricamente su devolución de impuestos.
              ¿Tuvo ingresos mayores? Llene de manera gratuita los formularios rellenables.
              "Free File". Esta asociación publico-privada, entre el IRS y el proveedor de software privado, hace aproximadamente una docena de productos de software de nombre comercial y archivos electrónicos de manera gratuita.
              Setenta por ciento de los contribuyentes del país son elegibles.
              Para más detalles solo visite el sitio IRS.gov/FreeFile."Free File" combina sin costo para usted todos los beneficios de los archivos electrónicos en un software de manera fácil de usar. Las preguntas guiadas ayudaran a asegurarse de que usted obtendrá todos los créditos y deducciones que merece. Es rápido, seguro y gratuito.
              Usted puede revisar el criterio de los proveedores de manera gratuita.
              Usted puede revisar el criterio del proveedor para su uso gratuito o usar la herramienta en linea para encontrar cual software gratuito se adecua mejor a su situación. Algunos proveedores de software ofrecen la preparación de devoluciones de impuestos estatales de manera gratuita.
              Archivos gratuitos de formularios rellenables. El ISR ofrece versiones electrónicas de los formularios de papel del ISR que también pueden ser llenados de manera electrónica gratis. Los archivos gratuitos de formularios rellenables son la mejor opción para personas experimentadas que están preparando su devolución de impuestos ellos mismos. No existen limitaciones de ingreso. Los archivos gratuitos de formularios rellenables básicamente hacen cálculos matemáticos. Solo respaldan formularios federales de impuestos.
          </p><br/>

          <p>
            <b>"Free tax help" esta disponible en toda la nación</b>
            <br />
              Existen voluntarios disponibles en todas las comunidades de la nación que proveen ayuda fiscal gratuita para personas con ingresos bajos y medios (generalmente debajo de $56,000 en ingreso bruto ajustado) y contribuyentes de la tercera edad (sesenta años cumplidos y mayores). En ubicaciones especificas, los contribuyentes pueden presentar de manera autónoma y electrónica sus propias devoluciones de impuestos con la ayuda de un voluntario certificado por la ISR.
              Vea como puede obtener ayuda fiscal de manera cercana al final de las instrucciones para información adicional o visite el sitio IRS.gov (Keyword: VITA) para encontrar una locación cerca de usted.
          </p><br/>

          <p>
            <b>Hacer el pago de sus impuestos de manera electrónica es fácil.</b>
            <br />
              Usted puede hacer sus pagos electrónicos en linea, por teléfono o por un teléfono celular. Pagar de manera electrónica es seguro y fiable. La IRS utiliza la ultima tecnología en encriptación y no almacena los datos del número de su cuenta bancaria para enviar su pago. Cuando usted utiliza alguna de las opciones de pago electrotecnia de la IRS, usted obtiene el control de sus pagos de impuestos y le da una paz mental. Usted determina la fecha de pago, y recibe de manera inmediata una confirmación de la IRS. 
              Es fácil, seguro y mucho más rápido que enviar por correo un cheque o una orden de pago. Visite el sitio IRS.gov/Payments para ver todas sus opciones de pago electrónico.
          </p><br/>
        </div>

        <div className="my-4">
          <span className="anchor" id="filling-requirements" />
          <h1 className="text-2xl">
            <a>Requerimientos de llenado</a>
            <ReturnMenu />
          </h1>

          <p>
            <br/>
            <span className="anchor" id="do-you-have-to-file" />
            <b>
              <a>¿Tiene que llenarlo usted?</a>
              <ReturnMenu />
            </b><br/>
            <br />
              Use la tabla A, B o C para ver si usted debe llenar una devolución. Ciudadanos de U. S. A. que han vivido dentro del país o que han tenido ingresos desde U. S. A. deben de ver la publicación 570. Residentes de Puerto Rico pueden usar el tema 901 para ver si ellos deben de llenar una devolución.<br/>

              Consejo:Incluso si usted no tiene otro modo que llenar una devolución, usted debe de llenar una para obtener una devolución de cualquier retención de impuestos federal. Usted también debe de llenar una si es elegible para cualquier de los siguientes créditos.<br/>
              • Crédito por ingresos.<br/>
              • Crédito por impuesto de hijo adicional.<br/>
              • Crédito de oportunidad americana.<br/>
              • Crédito por impuesto federal sobre combustibles.<br/>
              • Crédito por impuesto sobre las primas.<br/>
              • Crédito por impuesto sobre seguro médico.<br/>
              Para mayores detalles vea la publicación 501. También vea la publicación 501 si usted no tiene que llenar el formulario 1099-B pero usted lo recibió (o la declaración substituta).<br/>

              <b>Requerimientos para conciliar pagos por adelantado del crédito de impuestos sobre la prima</b><br/>
              Si usted, su esposa con la que esta llenando la devolución, o un dependiente que fue inscrito en su cobertura médica a través del mercado del 2019 hizo pagos por adelantado de crédito de impuestos sobre la prima que fueron hechos para esta cobertura, usted debe de llenar una devolución y adjuntar el formulario 8962. Usted (o cualquier que inscribió) debe recibir el formulario 1095-A con información sobre su cobertura y cualquier pago por adelantado del mercado.
              Usted debe adjuntar el formulario 8962 si alguien más lo inscribió a usted, a su esposa o a algún dependiente. Si usted es un dependiente que esta reclamando en la devolución del 2019 de alguien más, usted no debe de adjuntar el formulario 8962.<br/>

              <b>Excepción para algunos menores de diecinueve años o estudiantes de tiempo completo</b><br/>
              Si ciertas condiciones se cumplen, usted puede ser electo para incluir en su devolución de ingresos como un menor de diecinueve años al final del 2019 o como un estudiante menor de veinticuatro años al final del 2019. Para hacerlo, use el formulario 8814. Si usted elige esta opción su hijo no deberá de llenar una devolución.
              Para mayores detalles use el tema de impuestos 553 o vea el formulario 8814. 
              Un hijo nacido antes el 1 de enero de 1996 es considerado de veinticuatro años a final del 2019. No use el formulario 8814 para este hijo.<br/>

              <b>Extranjeros residentes</b><br/>
              Estas reglas aplicas también si usted es un extranjero residente. También, si usted es elegible para ciertos tratados de beneficios fiscales. Para detalles vea la publicación 519.<br/>

              <b>Extranjeros no residentes y extranjeros con doble estado</b><br/>
              Esas reglas también aplican si usted es un extranjero no residente o un extranjero con doble estado y aplican las siguientes.<br/>
              • Usted esta casado con un ciudadano de U. S. A. o con un extranjero residente hasta finales del 2019.<br/>
              • Usted eligió pagar impuestos como un extranjero residente. Para detalles vea la publicación 519.<br/>

              <b>PRECAUCIÓN</b><br/>
              Aplican reglas especificas para determinar si usted es un residente extranjero, o un extranjero con doble estado. La mayoría de los residentes extranjeros y los de doble estado tienen diferentes requisitos de llenado y pueden tener que llenar el formulario 1040-NR o el formulario 1040-NR-EZ. La publicación 519 explica estos requerimientos y otra información para ayudar a extranjeros a cumplir con las leyes de impuestos de U. <br/>

              <br/>
              <span className="anchor" id="when-and-where-should-you-file" />
              <b>
                <a>¿Cuándo y dónde se debe llenar?</a>
                <ReturnMenu />
              </b><br/>

              <br/> Para el 15 de abril del 2020 se llena el formulario 1040 y 1040-RS. Si usted lo llena después de esta fecha, puede tener que pagar intereses y penalidades. Vea después los intereses y penalidades<br/>

              Si usted esta en servicio, o apoyo, de las fuerzas armadas de Estados Unidos en una área de combate designada o en operaciones de contingencia, usted es apto de llenarlo después. Para detalles vea la publicación 3.<br/>

              Si usted llena eléctricamente su devolución, no será necesario enviarla por correo. Sin embargo, si usted elige enviarla por correo, las instrucciones de llenado y envió se encuentran al final de este instructivo.<br/>

              <br/>
              <span className="anchor" id="what-if-you-cannot-file-on-time" />
              <b>
                <a>¿Qué pasa si no lleno a tiempo mi devolución?</a>
                <ReturnMenu />
              </b><br/>

              <br />Usted puede tener una extensión automática de seis meses si usted llena el formulario 4868 antes de que su devolución sea enviada. Para detalles vea el formulario 4868. 
              En lugar de llenar el formulario 4868, usted puede aplicar por una extensión automática haciendo un pago electrónico el día de envió de su devolución.<br />
              <b>PRECAUCIÓN</b><br />
              El llenado de extensión automática de seis meses no extiende el periodo para el pago de sus impuestos. Si usted no paga sus impuestos en la debida fecha original de su devolución, usted deberá intereses sobre los impuestos no pagados y puede deber penalidades. Vea el formulario 4868.<br/><br/>

              Si usted es un ciudadano de Estados Unidos o un extranjero residente, usted puede ser elegible para una extensión automática de tiempo de llenado sin llenar el formulario 4868. Si usted es elegible, en la debida fecha de su devolución, tiene que cumplir una de las siguientes condiciones.<br/>
              • Usted vive fuera de los estados unidos o Puerto Rico y su lugar principal de negocios o puesto de deber es fuera de los Estados Unidos y Puerto Rico.<br/>
              • Usted esta en servicio en la milicia o servicio naval fuera de los Estados Unidos y Puerto Rico.<br/><br/>

              Esta extensión le da dos meses extra para llenar y pagar sus impuestos, pero pueden ser cargados intereses sobre la fecha original de envió para la devolución de cualquier impuesto no pagado.
              Usted debe incluir informes mostrando que cumple con los requisitos. Si después del periodo de dos meses usted sigue siendo incapaz de llenar su devolución, usted puede obtener cuatro meses adicionales si llena el formulario 4868 antes del 15 de junio del 2020. Esta extensión de cuatro meses de tiempo para el llenado no extiende el tiempo de pago de sus impuestos. Vea el formulario 4868.<br/>

              <br/>
              <span className="anchor" id="private-delivery-services" />
              <b>
                <a>Servicios de envió privado</a>
                <ReturnMenu />
              </b><br/>

              <br/> Si usted elige enviar por correo su devolución, usted puede usar determinados servicios de entrega privado asignados por la IRS para cumplir con la regla del "envió puntual tratado como llenado/pagado en forma" para devolución y pago de impuesto. Esos servicios de entrega privado incluyen solo los siguientes.<br />
              • DHL Express 9:00, DHL Express
              10:30, DHL Express 12:00, DHL Express mundial, DHL Sobre Express, DHL Importación Express 10:30, DHL
              Importación Express 12:00, y DHL Importación
              Express Mundial.<br />
              • UPS Aero Temprano A.M. del día siguiente,
              UPS Aero Día Siguiente, UPS Económico Aero Día SiguienteNext, UPS Aero 2do día, UPS Aero 2do Día A.M., UPS Express Mundial
              Plus, y UPS Express Mundial.<br />
              • FedEx Primera noche siguiente, FedEx Prioridad Noche siguiente, FedEx Noche Siguiente Estándar, FedEx 2 días, FedEx Siguiente vuelo internacional, FedEx Prioridad Internacional, FedEx Primero Internacional, y
              FedEx Económico Internacional.<br /><br />

              Para revisar cualquier actualización de la lista de proveedores de servicio de envíos privados designados, visite IRS.gov/PDS. Para obtener la dirección de correo de la IRS si usted está sudando un servicio de envíos privado visite el sitio  IRS.gov.PDSStreetAddresses.<br />
              
              El servicio privado de entrega puede decirle como obtener una prueba por escrito de la fecha de envió.<br />

          </p><br/>
        </div>
      </div>
    </div>
  )
}
