// api/upload.js
export default async function handler(req, res) {
    // Устанавливаем CORS заголовки
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Обработка preflight запросов
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { image, deal_id } = req.body;
        
        if (!image || !deal_id) {
            return res.status(400).json({ error: 'Missing image or deal_id' });
        }
        
        // Декодируем изображение
        const img = image.replace(/^data:image\/png;base64,/, '');
        const imgBuffer = Buffer.from(img, 'base64');
        
        // Здесь ваш код для отправки в Битрикс24
        // Нужно переписать PHP логику на JavaScript
        
        // Например, используете axios или fetch для отправки в Битрикс24
        
        const webhookUrl = "https://gvprint.bitrix24.ru/rest/10/33sjwnbap09wrl0j/";
        
        // Отправляем в Битрикс24...
        // (нужно переписать всю логику из upload.php на JavaScript)
        
        return res.status(200).json({ success: true });
        
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
