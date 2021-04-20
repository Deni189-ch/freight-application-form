import React, { ChangeEvent, useState } from "react";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";

import { bootMethod, HazardClass, liftingСapacity, typeOfCargo } from "../data";
import {
  setToggleErrorAC,
  setToggleLoadingAC,
  setAddRequestTransportationAC,
} from "../../redux/actions";
import { IRootState } from "../../redux/state-reducer";

import { Form, Input, Button, Select, DatePicker, Checkbox, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.scss";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Option } = Select;
const { TextArea } = Input;

export const Transportation: React.FC = () => {
  const FTL = useSelector((state: DefaultRootState) => {
    console.log(state);
    //@ts-ignore
    return state.state.FTL;
  });
  //@ts-ignore
  const isError = useSelector((state: IRootState) => state.state.isError);
  //@ts-ignore
  const isLoading = useSelector((state: IRootState) => state.state.isLoading);

  const dispatch = useDispatch();

  const [_from, setFrom] = useState<string>();
  const [_to, setTo] = useState<string>();
  const [_LiftingСapacity, setLiftingСapacity] = useState<string>();
  const [_BootMethod, setBootMethod] = useState<string>();
  const [_TypeOfCargo, setTypeOfCargo] = useState<string>();
  const [_checkbox, setCheckbox] = useState<boolean>();
  const [_hazardClass, setHazardClass] = useState<string>();
  const [_price, setPrice] = useState<number>(0);
  const [_datePicker, setDatePicker] = useState<string>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState<string>();

  const fromHandler = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => setFrom(value);

  const toHandler = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => setTo(value);

  const liftingСapacityHandler = (value: string) => setLiftingСapacity(value);
  const bootMethodHandler = (value: string) => setBootMethod(value);
  const typeOfCargoHandler = (value: string) => setTypeOfCargo(value);

  const checkboxHandler = ({ target: { checked } }: any) =>
    setCheckbox(checked);

  const hazardClassHandler = (value: string) => setHazardClass(value);

  const priceHandler = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    Number(value) >= 0 && setPrice(Number(value));
  };

  const datePickerHandler = (e: any) => {
    const date = e._d;
    const year = new Date(date).getFullYear();
    const day = new Date(date).getDate();
    const manth = new Date(date).toLocaleString("en", { month: "long" });
    setDatePicker(`${day} ${manth} ${year} г.`);
  };

  const textareaHandler = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(value);

  const sabmitHandler = () => {
    dispatch(setToggleLoadingAC(true));
    if (
      !_from ||
      !_to ||
      !_LiftingСapacity ||
      !_BootMethod ||
      !_TypeOfCargo ||
      !_hazardClass ||
      !_price ||
      !_datePicker
    ) {
      dispatch(setToggleLoadingAC(false));
      dispatch(setToggleErrorAC(true));
    } else {
      dispatch(setToggleLoadingAC(false));
      dispatch(setToggleErrorAC(false));
      dispatch(
        setAddRequestTransportationAC({
          //@ts-ignore
          id: Date.parse(new Date()),
          from: _from,
          to: _to,
          liftingСapacity: _LiftingСapacity,
          bootMethod: _BootMethod,
          typeOfCargo: _TypeOfCargo,
          checkbox: _checkbox,
          hazardClass: _hazardClass,
          price: _price,
          datePicker: _datePicker,
        })
      );
      setIsSuccess(true);
    }
  };

  return (
    <div className="transportation">
      <Form
        labelCol={{ span: 4, offset: 18 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 800 }}
      >
        <Form.Item>
          <span className="ant-form-text transportation__title">
            FTL: {FTL}
          </span>
        </Form.Item>

        <Form.Item
          label="Для расчета стоимости необходимо ввести параметры груза, пункты
              отправки и прибытия."
          className="transportation__label-title"
        >
          <div className="transportation__title-input">
            <span className="transportation__item">1</span>Маршрут
          </div>
          <div className="transportation__text">Откуда</div>

          <Input style={{ maxWidth: "730px" }} onChange={fromHandler} />
        </Form.Item>

        <Form.Item>
          <div className="transportation__text">Куда</div>
          <Input style={{ maxWidth: "730px" }} onChange={toHandler} />
        </Form.Item>

        <Form.Item>
          <div className="transportation__title-input">
            <span className="transportation__item">2</span>Транспорт
          </div>
          <div className="transportation__text">Грузоподьемность</div>
          <Select
            style={{ width: 175 }}
            placeholder="Не выбран"
            optionFilterProp="children"
            onChange={liftingСapacityHandler}
          >
            {liftingСapacity.map(({ id, value }) => (
              <Option value={value} key={id}>
                {value}
              </Option>
            ))}
          </Select>
          ,
          <Select
            style={{ width: 175 }}
            placeholder="Не выбран"
            optionFilterProp="children"
            onChange={bootMethodHandler}
          >
            {bootMethod.map(({ id, value }) => (
              <Option value={value} key={id}>
                {value}
              </Option>
            ))}
          </Select>
          ,
          <div className="transportation__text transportation__text_rightSelect">
            Способ погрузки
          </div>
        </Form.Item>

        <Form.Item>
          <div className="transportation__title-input">
            <span className="transportation__item">3</span>Груз
          </div>
          <div className="transportation__text">Тип груза</div>
          <div>
            <Select
              style={{ maxWidth: 356 }}
              placeholder="Не выбран"
              optionFilterProp="children"
              onChange={typeOfCargoHandler}
            >
              {typeOfCargo.map(({ id, value }) => (
                <Option value={value} key={id}>
                  {value}
                </Option>
              ))}
            </Select>
          </div>
          <br />
          <div className="transportation__text">Класс опасности</div>
          <Select
            style={{ width: 175 }}
            placeholder="Не выбран"
            optionFilterProp="children"
            onChange={hazardClassHandler}
          >
            {HazardClass.map(({ id, value }) => (
              <Option value={value} key={id}>
                {value}
              </Option>
            ))}
          </Select>
          ,
          <Input
            style={{ width: 175 }}
            type="number"
            value={_price}
            onChange={priceHandler}
          />
          <div className="transportation__text transportation__text_rightSelect3">
            Объявленная ценность, ₽
          </div>
          <br />
          <Checkbox onChange={checkboxHandler}>
            <span className="transportation__checkbox transportation__text">
              Требуеться температурный режим
            </span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <div className="transportation__title-input">
            <span className="transportation__item">4</span>Время
          </div>

          <div className="transportation__text">
            Когда прибыть на точку
            <span className="transportation__text transportation__text4">
              700км в день
            </span>
          </div>
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Дата не выбрана"
            onChange={datePickerHandler}
          />

          {isSuccess && (
            <div className="transportation__notification">
              Заявка успешно отправлена
            </div>
          )}
          {isError && (
            <div className="transportation__notification transportation__notification_error">
              Заполните все поля формы
            </div>
          )}
        </Form.Item>

        <Form.Item>
          <div className="transportation__text">Коментарий к заказу</div>
          <TextArea
            style={{ maxWidth: 730 }}
            value={textareaValue}
            onChange={textareaHandler}
            placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Button style={{ width: 160 }} onClick={sabmitHandler}>
          Отправить заявку
        </Button>
        {isLoading && (
          <Spin indicator={antIcon} style={{ marginLeft: "10px" }} />
        )}
      </Form>
    </div>
  );
};
