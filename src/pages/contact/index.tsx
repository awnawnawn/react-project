import { Form, useLoaderData } from 'react-router-dom';

export declare interface IContact {
  first: string,
  last: string,
  avatar: string,
  twitter: string,
  notes: string,
  favorite: boolean
}

export default function Contact() {
  console.log(useLoaderData());
  const { contact }: any = useLoaderData();

  return (
    <div
      id="contact"
    >
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || undefined}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite
            contact={contact}
          />
        </h1>

        {contact.twitter && (
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
              rel="noreferrer"
              target="_blank"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form
            action="edit"
          >
            <button
              type="submit"
            >Edit
            </button>
          </Form>
          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              if (
                !confirm(
                  'Please confirm you want to delete this record.'
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
            >Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}



function Favorite({ contact }: { contact: IContact }) {
  // yes, this is a `let` for later
  const favorite = contact.favorite;
  return (
    <Form
      method="post"
    >
      <button
        aria-label={
          favorite
            ? 'Remove from favorites'
            : 'Add to favorites'
        }
        name="favorite"
        value={favorite ? 'false' : 'true'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
