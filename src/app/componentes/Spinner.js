import Image from 'next/image'; // Importe o componente Image do Next.js

export default function Spinner() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Image
                src="/loading.svg"
                alt="imagem carregando"
                width={100}
                height={100}
            />
        </div>
    );
}