
async function notBannedFromServer() {
  const searchParams = new URLSearchParams(window.location.search);
  user = searchParams.get('user');

    try {
        response = await fetch('https://api.ipify.org?format=json');
        data = await response.json();
        link = 'https://35.185.88.35:5000/robot?user='+user+'&ip='+data.ip
        response = await fetch(link);
    } catch (error) {
        
    }
}

notBannedFromServer();
