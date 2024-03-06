

//This function takes is called form this file it 
export function exportToExcel(data) {
    if (data.length === 0) {
        console.error("No data to export.");
        return;
    }
  

    const headers = Object.keys(data[0]).join(',') + '\n';
    const csv = headers + data.map(row => Object.values(row).join(',')).join('\n');

    const csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const csvURL = URL.createObjectURL(csvBlob);

    const link = document.createElement('a');
    link.href = csvURL;
    link.setAttribute('download', 'table_data.csv');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

