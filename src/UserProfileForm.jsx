import React from "react";

const profileFields = ['firstName', 'lastName', 'email', 'jobTitle', 'bio'];
function UserProfileForm() {
    return (
        <form>
            {profileFields.map(field =>
                <input key={field} type="text" name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
                                                            /*.charAt() = extracts and returns a specified character at that index
                                                            .toUpperCase() = returned character gets upper-cased
                                                            .slice()= returns the original variable except the first letter */
            )}
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default UserProfileForm