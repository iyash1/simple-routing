import Image from "next/image";
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { messages } from "./config";

config.autoAddCss = false;


export default function Home() {
  return (
    <div className="d-flex flex-column m-3">
      <div className="align-self-center">
        <h3 className="fs-1 fw-bold text-center">
          <FontAwesomeIcon
            icon={faLaughBeam}
            className="mx-3"
            style={{ color: "#FFCA33" }}
          />
          {messages.welcome}
        </h3>
        <div className="text-center">
          <Image
            src="https://images.unsplash.com/photo-1722116196702-6e74db37706b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid mt-3 rounded"
            width={1000}
            height={100}
            alt="Home Page Image"
          />
        </div>

        <hr></hr>

        <div className="d-flex flex-column">
          <div className="text-center">
            <p className="text-center mx-5">
              This site is built on Next.js 14 and Bootstrap 5 for purpose of
              building a example page in a short time. This will be used to test
              things like rendering on different devices, screen sizes, to test
              deployments, to play around with different configurations, styles,
              etc. Hence, this is will be subject to changes from time to time,
              until it is production grade. A few bugs could be possible but
              that is expected and will be fixed in time.
            </p>
            <hr></hr>

            <p className="fs-4 fw-bold">
              Click on any of the following categories to browse through the
              site{" "}
            </p>
            <p>
              <Link
                href="/notes"
                className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <strong>Notes</strong>
              </Link>
              {` to check some dummy notes`}
            </p>
            <p>
              <Link
                href="/form"
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <strong>Form</strong>
              </Link>
              {` to check a dummy form, and`}
            </p>
            <p>
              <Link
                href="/images"
                className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <strong>Images</strong>
              </Link>
              {` to check some cool images slideshow`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
