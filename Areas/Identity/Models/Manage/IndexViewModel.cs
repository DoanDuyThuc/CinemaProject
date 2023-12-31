// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace App.Areas.Identity.Models.ManageViewModels
{
    public class IndexViewModel
    {
        public EditExtraProfileModel profile { get; set; }

        public ChangePasswordViewModel changePassword {set;get;}

        public bool HasPassword { get; set; }

        public IList<UserLoginInfo> Logins { get; set; }

        public string PhoneNumber { get; set; }

        public bool TwoFactor { get; set; }

        public bool BrowserRemembered { get; set; }

        public string AuthenticatorKey { get; set; }
    }
}
