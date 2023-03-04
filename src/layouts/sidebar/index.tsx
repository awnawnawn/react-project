import { Link, useLoaderData, Form } from 'react-router-dom';
import { getContact, createContact } from '../../utils';

export default function Sidebar() {

  const { contacts }: any = useLoaderData();

  return (
    <>
      <div
        className="bg-neutral-800 p-4"
      >
        <h1>React Router Contacts</h1>
        <div
          className='flex mt-2'
        >
          <form
            id="search-form"
            role="search"

          >
            <input
              aria-label="Search contacts"
              autoComplete="null"
              className='px-4 py-2 rounded-l-sm bg-neutral-900 outline-none'
              id="q"
              name="q"
              placeholder="Search"
              type="search"
            />
            <div
              aria-hidden
              hidden={true}
              id="search-spinner"
            />
            <div
              aria-live="polite"
              className="sr-only"
            >
            </div>
          </form>
          <Form
            className='flex justify-center items-center px-2 rounded-r-sm bg-neutral-600'
            method="post"
          >
            <button
              type="submit"
            >
              New
            </button>
          </Form>
        </div>
        <nav
          className='mt-2'
        >
          <ul>
            { contacts.length ? (
              contacts.map((contact: any) => {
                return (
                  <li
                    className='py-2 px-1 hover:bg-neutral-700 rounded-sm'
                    key={contact.id}
                  >
                    <Link
                      to={`/contacts/${contact.id}`}
                    >
                      { contact.id }
                    </Link>
                  </li>
                );
              })
            ) :
              <span>no list data</span>}
          </ul>
        </nav>
      </div>
    </>
  );
}
