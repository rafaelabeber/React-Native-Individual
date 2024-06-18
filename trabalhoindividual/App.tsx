import { StatusBar } from 'expo-status-bar';
import { Home } from './src/Pages/Home';
import { Login } from './src/Pages/Login';

//<Login/> Para o Redirecionamento para Login
//<Home/> Para o Redirecionamento para Home

export default function App() {
  return (
    <>
        <StatusBar style="auto"/>
        <Login/>
    </>
  );
}
