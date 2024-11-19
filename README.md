
# **NetSuite SuiteScript - Dynamic Signature on Sales Quotes**

This project provides a SuiteScript solution for adding dynamic signatures to sales quotes in NetSuite, based on the sales representative associated with the transaction. 

---

## **Features**
- Dynamically fetches the signature of the assigned sales representative.
- Integrates seamlessly with the Advanced PDF/HTML templates in NetSuite.
- Customizable and extendable for other transaction types.

---

## **Table of Contents**
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Customization](#customization)
5. [Contributing](#contributing)
6. [License](#license)

---

## **Requirements**
- NetSuite Account (Production or Sandbox).
- SuiteScript 2.x enabled in your NetSuite environment.
- Access to NetSuite File Cabinet and Script Deployment permissions.

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netsuite-dynamic-signature.git
   ```

2. Upload the SuiteScript file to NetSuite:
   - Navigate to **Documents > Files > File Cabinet**.
   - Create a folder (e.g., `SuiteScripts`) and upload the JavaScript file.

3. Configure the script in NetSuite:
   - Go to **Customization > Scripts > Scripts > New**.
   - Link the uploaded file and deploy the script on the **Estimate (Sales Quote)** record.

---

## **Usage**
1. **Add Signature to Employee Record:**
   - Navigate to **Lists > Employees > Employees**.
   - Add a custom field (type: file or image) for the signature.

2. **Edit Advanced PDF/HTML Template:**
   - Add the following code to display the signature dynamically:
     ```html
     <img src="${signatureData.signatureUrl}" alt="Sales Representative Signature" style="width:150px;" />
     ```

3. **Test the Script:**
   - Create or view a sales quote to verify the signature rendering.

---

## **Customization**
### Modify for Other Transactions
- Update the script's deployment settings to support other record types (e.g., Invoice, Sales Order).

### Adjust Signature Placement
- Edit the Advanced PDF/HTML template to position the signature where required.

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## **License**
This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project.

---

## **Contact**
For questions or suggestions, please contact:  
**Your Name** IAMKTO 
**Email:** contact@ktocrea.com 
**GitHub:** [kamdemto]
(https://github.com/imakto)

---

### **To-Do List**
- Add logging for script execution.
- Extend compatibility for additional record types.
- Optimize performance for large employee datasets.
