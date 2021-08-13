import { Route } from "wouter";

import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import FormAdd from "./components/FormAdd";
import PageLogin from "./pages/PageLogin";
import { UserContextProvider } from "./context/UserDataContext";
import { AllMoviesContextProvider } from "./context/AllMoviesContext";

function App() {
    return (
        <>
            <UserContextProvider>
                <AllMoviesContextProvider>
                    <Header />
                    <Route path="/" component={PageHome} />
                    <Route path="/add" component={FormAdd} />
                </AllMoviesContextProvider>
                <Route path="/login" component={PageLogin} />
            </UserContextProvider>
        </>
    );
}

export default App;
