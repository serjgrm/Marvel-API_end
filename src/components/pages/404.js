import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Page404 = () => {
    return (
        <HelmetProvider>

        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
        </HelmetProvider>

    )
}

export default Page404;