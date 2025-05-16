import { useState } from 'react';
import styles from './TextField.module.css';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement |HTMLTextAreaElement> {
    children?:React.ReactNode;

    // 속성
    id:string;
    required?:boolean;
    type?:string

    // 출력 텍스트
    title?:string;
    guide?:string | React.ReactNode;
    error?:string | React.ReactNode;

    // 레이아웃 설정
    col?:boolean;
    labels?:boolean;

    // 사이드 버튼
    button?:string,
    buttonFunc?:(e:any) => void,

    // 유효성 검사
    regex?: [RegExp, string][]
    validate?:(val?:string) => void,
}

const TextField = ({ 
    children,

    id,
    required,
    type = 'text',

    title,
    guide,
    error,
    
    col,
    labels,

    button,
    buttonFunc,
    ...props
 }: FormInputProps) => {

    const [pwView, setPwView] = useState(false)

    return (
        <article className={`${styles.container} ${col ?  styles.col : ''}`} id={id}>
            <h5 className={required ? styles.rq : ''}>{title}</h5>
            <div className={styles.inputArea}>
                <div className={`${styles.input} ${labels ? styles.labels : ''}`}>
                    {children ? (
                        children
                    ) : (
                        <>
                            {type == 'textarea' ? (
                                <textarea
                                name={id}
                                placeholder={title}
                                autoComplete='off'
                                spellCheck="false"
                                {...props}
                                ></textarea>
                            ) : (
                                <input
                                name={id}
                                placeholder={title}
                                autoComplete='off'
                                spellCheck="false"
                                {...props}
                                type={type == 'password' ? (pwView ? 'text' : 'password') : type}
                                />
                            )}

                          
                            {type == 'password' && <button className={styles.pwView} onClick={() => setPwView(!pwView)}>{pwView ? <i className={styles.icon_eye}></i> : <i className={styles.icon_eye_closed}></i>}</button>}

                            {buttonFunc && <button type='button' className="nBtn bColorG" onClick={buttonFunc}>{button}</button>}
                        </>
                    )}
                </div>
               {guide &&  <p className={styles.guide}>{guide}</p>}
               {error &&  <p className={styles.error} dangerouslySetInnerHTML={{ __html: error }}></p>}
            </div>
        </article>
    );
}

export default TextField;