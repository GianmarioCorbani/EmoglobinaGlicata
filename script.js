document.addEventListener('DOMContentLoaded', () => {
    const percentInput = document.getElementById('percent');
    const mmolMolInput = document.getElementById('mmol_mol');

    // Funzione per convertire da % a mmol/mol
    function convertPercentToMmolMol(percent) {
        // Formula di conversione IFCC (International Federation of Clinical Chemistry and Laboratory Medicine)
        // HbA1c (mmol/mol) = (10.929 * HbA1c (%) ) - 23.507
        return (10.929 * percent) - 23.507;
    }

    // Funzione per convertire da mmol/mol a %
    function convertMmolMolToPercent(mmolMol) {
        // Formula inversa
        // HbA1c (%) = (HbA1c (mmol/mol) + 23.507) / 10.929
        return (mmolMol + 23.507) / 10.929;
    }

    percentInput.addEventListener('input', (event) => {
        const percentValue = parseFloat(event.target.value);
        if (!isNaN(percentValue)) {
            const mmolMolValue = convertPercentToMmolMol(percentValue);
            mmolMolInput.value = mmolMolValue.toFixed(1); // Arrotonda a un decimale
        } else {
            mmolMolInput.value = '';
        }
    });

    mmolMolInput.addEventListener('input', (event) => {
        const mmolMolValue = parseFloat(event.target.value);
        if (!isNaN(mmolMolValue)) {
            const percentValue = convertMmolMolToPercent(mmolMolValue);
            percentInput.value = percentValue.toFixed(2); // Arrotonda a due decimali
        } else {
            percentInput.value = '';
        }
    });
});