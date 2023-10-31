import ejs from "ejs";

import exportVerificationKey from "./zkey_export_verificationkey.js";

export default async function exportStylusVerifier(zKeyName, template, logger) {
    const verificationKey = await exportVerificationKey(zKeyName, logger);
    
    return ejs.render(template, verificationKey);
}
