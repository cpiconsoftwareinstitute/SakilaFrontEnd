import React from "react";
import { Link } from "../react-frames";


function AddNewFilm() {
	return (
		<>
		<form>
          <label>
		  	Title:
              <input type="text" name="title" />
          </label><br/>
		  <label>
		  Description:
              <input type="text" name="description" />
          </label><br/>
		  <label>
		  Release_year:
              <input type="text" name="release_year" />
          </label><br/>
		  <label>
		  Language_id:
              <input type="text" name="language_id" />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
			
		</>
	);
}

export default AddNewFilm;