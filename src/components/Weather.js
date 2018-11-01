import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.weather.city &&
      props.weather.country && (
        <p className="weather__key">
          {" "}
          Location:
          <span className="weather__value">
            {" "}
            {props.weather.city}, {props.weather.country}
          </span>
        </p>
      )}
    {props.weather.temperature && (
      <p className="weather__key">
        {" "}
        Temperature:
        <span className="weather__value"> {props.weather.temperature} </span>
      </p>
    )}
    {props.weather.humidity && (
      <p className="weather__key">
        {" "}
        Humidity:
        <span className="weather__value"> {props.weather.humidity} </span>
      </p>
    )}
    {props.weather.description && (
      <p className="weather__key">
        {" "}
        Conditions:
        <span className="weather__value"> {props.weather.description} </span>
      </p>
    )}
    {props.weather.error && (
      <p className="weather__error">{props.weather.error}</p>
    )}
  </div>
);

export default Weather;
