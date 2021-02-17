import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import styles from  "../styles/CreateStyles.module.css";

export const CREATE_LINK_MUTATION = gql`
  mutation post($email: String!, $message: String!) {
    post(email: $email, message: $message) {
      email
      message
    }
  }
`;

type Props = {
  closeForm: () => {},
};

const CreateLink = (props: Props) => {
  const { closeForm } = props;
  const [formState, setFormState] = useState({
    email: "",
    message: "",
  });

  const [createLink, { loading, data }] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      email: formState.email,
      message: formState.message,
    },
  });
  if (loading) return <p>loading</p>;
  if (data) return <p>Created</p>;

  function Close() {
    closeForm();
  }

  return (
    <div >
      <form
        onSubmit={(e) => {
          createLink();
        }}
        className={styles.formcontainer}
      >
        <div>
          <div>
            <h2 className={styles.contact}>Contact</h2>
            <button className={styles.cross} type="button" onClick={Close}>
              x
            </button>
          </div>
          <h3>Lorem Ipsum is simply dummy text of the printing</h3>
          <div className={styles.stat}>
            <label>Name </label>
            <span>
              {" "}
              <input type="text" placeholder="     Enter Name" />
            </span>
          </div>
          <br></br>
          <div className={styles.stat}>
            <label>Email </label>
            <input
              className={styles.mb2}
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              type="text"
              placeholder="      Enter Email"
            />
          </div>
          <br></br>
          <div className={styles.stat}>
            <label>Message</label>
            <input
              value={formState.message}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value,
                })
              }
              type="text"
              placeholder="Enter message"
            />
          </div>
          <br></br>
        </div>
        <div>
          <p className={styles.small}>Need more info? hello@newzera.com</p>
        </div>
        <div className={styles.fb}>
          <button onClick={Close} className={styles.btn}  type="submit|button">
            Submit
          </button>
        <div>
            <img className={styles.iconSize} src="FB-icon-black.png" alt="n"></img>
          
            <img className={styles.iconSize}  src="linkedin-icon-black.png" alt="n"></img>
          
          
            <img className={styles.iconSize}  src="Twitter-icon-black.png" alt="n"></img>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateLink;
