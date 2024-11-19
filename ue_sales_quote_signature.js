/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/render', 'N/search'], function(record, render, search) {

    function beforeLoad(context) {
        if (context.type === context.UserEventType.PRINT || context.type === context.UserEventType.EMAIL) {
            var salesRepId = context.newRecord.getValue('salesrep'); // ID du représentant des ventes
            
            if (salesRepId) {
                // Rechercher la signature du représentant des ventes
                var employeeRecord = record.load({
                    type: 'employee',
                    id: salesRepId
                });
                var signatureUrl = employeeRecord.getValue('custentity_signature'); // Remplacez par votre champ personnalisé
                
                // Injecter l'URL de la signature dans le modèle PDF
                var renderer = render.create();
                renderer.templateContent = context.form.getValue({ fieldId: 'customform' });
                
                // Ajouter la variable de signature au contexte
                renderer.addCustomDataSource({
                    format: render.DataSource.OBJECT,
                    alias: 'signatureData',
                    data: { signatureUrl: signatureUrl }
                });
                
                // Appliquer le rendu
                context.form.addPageInitMessage({
                    message: 'Signature ajoutée dynamiquement au devis.',
                    type: 'CONFIRMATION'
                });
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
