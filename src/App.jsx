import { createBrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import CertificateDownload from "./pages/CertificateDownload";


const AppRouter = createBrowserRouter([
  {
      path : "/",
      element : <h1>Welcoem to Fake Certificate Creation Website</h1>
  },
  {
      path : "/details",
      element : <Details/>
  },
  {
      path : "/certtifcate",
      element : <CertificateDownload/>
  },

])

export default AppRouter;