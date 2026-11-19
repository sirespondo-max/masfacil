# masfacil.es — Dominio en venta

Landing estática en español de España. Su único propósito es vender masfacil.es a un futuro comprador. El posicionamiento propuesto es trámites y gestión documental para particulares en España. No ofrece servicios administrativos, formularios, captación de leads, analítica, cookies propias ni fuentes externas.

## Archivos de publicación

Sube exclusivamente estos archivos a la raíz de un repositorio dedicado:

- index.html
- styles.css
- script.js
- favicon.svg
- social-card.png
- robots.txt
- sitemap.xml
- CNAME
- .nojekyll
- README.md (opcional)

No subas el CSV ni el dossier original a un repositorio público. No son necesarios para la web.

## Enlace de venta

La constante DOMAIN_SALE_URL en script.js contiene la URL de Sedo facilitada por el titular. También hay tres enlaces completos en index.html para permitir la compra sin JavaScript. Si cambias el destino, actualiza ambos archivos. El identificador trackingRequestId procede del enlace proporcionado; si Sedo facilita posteriormente una URL permanente del anuncio, conviene reemplazar el enlace por esa URL. No se ha iniciado ni comprobado una operación de compra o pago.

Los enlaces abren Sedo en la misma pestaña, sin enviar el referente. Revisa manualmente antes de publicar que muestran masfacil.es y las condiciones correctas. No se ha supuesto un precio ni una garantía de transferencia.

## GitHub Pages

1. Crea un repositorio dedicado y sube los archivos de publicación.
2. En Settings > Pages selecciona Deploy from a branch, rama main, carpeta / (root).
3. Verifica la titularidad del dominio desde la configuración de Pages de tu cuenta siguiendo el registro TXT que GitHub genere. Conserva ese TXT.
4. En el repositorio, Settings > Pages > Custom domain: introduce www.masfacil.es y guarda. El archivo CNAME ya contiene ese valor.
5. Configura los DNS indicados abajo después de asociar el dominio al repositorio.
6. Cuando GitHub valide los DNS y emita el certificado, activa Enforce HTTPS.
7. Comprueba las versiones con y sin www y HTTP/HTTPS. El destino final debe ser https://www.masfacil.es/.

No se ha creado un repositorio, publicado el sitio ni modificado ningún DNS.

## DNS

Sustituye TU_USUARIO por el usuario u organización que aloja el repositorio. No añadas el nombre del repositorio al destino CNAME.

| Tipo | Nombre | Destino |
|---|---|---|
| CNAME | www | TU_USUARIO.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Alternativa para la raíz: un ALIAS o ANAME hacia TU_USUARIO.github.io si el proveedor lo admite, en lugar de los cuatro registros A. No configures ambas alternativas simultáneamente sin indicaciones del proveedor. No modifiques registros de correo MX/TXT. Sustituye únicamente los registros web incompatibles; comprueba también si existen AAAA antiguos que dirijan a otro alojamiento.

Con raíz y www apuntando correctamente a Pages y www configurado como dominio personalizado, GitHub gestiona la redirección de la raíz a www. DNS por sí solo no realiza redirecciones HTTP. No necesitas una redirección JavaScript ni contratar otra redirección del registrador. Evita registros comodín.

Comprobación en PowerShell:

```powershell
Resolve-DnsName www.masfacil.es -Type CNAME
Resolve-DnsName masfacil.es -Type A
```

Fuente oficial, consultada el 19 de noviembre de 2026:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## SEO y GEO

Title y descripción orientados a vender el dominio; canonical con www; robots y sitemap; Open Graph y Twitter con imagen PNG local. Se incluyen WebSite, WebPage y Product para describir el activo. No hay Offer porque no se ha incorporado un precio comprobado. Product sin oferta o valoraciones no busca obtener resultados enriquecidos de producto. No se inventan tráfico, antigüedad, backlinks, valoraciones o derechos de marca.

No se necesita hreflang con una sola versión lingüística ni BreadcrumbList sin una jerarquía real de páginas. Las FAQ están disponibles en HTML nativo. No se prometen resultados enriquecidos, posiciones ni citaciones por IA; no se incluye llms.txt. La página describe un posible uso sectorial, no pretende resolver consultas administrativas de ciudadanos.

Referencia: https://developers.google.com/search/docs/appearance/ai-features

## Privacidad e identificación del titular

El aviso explica que no hay formularios, cookies propias ni seguimiento incorporado. El alojamiento puede tratar datos técnicos y Sedo tiene sus propias condiciones. No se afirma que la navegación carezca de todo tratamiento de datos.

Antes de publicar, completa el pie con la identificación real del titular y los datos de contacto legalmente exigibles según su situación. No se han inventado nombre, NIF, domicilio ni correo. El aviso básico existente no sustituye esa identificación cuando resulte obligatoria. Si incorporas después analítica, formularios o nuevas herramientas, revisa el aviso y los requisitos correspondientes antes de activarlos.

## Checklist de validación

- [x] Un H1, jerarquía semántica y lenguaje español.
- [x] Venta del dominio y ausencia de servicio administrativo expresas.
- [x] Tres enlaces al destino de Sedo facilitado.
- [x] Enlaces de compra funcionales sin JavaScript.
- [x] Sin formularios ni dependencias externas en la página.
- [x] JSON-LD con sintaxis comprobada; sin precio inventado.
- [x] Canonical, robots, sitemap e imagen social local.
- [x] CSS responsive, foco visible, salto al contenido y reducción de movimiento.
- [ ] Revisar visualmente a 320, 375, 768 y 1440 píxeles, y con zoom al 200 %.
- [ ] Comprobar navegación con teclado y contraste con una herramienta de auditoría.
- [ ] Abrir el enlace de Sedo y comprobar oferta y condiciones actuales.
- [ ] Completar identificación del titular cuando corresponda.
- [ ] Configurar Pages, DNS, redirección y HTTPS; verificar respuestas finales.
- [ ] Probar la URL pública con Lighthouse/PageSpeed y revisar la vista previa social.
- [ ] Dar de alta Search Console y enviar el sitemap si se desea.

Las verificaciones de código no equivalen a una auditoría visual o a una prueba del sitio ya publicado. No hay una puntuación Lighthouse ni resultados comerciales acreditados.
