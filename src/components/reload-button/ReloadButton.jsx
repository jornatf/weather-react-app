import './reload-button.css';

const ReloadButton = props => {
    const reloadPage = () => {
        window.location.reload(false);
    }

    return (
        <div className="reload-button-container">
            <button className="reload-button" onClick={ reloadPage }>Force Refresh</button>
            <div className="text-center weather-card-date">Last update { props.localtime }</div>
        </div>
    )
}

export default ReloadButton;