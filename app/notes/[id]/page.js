import { services } from "@/app/utils/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  let posts = await services.getPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function NotesId({ params }) {
  const { id } = params;

  let posts = await services.getPosts();
  const note = posts.find((post) => post.id === parseInt(id));

  if (!note) {
    return <div className="fs-1 fw-bold text-center m-3">Note not found</div>;
  }

  return (
    <div className="d-flex flex-column mb-3 align-items-center">
      <h3 className="fs-1 fw-bold text-center m-3">
        <FontAwesomeIcon icon={faHandPointRight} className="mx-3" />
        Selected Note : {note.id}
      </h3>
      <div className="card text-bg-warning m-2" style={{ width: "28rem" }}>
        <div className="card-body">
          <p className="card-title">
            <strong>
              <FontAwesomeIcon icon={faLightbulb} className="mx-3" />
              {note.title}
            </strong>
            <hr></hr>
          </p>
          <p className="card-text">{note.body}</p>
        </div>
      </div>
    </div>
  );
}
