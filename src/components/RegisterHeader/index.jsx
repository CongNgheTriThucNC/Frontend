import "./styles.scss";

const RegisterHeader = ({ title }) => {
    return (
        <div className="register-header">
            <div className="register-header__header">{title}</div>
            <span className="register-header__intro">
                Vui lòng điền các thông tin bên dưới
            </span>
        </div>
    );
};

export default RegisterHeader;
