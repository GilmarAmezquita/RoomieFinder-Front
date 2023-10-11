import Navbar from '../ui/Navbar';
import { ReactNode } from 'react';


type _TemplateProps = {
    children: ReactNode | ReactNode[];
};


export default function PageTemplate({ children }: _TemplateProps) {
    return (
        <div style={{
            
            height: '100vh',
            width: '100vw',
        }}>
        <Navbar />
        {children}
        </div>
    );
    }