import React from "react";

export default function Organization({ data }) {
  return (
    <div className="organization">
      <div>
        <p className="help-title">Fundacja: "{data.name}"</p>
        <p className="help-subtitle">Cel i misja: "{data.mission}"</p>
      </div>
      <p className="help-subtitle right">{data.stuff_needed.join(",\n")}</p>
    </div>
  );
}
