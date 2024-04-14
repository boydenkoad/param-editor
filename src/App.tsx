import React, { useState } from "react";

interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

export const ParamEditor: React.FC<Props> = (props) => {

  const [params] = useState<Param[]>(props.params);
  const [model, setModel] = useState<Model>(props.model);

  function handleParamValueChange(paramId: number, value: string) {
    setModel((prev) => {
      return {
        paramValues: prev.paramValues.map((pv) =>
          pv.paramId === paramId ? { ...pv, value } : pv
        ),
      };
    });
  }

  function getModel():Model {
    return { ...model };
  }

  return (
    <div>
        {model.paramValues.map((pv) => (
          <div key={pv.paramId}>

            <label
              style={{
                width: 100,
                textAlign: "center",
                display: "inline-block",
              }}
              htmlFor={`${pv.paramId}`}
            >
              {params.find((el) => el.id === pv.paramId)?.name}
            </label>

            <input
              type={params.find((el) => el.id === pv.paramId)?.type}
              id={`${pv.paramId}`}
              value={pv.value}
              onChange={(ev) => {
                handleParamValueChange(pv.paramId, ev.target.value);
              }}
            />

          </div>
        ))}
    </div>
  );
};
