const translations = { es: { cat_epics: "Grandes Héroes", cat_doctrine: "Dibujos Animados", cat_kids: "Para Peques", play_video: "▶ Ver Historia" } };
const contentData = [
    { category: "cat_epics", items: [{ title: "Moisés", duration: "8 min", narration: "La historia de Moisés.", thumb: "https://images.unsplash.com/photo-1544427928-14292fb542d1", audio: "audio_epic" }] }
];
document.addEventListener('DOMContentLoaded', () => {
    console.log("BibliaFlix Loaded");
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.innerHTML = "<h1>Cargando Historias...</h1>";
});