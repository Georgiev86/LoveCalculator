interface IForm {
    manName: string | undefined;
    womanName: string | undefined;
}

const Form = () => {
    const formData: IForm = {
        manName: '',
        womanName:  ''
    }

    const onChangeWomanNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        formData.womanName = e.target.value;
        console.log(formData);
    }

    const onChangeManNameHandler = (name: string) => {
        formData.manName =name;
        console.log(formData);
    }

    const onButtonClickHandler = () => {
        console.log('send', formData);
    }

    /**
     * Задача: 
     * 
     *  - Да изполваш компонента DIput вместо input полетата във формата
     *  - Да отделиш бутона в отделен компонент
     */

    return (
        <form>
            <input type="text" placeholder="Женско име" onChange={onChangeWomanNameHandler} />
            <input type="text" placeholder="Мъжко име" onChange={(e) => onChangeManNameHandler(e.target.value)} />
            <button type="button" onClick={onButtonClickHandler}>Изчисли</button>
        </form>
    );
};

export default Form;