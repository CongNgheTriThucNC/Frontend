import LogoRegister from "../../assets/icons/LogoRegister";
import "./styles.scss";

const RegisterLayout = ({ children }) => {
    return (
        <div className="register-layout">
            <div className="register-layout__header">
                <LogoRegister />
            </div>
            <div className="register-layout__wrapper">
                <div className="register-layout__container">{children}</div>
            </div>
        </div>
    );
};

export default RegisterLayout;
