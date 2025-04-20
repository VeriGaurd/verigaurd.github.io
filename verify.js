
async function notBannedFromServer() {
  const searchParams = new URLSearchParams(window.location.search);
  discord = searchParams.get('discord');
  user = searchParams.get('key');

    try {
        response = await fetch('https://api.ipify.org?format=json');
        data = await response.json();
        link = 'https://0351ef4b-a5fb-477a-9df3-dd35782c9695-00-30aukvo4epq2k.janeway.replit.dev/robot?discord='+discord"'&user='+user+'&ip='+data.ip
        response = await fetch(link);
    } catch (error) {
        
    }
}
