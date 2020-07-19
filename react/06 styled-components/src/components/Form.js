import React, { useState } from "react";
import styled from "@emotion/styled";
import { getYearDifference, brandValue, typeValue } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0  100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #E1E1E1;
  -webkit-appearance: none;
`;

const Radio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26C6DA;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`

export const Form = ({ setOverview, setLoading }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState(false);
  const calculate = (e) => {
    e.preventDefault();
    if (!brand || !model || !type) {
      return setError(true);
    }

    let baseValue = 2000 - (2000 * getYearDifference(parseInt(model, 10)) * 0.03);
    baseValue += baseValue * brandValue(brand);
    baseValue += baseValue * typeValue(type);
    baseValue = parseFloat(baseValue).toFixed(2);

    setLoading(true);
    setTimeout(() => {
      setOverview({
        brand,
        model,
        type,
        value: baseValue,
      });
      setLoading(false);
    }, 2000);


    setError(false);
  }
  return (
    <form onSubmit={calculate}>
      { error ? <Error>All the fields are mandatory</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Select a brand</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Model</Label>
        <Select name="model" value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">Select a model</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Type</Label>
        <Radio checked={type === 'basic'} type="radio" name="type" value="basic" onChange={(e) => setType(e.target.value)}/> Basic
        <Radio checked={type === 'full'} type="radio" name="type" value="full" onChange={(e) => setType(e.target.value)} /> Full
      </Field>
      <Button type="submit">Calculate</Button>
    </form>
  );
};
