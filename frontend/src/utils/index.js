
export const fetchData = async () => {
 try {
    const response = await fetch('http://localhost:3001/files/data',
      {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      });
    const data = await response.json();
    return data;
 } catch (error) {
    console.error(error);
 }
}