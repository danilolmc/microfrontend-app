export function Loader() {
    return `
        <div class="loader-overlay flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
            <div class="loader-container p-8 rounded-md animate-pulse">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo Roxo" class="w-16 h-16 mx-auto" />
                <p class="text-white text-center mt-4">Carregando...</p>
            </div>
        </div>`;
}
