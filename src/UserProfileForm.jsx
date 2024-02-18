import React from "react";

const profileFields = ['firstName', 'lastName', 'email', 'jobTitle', 'bio'];
function UserProfileForm() {
    return (
        <form>
            {profileFields.map(field =>
                <input key={field} type="text" name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
            )}
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default UserProfileForm