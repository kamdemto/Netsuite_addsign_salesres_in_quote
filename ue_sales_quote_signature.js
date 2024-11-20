/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/render', 'N/record', 'N/file', 'N/log'], function(render, record, file, log) {

    function beforeLoad(context) {
        // Vérifier si l'enregistrement est un devis et si l'utilisateur effectue une action d'impression ou d'email
        if (context.type === context.UserEventType.VIEW || 
            context.type === context.UserEventType.PRINT || 
            context.type === context.UserEventType.EMAIL) {

            var salesRepId = context.newRecord.getValue('salesrep'); // ID du représentant de vente

            // Initialiser un objet pour stocker les données de la signature
            var signatureData = {
                signatureUrl: ''
            };

            if (salesRepId) {
                try {
                    // Charger l'enregistrement de l'employé représentant de vente
                    var employeeRecord = record.load({
                        type: record.Type.EMPLOYEE,
                        id: salesRepId
                    });

                    // Récupérer l'ID du fichier de signature (remplacez par l'ID de votre champ personnalisé)
                    var signatureFileId = employeeRecord.getValue('custentity_signature'); // Champ personnalisé pour la signature
                    if (signatureFileId) {
                        var signatureFile = file.load({ id: signatureFileId });
                        signatureData.signatureUrl = signatureFile.url; // URL du fichier de la signature
                    } else {
                        log.debug('Signature non trouvée', 'Aucune signature trouvée pour le représentant de vente ID ' + salesRepId);
                    }
                } catch (e) {
                    log.error('Erreur lors du chargement de la signature', e.message);
                    signatureData.signatureUrl = ''; // En cas d'erreur, laisser la signature vide
                }
            }

            // Injecter les données de la signature dans le modèle PDF
            if (context.type === context.UserEventType.PRINT) {
                var renderer = render.create();
                renderer.templateContent = context.form.getTemplate(); // Charger le modèle de PDF/HTML
                renderer.addCustomDataSource({
                    format: render.DataSource.OBJECT,
                    alias: 'signatureData', // Alias utilisé dans le modèle PDF
                    data: signatureData // Injecter les données de la signature
                });

                // Générer le PDF
                var pdfFile = renderer.renderAsPdf();
                context.response.writeFile(pdfFile, true); // Afficher le PDF généré
            }
        }
    }

    return {
        beforeLoad: beforeLoad
    };
});


//Contact Me
//Iam Kto : www.linkedin.com/in/iamkto
//ktocrea.com | contact@ktocrea.com
