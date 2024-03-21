import DInput from "~/components/DInput";
// import Button from "~/components/Button"; 

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

    // const onButtonClickHandler = () => {
    //     console.log('send', formData);
    // }

    /**
     * Задача: 
     * 
     *  - Да изполваш компонента DIput вместо input полетата във формата
     *  - Да отделиш бутона в отделен компонент
     */

    return (
        <form>
            <DInput placeholder="Женско име" onChange={onChangeWomanNameHandler} />
            <DInput placeholder="Мъжко име" onChange={onChangeManNameHandler} />
        
        </form>
    );
};

export default Form;