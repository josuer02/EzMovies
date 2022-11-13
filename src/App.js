import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import MainHeader from "./components/NavBar/MainHeader";
import Cartelera from "./pages/Cartelera/Cartelera";
import Home from "./pages/Home/Home";
import Promociones from "./pages/Promociones/Promociones";
import Proximamente from "./pages/Cartelera/Proximamente";
import Reservas from "./pages/Reservas/Reservas";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/Auth-Context";
import Succes from "./pages/Respuestas/Success";
import Ver from "./pages/Reservas/Ver";
import Confirmar from "./pages/Reservas/Confirmar";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<AuthForm />} />
          {/* Not logged in */}
          {!authCtx.isLoggedIn && <Route path="home/*" element={<Home />} />}
          {!authCtx.isLoggedIn && (
            <Route path="cartelera/*" element={<Cartelera />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="promociones/*" element={<Promociones />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="proximamente/*" element={<Proximamente />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="success/*" element={<AuthForm />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="login/*" element={<AuthForm />} />
          )}
          {!authCtx.isLoggedIn && <Route path="ver/*" element={<AuthForm />} />}
          {!authCtx.isLoggedIn && (
            <Route path="confirmar/*" element={<AuthForm />} />
          )}

          {/* Logged in */}
          {authCtx.isLoggedIn && <Route path="home/*" element={<Home />} />}
          {authCtx.isLoggedIn && (
            <Route path="cartelera/*" element={<Cartelera />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="promociones/*" element={<Promociones />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="reservas/*" element={<Reservas />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="proximamente/*" element={<Proximamente />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="success/*" element={<Succes />} />
          )}
          {authCtx.isLoggedIn && <Route path="ver/*" element={<Ver />} />}
          {authCtx.isLoggedIn && (
            <Route path="confirmar/*" element={<Confirmar />} />
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
