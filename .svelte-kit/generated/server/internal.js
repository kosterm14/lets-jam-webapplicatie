
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n\n\t<link rel=\"stylesheet\" href=\"https://use.typekit.net/brx3lyu.css\" />\n\t<!-- rigid square font -->\n\t<link rel=\"stylesheet\" href=\"https://use.typekit.net/kdb0mcl.css\" />\n\t<!-- yrsa font -->\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div>" + body + "</div>\n</body>\n\n</html>\n\n<style>\n\thtml {\n\t\twidth: 100vw;\n\t}\n\n\tbody,\n\thtml {\n\t\toverflow-x: hidden;\n\t}\n\n\t/* @media (max-width: 31em) {\n\t\tbody,\n\t\thtml {\n\t\t\toverflow-x: visible;\n\t\t}\n\n\t\thtml {\n\t\t\twidth: 100%;\n\t\t}\n\t} */\n\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t:root {\n\t\tfont-size: 20px;\n\n\t\t/* Visual Thinking: Primary Colors:\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik! \n    */\n\t\t--vtDarkBlue: #090940;\n\t\t--vtLightBlue: #67c5d1;\n\t\t--vtYellow: #feb51e;\n\t\t--vtRed: #f96c4f;\n\t\t--vtWhite: #ffffff;\n\n\t\t/* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik! \n    */\n\t\t--vtDarkBlue-80: #3a3a66;\n\t\t--vtDarkBlue-50: #6b6b8c;\n\t\t--vtDarkBlue-30: #9d9db3;\n\t\t--vtDarkBlue-10: #ceced9;\n\n\t\t--vtLightBlue-80: #85d1da;\n\t\t--vtLightBlue-50: #a4dce3;\n\t\t--vtLightBlue-30: #c2e8ed;\n\t\t--vtLightBlue-10: #e1f3f6;\n\n\t\t--vtYellow-80: #fec44b;\n\t\t--vtYellow-50: #fed378;\n\t\t--vtYellow-30: #ffe1a5;\n\t\t--vtYellow-10: #fff0d2;\n\n\t\t--vtRed-80: #fa8972;\n\t\t--vtRed-50: #fba795;\n\t\t--vtRed-30: #fdc4b9;\n\t\t--vtRed-10: #fee2dc;\n\n\t\t/* Visual Thinking: Grijstinten:\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik!\n     Word vaak gebruikt voor backgrounds en borders. \n    */\n\n\t\t--vtGrey-80: #c0beb9;\n\t\t--vtGrey-50: #e0dedc;\n\t\t--vtGrey-10: #f9f8f8;\n\n\t\t/* Visual Thinking: Secondary colors,\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik! \n    Word gebruikt als steunkleuren bv: kleurcoderen van categorieën\n    */\n\n\t\t--vtSec-Red: #af1301;\n\t\t--vtSec-Red-30: #fbc5b4;\n\t\t--vtSec-Green: #169861;\n\t\t--vtSec-Green-30: #63c09f;\n\t\t--vtSec-LightBlue: #4fbbc2;\n\t\t--vtSec-DarkBlue: #31439c;\n\t\t/* <--- deze kleur is de blauwe balk van de tekenmethodes detailpagina */\n\t\t--vtSec-Brown: #8b3a00;\n\t\t--vtSec-Orange: #fe6f07;\n\n\t\t/* Visual Thinking: Fonts,\n    */\n\n\t\t--vtPrimaryFont: \"rigid-square\", sans-serif;\n\t\t--vtSecondaryFont: \"yrsa\", serif;\n\t}\n\n\tblockquote {\n    color: var(--vtSec-Orange);\n    font-family: var(--vtPrimaryFont);\n    margin-top: -1rem;\n  \t}\n</style>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "gwjpjy"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_prerendering, set_private_env, set_public_env, set_safe_public_env };
