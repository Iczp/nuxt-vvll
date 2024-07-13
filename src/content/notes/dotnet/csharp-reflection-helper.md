---
title: C# 反射工具类
icon:
tags: netcore,nuget,net,csharp
description: C# 反射工具类
date: 2024-07-13
---

## C# 反射工具类


nuget 包：

:neget{repo="https://www.nuget.org/packages?q=IczpNet.AbpCommons&includeComputedFrameworks=true&prerel=true&sortby=relevance" name=IczpNet.AbpCommons}

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace IczpNet.AbpCommons.Utils;

public static class ReflectHelper
{
    public static Dictionary<string, object> GetConstantsTreeDictionary(Type constantsType)
    {
        var result = new Dictionary<string, object>();
        PopulateTreeDictionary(constantsType, result);
        return result;
    }

    public static Dictionary<string, object> GetConstantsTreeDictionary<T>()
    {
        return GetConstantsTreeDictionary(typeof(T));
    }

    private static void PopulateTreeDictionary(Type type, Dictionary<string, object> result)
    {
        foreach (var nestedType in type.GetNestedTypes(BindingFlags.Public | BindingFlags.Static))
        {
            var nestedDictionary = new Dictionary<string, object>();

            foreach (var field in nestedType.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy))
            {
                if (field.IsLiteral && !field.IsInitOnly && field.FieldType == typeof(string))
                {
                    nestedDictionary.Add(field.Name, (string)field.GetValue(null));
                }
            }

            // 递归调用以处理嵌套类型
            PopulateTreeDictionary(nestedType, nestedDictionary);

            result.Add(nestedType.Name, nestedDictionary);
        }
    }

    public static Dictionary<string, string> GetConstantsFlatDictionary(Type constantsType)
    {
        var result = new Dictionary<string, string>();
        PopulateFlatDictionary(constantsType, result, [constantsType.Name]);
        return result;
    }

    public static Dictionary<string, string> GetConstantsFlatDictionary<T>()
    {
        return GetConstantsFlatDictionary(typeof(T));
    }

    private static void PopulateFlatDictionary(Type type, Dictionary<string, string> result, List<string> parentPath)
    {
        foreach (var nestedType in type.GetNestedTypes(BindingFlags.Public | BindingFlags.Static))
        {
            var currentPaths = new List<string>(parentPath) { nestedType.Name };

            foreach (var field in nestedType.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy))
            {
                if (field.IsLiteral && !field.IsInitOnly && field.FieldType == typeof(string))
                {
                    var fullPath = currentPaths.Concat([field.Name]).JoinAsString(".");
                    result[fullPath] = (string)field.GetValue(null);
                }
            }

            // 递归调用以处理嵌套类型
            PopulateFlatDictionary(nestedType, result, currentPaths);
        }
    }
}

```

### 使用

`ConstsAppServiceAppService.cs`

```C#
using IczpNet.AbpCommons.Utils;
using IczpNet.OpenIddict.Localization;
using IczpNet.OpenIddict.Permissions;
using Microsoft.AspNetCore.Mvc;
using OpenIddict.Abstractions;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Reflection;


namespace IczpNet.OpenIddict.constants;
[ApiExplorerSettings(GroupName = OpenIddictRemoteServiceConsts.ModuleName)]
public class ConstsAppServiceAppService : ApplicationService
{
    protected ConstsAppServiceAppService()
    {
        LocalizationResource = typeof(OpenIddictResource);
        ObjectMapperContext = typeof(OpenIddictApplicationModule);
    }

    public virtual Task<Dictionary<string, string>> GetCultureAsync(string keyTemp = "Permission:{{key}}", string valueTemp = "{{key}}")
    {
        var dict = new Dictionary<string, string>();

        var rootPermissionType = typeof(OpenIddictPermissions);

        foreach (var nestedType in rootPermissionType.GetNestedTypes())
        {
            var names = ReflectionHelper.GetPublicConstantsRecursively(nestedType);

            foreach (var name in names)
            {
                var key = keyTemp.Replace("{{key}}", name);

                var value = valueTemp.Replace("{{key}}", name);

                dict.TryAdd(key, value);
            }
        }
        return Task.FromResult(dict);
    }


    public virtual async Task<Dictionary<string, object>> GetOpenIddictConstantsTreeAsync()
    {
        return await Task.FromResult(ReflectHelper.GetConstantsTreeDictionary(typeof(OpenIddictConstants)));
    }

    public virtual async Task<Dictionary<string, string>> GetOpenIddictConstantsAsync()
    {
        return await Task.FromResult(ReflectHelper.GetConstantsFlatDictionary(typeof(OpenIddictConstants)));
    }


}

```

`OpenIddictConstants.cs`

```c#
/*
 * Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 * See https://github.com/openiddict/openiddict-core for more information concerning
 * the license and the contributors participating to this project.
 */

namespace OpenIddict.Abstractions;

public static class OpenIddictConstants
{
    public static class Algorithms
    {
        public const string EcdsaSha256 = "ES256";
        public const string EcdsaSha384 = "ES384";
        public const string EcdsaSha512 = "ES512";
        public const string HmacSha256 = "HS256";
        public const string HmacSha384 = "HS384";
        public const string HmacSha512 = "HS512";
        public const string RsaSha256 = "RS256";
        public const string RsaSha384 = "RS384";
        public const string RsaSha512 = "RS512";
        public const string RsaSsaPssSha256 = "PS256";
        public const string RsaSsaPssSha384 = "PS384";
        public const string RsaSsaPssSha512 = "PS512";
    }

    public static class AuthenticationMethodReferences
    {
        public const string Face = "face";
        public const string Fingerprint = "fpt";
        public const string Geolocation = "geo";
        public const string HardwareKey = "hwk";
        public const string Iris = "iris";
        public const string KnowledgeBased = "kba";
        public const string MultiChannel = "mca";
        public const string MultiFactor = "mfa";
        public const string OneTimePassword = "otp";
        public const string Password = "pwd";
        public const string PersonalIdentificationNumber = "pin";
        public const string Retina = "retina";
        public const string RiskBased = "rba";
        public const string ShortMessageService = "sms";
        public const string SmartCard = "sc";
        public const string SoftwareKey = "swk";
        public const string Telephone = "tel";
        public const string UserPresence = "user";
        public const string Voiceprint = "vbm";
        public const string WindowsIntegratedAuthentication = "wia";
    }

    public static class AuthorizationTypes
    {
        public const string AdHoc = "ad-hoc";
        public const string Permanent = "permanent";
    }

    public static class Claims
    {
        public const string AccessTokenHash = "at_hash";
        public const string Active = "active";
        public const string Address = "address";
        public const string Audience = "aud";
        public const string AuthenticationContextReference = "acr";
        public const string AuthenticationMethodReference = "amr";
        public const string AuthenticationTime = "auth_time";
        public const string AuthorizationServer = "as";
        public const string AuthorizedParty = "azp";
        public const string Birthdate = "birthdate";
        public const string ClientId = "client_id";
        public const string CodeHash = "c_hash";
        public const string Country = "country";
        public const string Email = "email";
        public const string EmailVerified = "email_verified";
        public const string ExpiresAt = "exp";
        public const string FamilyName = "family_name";
        public const string Formatted = "formatted";
        public const string Gender = "gender";
        public const string GivenName = "given_name";
        public const string IssuedAt = "iat";
        public const string Issuer = "iss";
        public const string Locale = "locale";
        public const string Locality = "locality";
        public const string JwtId = "jti";
        public const string KeyId = "kid";
        public const string MiddleName = "middle_name";
        public const string Name = "name";
        public const string Nickname = "nickname";
        public const string Nonce = "nonce";
        public const string NotBefore = "nbf";
        public const string PhoneNumber = "phone_number";
        public const string PhoneNumberVerified = "phone_number_verified";
        public const string Picture = "picture";
        public const string PostalCode = "postal_code";
        public const string PreferredUsername = "preferred_username";
        public const string Profile = "profile";
        public const string Region = "region";
        public const string RequestForgeryProtection = "rfp";
        public const string Role = "role";
        public const string Scope = "scope";
        public const string StreetAddress = "street_address";
        public const string Subject = "sub";
        public const string TargetLinkUri = "target_link_uri";
        public const string TokenType = "token_type";
        public const string TokenUsage = "token_usage";
        public const string UpdatedAt = "updated_at";
        public const string Username = "username";
        public const string Website = "website";
        public const string Zoneinfo = "zoneinfo";

        public static class Prefixes
        {
            public const string Private = "oi_";
        }

        public static class Private
        {
            public const string AccessTokenLifetime = "oi_act_lft";
            public const string Audience = "oi_aud";
            public const string AuthorizationCodeLifetime = "oi_auc_lft";
            public const string AuthorizationId = "oi_au_id";
            public const string ClaimDestinationsMap = "oi_cl_dstn";
            public const string CodeChallenge = "oi_cd_chlg";
            public const string CodeChallengeMethod = "oi_cd_chlg_meth";
            public const string CodeVerifier = "oi_cd_vrf";
            public const string CreationDate = "oi_crt_dt";
            public const string DeviceCodeId = "oi_dvc_id";
            public const string DeviceCodeLifetime = "oi_dvc_lft";
            public const string EndpointType = "oi_ept_typ";
            public const string ExpirationDate = "oi_exp_dt";
            public const string GrantType = "oi_grt_typ";
            public const string HostProperties = "oi_hst_props";
            public const string IdentityTokenLifetime = "oi_idt_lft";
            public const string InstanceId = "oi_instc_id";
            public const string Issuer = "oi_iss";
            public const string Nonce = "oi_nce";
            public const string PostLogoutRedirectUri = "oi_pstlgt_reduri";
            public const string ProviderName = "oi_prvd_name";
            public const string Presenter = "oi_prst";
            public const string RedirectUri = "oi_reduri";
            public const string RefreshTokenLifetime = "oi_reft_lft";
            public const string Resource = "oi_rsrc";
            public const string ResponseType = "oi_rsp_typ";
            public const string SigningAlgorithm = "oi_sign_alg";
            public const string Scope = "oi_scp";
            public const string StateTokenLifetime = "oi_stet_lft";
            public const string TokenId = "oi_tkn_id";
            public const string TokenType = "oi_tkn_typ";
            public const string UserCodeLifetime = "oi_usrc_lft";
        }
    }

    public static class ClientAssertionTypes
    {
        public const string JwtBearer = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
        public const string Saml2Bearer = "urn:ietf:params:oauth:client-assertion-type:saml2-bearer";
    }

    public static class ClientAuthenticationMethods
    {
        public const string ClientSecretBasic = "client_secret_basic";
        public const string ClientSecretJwt = "client_secret_jwt";
        public const string ClientSecretPost = "client_secret_post";
        public const string PrivateKeyJwt = "private_key_jwt";
    }

    public static class ClientTypes
    {
        public const string Confidential = "confidential";
        public const string Public = "public";
    }

    public static class CodeChallengeMethods
    {
        public const string Plain = "plain";
        public const string Sha256 = "S256";
    }

    public static class ConsentTypes
    {
        public const string Explicit = "explicit";
        public const string External = "external";
        public const string Implicit = "implicit";
        public const string Systematic = "systematic";
    }

    public static class Destinations
    {
        public const string AccessToken = "access_token";
        public const string IdentityToken = "id_token";
    }

    public static class Errors
    {
        public const string AccessDenied = "access_denied";
        public const string AccountSelectionRequired = "account_selection_required";
        public const string AuthorizationPending = "authorization_pending";
        public const string ConsentRequired = "consent_required";
        public const string ExpiredToken = "expired_token";
        public const string InsufficientAccess = "insufficient_access";
        public const string InsufficientScope = "insufficient_scope";
        public const string InteractionRequired = "interaction_required";
        public const string InvalidClient = "invalid_client";
        public const string InvalidGrant = "invalid_grant";
        public const string InvalidRequest = "invalid_request";
        public const string InvalidRequestObject = "invalid_request_object";
        public const string InvalidRequestUri = "invalid_request_uri";
        public const string InvalidScope = "invalid_scope";
        public const string InvalidToken = "invalid_token";
        public const string LoginRequired = "login_required";
        public const string MissingToken = "missing_token";
        public const string RegistrationNotSupported = "registration_not_supported";
        public const string RequestNotSupported = "request_not_supported";
        public const string RequestUriNotSupported = "request_uri_not_supported";
        public const string ServerError = "server_error";
        public const string SlowDown = "slow_down";
        public const string TemporarilyUnavailable = "temporarily_unavailable";
        public const string UnauthorizedClient = "unauthorized_client";
        public const string UnsupportedGrantType = "unsupported_grant_type";
        public const string UnsupportedResponseType = "unsupported_response_type";
        public const string UnsupportedTokenType = "unsupported_token_type";
    }

    public static class GrantTypes
    {
        public const string AuthorizationCode = "authorization_code";
        public const string ClientCredentials = "client_credentials";
        public const string DeviceCode = "urn:ietf:params:oauth:grant-type:device_code";
        public const string Implicit = "implicit";
        public const string Password = "password";
        public const string RefreshToken = "refresh_token";
    }

    public static class JsonWebTokenTypes
    {
        public const string AccessToken = "at+jwt";
        public const string Jwt = "JWT";

        public static class Prefixes
        {
            public const string Application = "application/";
        }

        public static class Private
        {
            public const string AuthorizationCode = "oi_auc+jwt";
            public const string DeviceCode = "oi_dvc+jwt";
            public const string RefreshToken = "oi_reft+jwt";
            public const string StateToken = "oi_stet+jwt";
            public const string UserCode = "oi_usrc+jwt";
        }
    }

    public static class Metadata
    {
        public const string AcrValuesSupported = "acr_values_supported";
        public const string AuthorizationEndpoint = "authorization_endpoint";
        public const string AuthorizationResponseIssParameterSupported = "authorization_response_iss_parameter_supported";
        public const string ClaimsLocalesSupported = "claims_locales_supported";
        public const string ClaimsParameterSupported = "claims_parameter_supported";
        public const string ClaimsSupported = "claims_supported";
        public const string ClaimTypesSupported = "claim_types_supported";
        public const string CodeChallengeMethodsSupported = "code_challenge_methods_supported";
        public const string DeviceAuthorizationEndpoint = "device_authorization_endpoint";
        public const string DeviceAuthorizationEndpointAuthMethodsSupported = "device_authorization_endpoint_auth_methods_supported";
        public const string DisplayValuesSupported = "display_values_supported";
        public const string EndSessionEndpoint = "end_session_endpoint";
        public const string GrantTypesSupported = "grant_types_supported";
        public const string IdTokenEncryptionAlgValuesSupported = "id_token_encryption_alg_values_supported";
        public const string IdTokenEncryptionEncValuesSupported = "id_token_encryption_enc_values_supported";
        public const string IdTokenSigningAlgValuesSupported = "id_token_signing_alg_values_supported";
        public const string IntrospectionEndpoint = "introspection_endpoint";
        public const string IntrospectionEndpointAuthMethodsSupported = "introspection_endpoint_auth_methods_supported";
        public const string IntrospectionEndpointAuthSigningAlgValuesSupported = "introspection_endpoint_auth_signing_alg_values_supported";
        public const string Issuer = "issuer";
        public const string JwksUri = "jwks_uri";
        public const string OpPolicyUri = "op_policy_uri";
        public const string OpTosUri = "op_tos_uri";
        public const string RequestObjectEncryptionAlgValuesSupported = "request_object_encryption_alg_values_supported";
        public const string RequestObjectEncryptionEncValuesSupported = "request_object_encryption_enc_values_supported";
        public const string RequestObjectSigningAlgValuesSupported = "request_object_signing_alg_values_supported";
        public const string RequestParameterSupported = "request_parameter_supported";
        public const string RequestUriParameterSupported = "request_uri_parameter_supported";
        public const string RequireRequestUriRegistration = "require_request_uri_registration";
        public const string ResponseModesSupported = "response_modes_supported";
        public const string ResponseTypesSupported = "response_types_supported";
        public const string RevocationEndpoint = "revocation_endpoint";
        public const string RevocationEndpointAuthMethodsSupported = "revocation_endpoint_auth_methods_supported";
        public const string RevocationEndpointAuthSigningAlgValuesSupported = "revocation_endpoint_auth_signing_alg_values_supported";
        public const string ScopesSupported = "scopes_supported";
        public const string ServiceDocumentation = "service_documentation";
        public const string SubjectTypesSupported = "subject_types_supported";
        public const string TokenEndpoint = "token_endpoint";
        public const string TokenEndpointAuthMethodsSupported = "token_endpoint_auth_methods_supported";
        public const string TokenEndpointAuthSigningAlgValuesSupported = "token_endpoint_auth_signing_alg_values_supported";
        public const string UiLocalesSupported = "ui_locales_supported";
        public const string UserinfoEncryptionAlgValuesSupported = "userinfo_encryption_alg_values_supported";
        public const string UserinfoEncryptionEncValuesSupported = "userinfo_encryption_enc_values_supported";
        public const string UserinfoEndpoint = "userinfo_endpoint";
        public const string UserinfoSigningAlgValuesSupported = "userinfo_signing_alg_values_supported";
    }

    public static class Parameters
    {
        public const string AccessToken = "access_token";
        public const string Active = "active";
        public const string AcrValues = "acr_values";
        public const string Assertion = "assertion";
        public const string Audience = "audience";
        public const string Claims = "claims";
        public const string ClaimsLocales = "claims_locales";
        public const string ClientAssertion = "client_assertion";
        public const string ClientAssertionType = "client_assertion_type";
        public const string ClientId = "client_id";
        public const string ClientSecret = "client_secret";
        public const string Code = "code";
        public const string CodeChallenge = "code_challenge";
        public const string CodeChallengeMethod = "code_challenge_method";
        public const string CodeVerifier = "code_verifier";
        public const string DeviceCode = "device_code";
        public const string Display = "display";
        public const string Error = "error";
        public const string ErrorDescription = "error_description";
        public const string ErrorUri = "error_uri";
        public const string ExpiresIn = "expires_in";
        public const string GrantType = "grant_type";
        public const string IdentityProvider = "identity_provider";
        public const string IdToken = "id_token";
        public const string IdTokenHint = "id_token_hint";
        public const string Interval = "interval";
        public const string Iss = "iss";
        public const string LoginHint = "login_hint";
        public const string Keys = "keys";
        public const string MaxAge = "max_age";
        public const string Nonce = "nonce";
        public const string Password = "password";
        public const string PostLogoutRedirectUri = "post_logout_redirect_uri";
        public const string Prompt = "prompt";
        public const string Realm = "realm";
        public const string RedirectUri = "redirect_uri";
        public const string RefreshToken = "refresh_token";
        public const string Registration = "registration";
        public const string Request = "request";
        public const string RequestId = "request_id";
        public const string RequestUri = "request_uri";
        public const string Resource = "resource";
        public const string ResponseMode = "response_mode";
        public const string ResponseType = "response_type";
        public const string Scope = "scope";
        public const string State = "state";
        public const string Token = "token";
        public const string TokenType = "token_type";
        public const string TokenTypeHint = "token_type_hint";
        public const string UiLocales = "ui_locales";
        public const string UserCode = "user_code";
        public const string Username = "username";
        public const string VerificationUri = "verification_uri";
        public const string VerificationUriComplete = "verification_uri_complete";
    }

    public static class Permissions
    {
        public static class Endpoints
        {
            public const string Authorization = "ept:authorization";
            public const string Device = "ept:device";
            public const string Introspection = "ept:introspection";
            public const string Logout = "ept:logout";
            public const string Revocation = "ept:revocation";
            public const string Token = "ept:token";
        }

        public static class GrantTypes
        {
            public const string AuthorizationCode = "gt:authorization_code";
            public const string ClientCredentials = "gt:client_credentials";
            public const string DeviceCode = "gt:urn:ietf:params:oauth:grant-type:device_code";
            public const string Implicit = "gt:implicit";
            public const string Password = "gt:password";
            public const string RefreshToken = "gt:refresh_token";
        }

        public static class Prefixes
        {
            public const string Endpoint = "ept:";
            public const string GrantType = "gt:";
            public const string ResponseType = "rst:";
            public const string Scope = "scp:";
        }

        public static class ResponseTypes
        {
            public const string Code = "rst:code";
            public const string CodeIdToken = "rst:code id_token";
            public const string CodeIdTokenToken = "rst:code id_token token";
            public const string CodeToken = "rst:code token";
            public const string IdToken = "rst:id_token";
            public const string IdTokenToken = "rst:id_token token";
            public const string None = "rst:none";
            public const string Token = "rst:token";
        }

        public static class Scopes
        {
            public const string Address = "scp:address";
            public const string Email = "scp:email";
            public const string Phone = "scp:phone";
            public const string Profile = "scp:profile";
            public const string Roles = "scp:roles";
        }
    }

    public static class Prompts
    {
        public const string Consent = "consent";
        public const string Login = "login";
        public const string None = "none";
        public const string SelectAccount = "select_account";
    }

    public static class Properties
    {
        public const string Destinations = ".destinations";
    }

    public static class Requirements
    {
        public static class Features
        {
            public const string ProofKeyForCodeExchange = "ft:pkce";
        }

        public static class Prefixes
        {
            public const string Feature = "ft:";
        }
    }

    public static class ResponseModes
    {
        public const string FormPost = "form_post";
        public const string Fragment = "fragment";
        public const string Query = "query";
    }

    public static class ResponseTypes
    {
        public const string Code = "code";
        public const string IdToken = "id_token";
        public const string None = "none";
        public const string Token = "token";
    }

    public static class Separators
    {
        public static readonly char[] Ampersand = { '&' };
        public static readonly char[] Comma = { ',' };
        public static readonly char[] Dash = { '-' };
        public static readonly char[] Dot = { '.' };
        public static readonly char[] DoubleQuote = { '"' };
        public static readonly char[] EqualsSign = { '=' };
        public static readonly char[] Hash = { '#' };
        public static readonly char[] QuestionMark = { '?' };
        public static readonly char[] Semicolon = { ';' };
        public static readonly char[] Space = { ' ' };
    }

    public static class Schemes
    {
        public const string Basic = "Basic";
        public const string Bearer = "Bearer";
    }

    public static class Scopes
    {
        public const string Address = "address";
        public const string Email = "email";
        public const string OfflineAccess = "offline_access";
        public const string OpenId = "openid";
        public const string Phone = "phone";
        public const string Profile = "profile";
        public const string Roles = "roles";
    }

    public static class Statuses
    {
        public const string Inactive = "inactive";
        public const string Redeemed = "redeemed";
        public const string Rejected = "rejected";
        public const string Revoked = "revoked";
        public const string Valid = "valid";
    }

    public static class SubjectTypes
    {
        public const string Pairwise = "pairwise";
        public const string Public = "public";
    }

    public static class TokenFormats
    {
        public const string Jwt = "urn:ietf:params:oauth:token-type:jwt";
        public const string Saml1 = "urn:ietf:params:oauth:token-type:saml1";
        public const string Saml2 = "urn:ietf:params:oauth:token-type:saml2";

        public static class Private
        {
            public const string DataProtection = "urn:openiddict:params:oauth:token-type:dp";
        }
    }

    public static class TokenTypeHints
    {
        public const string AccessToken = "access_token";
        public const string AuthorizationCode = "authorization_code";
        public const string ClientAssertionToken = "client_assertion_token";
        public const string DeviceCode = "device_code";
        public const string IdToken = "id_token";
        public const string RefreshToken = "refresh_token";
        public const string StateToken = "state_token";
        public const string UserinfoToken = "userinfo_token";
        public const string UserCode = "user_code";
    }

    public static class TokenTypes
    {
        public const string Bearer = "Bearer";
    }
}

```

#### 输出

##### open-iddict-constants-tree

https://localhost:44344/api/openiddict/consts-app-service/open-iddict-constants-tree

```json
{
  "Algorithms": {
    "EcdsaSha256": "ES256",
    "EcdsaSha384": "ES384",
    "EcdsaSha512": "ES512",
    "HmacSha256": "HS256",
    "HmacSha384": "HS384",
    "HmacSha512": "HS512",
    "RsaSha256": "RS256",
    "RsaSha384": "RS384",
    "RsaSha512": "RS512",
    "RsaSsaPssSha256": "PS256",
    "RsaSsaPssSha384": "PS384",
    "RsaSsaPssSha512": "PS512"
  },
  "AuthenticationMethodReferences": {
    "Face": "face",
    "Fingerprint": "fpt",
    "Geolocation": "geo",
    "HardwareKey": "hwk",
    "Iris": "iris",
    "KnowledgeBased": "kba",
    "MultiChannel": "mca",
    "MultiFactor": "mfa",
    "OneTimePassword": "otp",
    "Password": "pwd",
    "PersonalIdentificationNumber": "pin",
    "Retina": "retina",
    "RiskBased": "rba",
    "ShortMessageService": "sms",
    "SmartCard": "sc",
    "SoftwareKey": "swk",
    "Telephone": "tel",
    "UserPresence": "user",
    "Voiceprint": "vbm",
    "WindowsIntegratedAuthentication": "wia"
  },
  "AuthorizationTypes": {
    "AdHoc": "ad-hoc",
    "Permanent": "permanent"
  },
  "Claims": {
    "AccessTokenHash": "at_hash",
    "Active": "active",
    "Address": "address",
    "Audience": "aud",
    "AuthenticationContextReference": "acr",
    "AuthenticationMethodReference": "amr",
    "AuthenticationTime": "auth_time",
    "AuthorizationServer": "as",
    "AuthorizedParty": "azp",
    "Birthdate": "birthdate",
    "ClientId": "client_id",
    "CodeHash": "c_hash",
    "Country": "country",
    "Email": "email",
    "EmailVerified": "email_verified",
    "ExpiresAt": "exp",
    "FamilyName": "family_name",
    "Formatted": "formatted",
    "Gender": "gender",
    "GivenName": "given_name",
    "IssuedAt": "iat",
    "Issuer": "iss",
    "Locale": "locale",
    "Locality": "locality",
    "JwtId": "jti",
    "KeyId": "kid",
    "MiddleName": "middle_name",
    "Name": "name",
    "Nickname": "nickname",
    "Nonce": "nonce",
    "NotBefore": "nbf",
    "PhoneNumber": "phone_number",
    "PhoneNumberVerified": "phone_number_verified",
    "Picture": "picture",
    "PostalCode": "postal_code",
    "PreferredUsername": "preferred_username",
    "Profile": "profile",
    "Region": "region",
    "RequestForgeryProtection": "rfp",
    "Role": "role",
    "Scope": "scope",
    "StreetAddress": "street_address",
    "Subject": "sub",
    "TargetLinkUri": "target_link_uri",
    "TokenType": "token_type",
    "TokenUsage": "token_usage",
    "UpdatedAt": "updated_at",
    "Username": "username",
    "Website": "website",
    "Zoneinfo": "zoneinfo",
    "Prefixes": {
      "Private": "oi_"
    },
    "Private": {
      "AccessTokenLifetime": "oi_act_lft",
      "Audience": "oi_aud",
      "AuthorizationCodeLifetime": "oi_auc_lft",
      "AuthorizationId": "oi_au_id",
      "ClaimDestinationsMap": "oi_cl_dstn",
      "CodeChallenge": "oi_cd_chlg",
      "CodeChallengeMethod": "oi_cd_chlg_meth",
      "CodeVerifier": "oi_cd_vrf",
      "CreationDate": "oi_crt_dt",
      "DeviceCodeId": "oi_dvc_id",
      "DeviceCodeLifetime": "oi_dvc_lft",
      "EndpointType": "oi_ept_typ",
      "ExpirationDate": "oi_exp_dt",
      "GrantType": "oi_grt_typ",
      "HostProperties": "oi_hst_props",
      "IdentityTokenLifetime": "oi_idt_lft",
      "InstanceId": "oi_instc_id",
      "Issuer": "oi_iss",
      "Nonce": "oi_nce",
      "PostLogoutRedirectUri": "oi_pstlgt_reduri",
      "ProviderName": "oi_prvd_name",
      "Presenter": "oi_prst",
      "RedirectUri": "oi_reduri",
      "RefreshTokenLifetime": "oi_reft_lft",
      "Resource": "oi_rsrc",
      "ResponseType": "oi_rsp_typ",
      "SigningAlgorithm": "oi_sign_alg",
      "Scope": "oi_scp",
      "StateTokenLifetime": "oi_stet_lft",
      "TokenId": "oi_tkn_id",
      "TokenType": "oi_tkn_typ",
      "UserCodeLifetime": "oi_usrc_lft"
    }
  },
  "ClientAssertionTypes": {
    "JwtBearer": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    "Saml2Bearer": "urn:ietf:params:oauth:client-assertion-type:saml2-bearer"
  },
  "ClientAuthenticationMethods": {
    "ClientSecretBasic": "client_secret_basic",
    "ClientSecretJwt": "client_secret_jwt",
    "ClientSecretPost": "client_secret_post",
    "PrivateKeyJwt": "private_key_jwt"
  },
  "ClientTypes": {
    "Confidential": "confidential",
    "Public": "public"
  },
  "CodeChallengeMethods": {
    "Plain": "plain",
    "Sha256": "S256"
  },
  "ConsentTypes": {
    "Explicit": "explicit",
    "External": "external",
    "Implicit": "implicit",
    "Systematic": "systematic"
  },
  "Destinations": {
    "AccessToken": "access_token",
    "IdentityToken": "id_token"
  },
  "Errors": {
    "AccessDenied": "access_denied",
    "AccountSelectionRequired": "account_selection_required",
    "AuthorizationPending": "authorization_pending",
    "ConsentRequired": "consent_required",
    "ExpiredToken": "expired_token",
    "InsufficientAccess": "insufficient_access",
    "InsufficientScope": "insufficient_scope",
    "InteractionRequired": "interaction_required",
    "InvalidClient": "invalid_client",
    "InvalidGrant": "invalid_grant",
    "InvalidRequest": "invalid_request",
    "InvalidRequestObject": "invalid_request_object",
    "InvalidRequestUri": "invalid_request_uri",
    "InvalidScope": "invalid_scope",
    "InvalidToken": "invalid_token",
    "LoginRequired": "login_required",
    "MissingToken": "missing_token",
    "RegistrationNotSupported": "registration_not_supported",
    "RequestNotSupported": "request_not_supported",
    "RequestUriNotSupported": "request_uri_not_supported",
    "ServerError": "server_error",
    "SlowDown": "slow_down",
    "TemporarilyUnavailable": "temporarily_unavailable",
    "UnauthorizedClient": "unauthorized_client",
    "UnsupportedGrantType": "unsupported_grant_type",
    "UnsupportedResponseType": "unsupported_response_type",
    "UnsupportedTokenType": "unsupported_token_type"
  },
  "GrantTypes": {
    "AuthorizationCode": "authorization_code",
    "ClientCredentials": "client_credentials",
    "DeviceCode": "urn:ietf:params:oauth:grant-type:device_code",
    "Implicit": "implicit",
    "Password": "password",
    "RefreshToken": "refresh_token"
  },
  "JsonWebTokenTypes": {
    "AccessToken": "at+jwt",
    "Jwt": "JWT",
    "Prefixes": {
      "Application": "application/"
    },
    "Private": {
      "AuthorizationCode": "oi_auc+jwt",
      "DeviceCode": "oi_dvc+jwt",
      "RefreshToken": "oi_reft+jwt",
      "StateToken": "oi_stet+jwt",
      "UserCode": "oi_usrc+jwt"
    }
  },
  "Metadata": {
    "AcrValuesSupported": "acr_values_supported",
    "AuthorizationEndpoint": "authorization_endpoint",
    "AuthorizationResponseIssParameterSupported": "authorization_response_iss_parameter_supported",
    "ClaimsLocalesSupported": "claims_locales_supported",
    "ClaimsParameterSupported": "claims_parameter_supported",
    "ClaimsSupported": "claims_supported",
    "ClaimTypesSupported": "claim_types_supported",
    "CodeChallengeMethodsSupported": "code_challenge_methods_supported",
    "DeviceAuthorizationEndpoint": "device_authorization_endpoint",
    "DeviceAuthorizationEndpointAuthMethodsSupported": "device_authorization_endpoint_auth_methods_supported",
    "DisplayValuesSupported": "display_values_supported",
    "EndSessionEndpoint": "end_session_endpoint",
    "GrantTypesSupported": "grant_types_supported",
    "IdTokenEncryptionAlgValuesSupported": "id_token_encryption_alg_values_supported",
    "IdTokenEncryptionEncValuesSupported": "id_token_encryption_enc_values_supported",
    "IdTokenSigningAlgValuesSupported": "id_token_signing_alg_values_supported",
    "IntrospectionEndpoint": "introspection_endpoint",
    "IntrospectionEndpointAuthMethodsSupported": "introspection_endpoint_auth_methods_supported",
    "IntrospectionEndpointAuthSigningAlgValuesSupported": "introspection_endpoint_auth_signing_alg_values_supported",
    "Issuer": "issuer",
    "JwksUri": "jwks_uri",
    "OpPolicyUri": "op_policy_uri",
    "OpTosUri": "op_tos_uri",
    "RequestObjectEncryptionAlgValuesSupported": "request_object_encryption_alg_values_supported",
    "RequestObjectEncryptionEncValuesSupported": "request_object_encryption_enc_values_supported",
    "RequestObjectSigningAlgValuesSupported": "request_object_signing_alg_values_supported",
    "RequestParameterSupported": "request_parameter_supported",
    "RequestUriParameterSupported": "request_uri_parameter_supported",
    "RequireRequestUriRegistration": "require_request_uri_registration",
    "ResponseModesSupported": "response_modes_supported",
    "ResponseTypesSupported": "response_types_supported",
    "RevocationEndpoint": "revocation_endpoint",
    "RevocationEndpointAuthMethodsSupported": "revocation_endpoint_auth_methods_supported",
    "RevocationEndpointAuthSigningAlgValuesSupported": "revocation_endpoint_auth_signing_alg_values_supported",
    "ScopesSupported": "scopes_supported",
    "ServiceDocumentation": "service_documentation",
    "SubjectTypesSupported": "subject_types_supported",
    "TokenEndpoint": "token_endpoint",
    "TokenEndpointAuthMethodsSupported": "token_endpoint_auth_methods_supported",
    "TokenEndpointAuthSigningAlgValuesSupported": "token_endpoint_auth_signing_alg_values_supported",
    "UiLocalesSupported": "ui_locales_supported",
    "UserinfoEncryptionAlgValuesSupported": "userinfo_encryption_alg_values_supported",
    "UserinfoEncryptionEncValuesSupported": "userinfo_encryption_enc_values_supported",
    "UserinfoEndpoint": "userinfo_endpoint",
    "UserinfoSigningAlgValuesSupported": "userinfo_signing_alg_values_supported"
  },
  "Parameters": {
    "AccessToken": "access_token",
    "Active": "active",
    "AcrValues": "acr_values",
    "Assertion": "assertion",
    "Audience": "audience",
    "Claims": "claims",
    "ClaimsLocales": "claims_locales",
    "ClientAssertion": "client_assertion",
    "ClientAssertionType": "client_assertion_type",
    "ClientId": "client_id",
    "ClientSecret": "client_secret",
    "Code": "code",
    "CodeChallenge": "code_challenge",
    "CodeChallengeMethod": "code_challenge_method",
    "CodeVerifier": "code_verifier",
    "DeviceCode": "device_code",
    "Display": "display",
    "Error": "error",
    "ErrorDescription": "error_description",
    "ErrorUri": "error_uri",
    "ExpiresIn": "expires_in",
    "GrantType": "grant_type",
    "IdentityProvider": "identity_provider",
    "IdToken": "id_token",
    "IdTokenHint": "id_token_hint",
    "Interval": "interval",
    "Iss": "iss",
    "LoginHint": "login_hint",
    "Keys": "keys",
    "MaxAge": "max_age",
    "Nonce": "nonce",
    "Password": "password",
    "PostLogoutRedirectUri": "post_logout_redirect_uri",
    "Prompt": "prompt",
    "Realm": "realm",
    "RedirectUri": "redirect_uri",
    "RefreshToken": "refresh_token",
    "Registration": "registration",
    "Request": "request",
    "RequestId": "request_id",
    "RequestUri": "request_uri",
    "Resource": "resource",
    "ResponseMode": "response_mode",
    "ResponseType": "response_type",
    "Scope": "scope",
    "State": "state",
    "Token": "token",
    "TokenType": "token_type",
    "TokenTypeHint": "token_type_hint",
    "UiLocales": "ui_locales",
    "UserCode": "user_code",
    "Username": "username",
    "VerificationUri": "verification_uri",
    "VerificationUriComplete": "verification_uri_complete"
  },
  "Permissions": {
    "Endpoints": {
      "Authorization": "ept:authorization",
      "Device": "ept:device",
      "Introspection": "ept:introspection",
      "Logout": "ept:logout",
      "Revocation": "ept:revocation",
      "Token": "ept:token"
    },
    "GrantTypes": {
      "AuthorizationCode": "gt:authorization_code",
      "ClientCredentials": "gt:client_credentials",
      "DeviceCode": "gt:urn:ietf:params:oauth:grant-type:device_code",
      "Implicit": "gt:implicit",
      "Password": "gt:password",
      "RefreshToken": "gt:refresh_token"
    },
    "Prefixes": {
      "Endpoint": "ept:",
      "GrantType": "gt:",
      "ResponseType": "rst:",
      "Scope": "scp:"
    },
    "ResponseTypes": {
      "Code": "rst:code",
      "CodeIdToken": "rst:code id_token",
      "CodeIdTokenToken": "rst:code id_token token",
      "CodeToken": "rst:code token",
      "IdToken": "rst:id_token",
      "IdTokenToken": "rst:id_token token",
      "None": "rst:none",
      "Token": "rst:token"
    },
    "Scopes": {
      "Address": "scp:address",
      "Email": "scp:email",
      "Phone": "scp:phone",
      "Profile": "scp:profile",
      "Roles": "scp:roles"
    }
  },
  "Prompts": {
    "Consent": "consent",
    "Login": "login",
    "None": "none",
    "SelectAccount": "select_account"
  },
  "Properties": {
    "Destinations": ".destinations"
  },
  "Requirements": {
    "Features": {
      "ProofKeyForCodeExchange": "ft:pkce"
    },
    "Prefixes": {
      "Feature": "ft:"
    }
  },
  "ResponseModes": {
    "FormPost": "form_post",
    "Fragment": "fragment",
    "Query": "query"
  },
  "ResponseTypes": {
    "Code": "code",
    "IdToken": "id_token",
    "None": "none",
    "Token": "token"
  },
  "Separators": {},
  "Schemes": {
    "Basic": "Basic",
    "Bearer": "Bearer"
  },
  "Scopes": {
    "Address": "address",
    "Email": "email",
    "OfflineAccess": "offline_access",
    "OpenId": "openid",
    "Phone": "phone",
    "Profile": "profile",
    "Roles": "roles"
  },
  "Statuses": {
    "Inactive": "inactive",
    "Redeemed": "redeemed",
    "Rejected": "rejected",
    "Revoked": "revoked",
    "Valid": "valid"
  },
  "SubjectTypes": {
    "Pairwise": "pairwise",
    "Public": "public"
  },
  "TokenFormats": {
    "Jwt": "urn:ietf:params:oauth:token-type:jwt",
    "Saml1": "urn:ietf:params:oauth:token-type:saml1",
    "Saml2": "urn:ietf:params:oauth:token-type:saml2",
    "Private": {
      "DataProtection": "urn:openiddict:params:oauth:token-type:dp"
    }
  },
  "TokenTypeHints": {
    "AccessToken": "access_token",
    "AuthorizationCode": "authorization_code",
    "ClientAssertionToken": "client_assertion_token",
    "DeviceCode": "device_code",
    "IdToken": "id_token",
    "RefreshToken": "refresh_token",
    "StateToken": "state_token",
    "UserinfoToken": "userinfo_token",
    "UserCode": "user_code"
  },
  "TokenTypes": {
    "Bearer": "Bearer"
  }
}
```

##### open-iddict-constants

https://localhost:44344/api/openiddict/consts-app-service/open-iddict-constants

```json
{
  "OpenIddictConstants.Algorithms.EcdsaSha256": "ES256",
  "OpenIddictConstants.Algorithms.EcdsaSha384": "ES384",
  "OpenIddictConstants.Algorithms.EcdsaSha512": "ES512",
  "OpenIddictConstants.Algorithms.HmacSha256": "HS256",
  "OpenIddictConstants.Algorithms.HmacSha384": "HS384",
  "OpenIddictConstants.Algorithms.HmacSha512": "HS512",
  "OpenIddictConstants.Algorithms.RsaSha256": "RS256",
  "OpenIddictConstants.Algorithms.RsaSha384": "RS384",
  "OpenIddictConstants.Algorithms.RsaSha512": "RS512",
  "OpenIddictConstants.Algorithms.RsaSsaPssSha256": "PS256",
  "OpenIddictConstants.Algorithms.RsaSsaPssSha384": "PS384",
  "OpenIddictConstants.Algorithms.RsaSsaPssSha512": "PS512",
  "OpenIddictConstants.AuthenticationMethodReferences.Face": "face",
  "OpenIddictConstants.AuthenticationMethodReferences.Fingerprint": "fpt",
  "OpenIddictConstants.AuthenticationMethodReferences.Geolocation": "geo",
  "OpenIddictConstants.AuthenticationMethodReferences.HardwareKey": "hwk",
  "OpenIddictConstants.AuthenticationMethodReferences.Iris": "iris",
  "OpenIddictConstants.AuthenticationMethodReferences.KnowledgeBased": "kba",
  "OpenIddictConstants.AuthenticationMethodReferences.MultiChannel": "mca",
  "OpenIddictConstants.AuthenticationMethodReferences.MultiFactor": "mfa",
  "OpenIddictConstants.AuthenticationMethodReferences.OneTimePassword": "otp",
  "OpenIddictConstants.AuthenticationMethodReferences.Password": "pwd",
  "OpenIddictConstants.AuthenticationMethodReferences.PersonalIdentificationNumber": "pin",
  "OpenIddictConstants.AuthenticationMethodReferences.Retina": "retina",
  "OpenIddictConstants.AuthenticationMethodReferences.RiskBased": "rba",
  "OpenIddictConstants.AuthenticationMethodReferences.ShortMessageService": "sms",
  "OpenIddictConstants.AuthenticationMethodReferences.SmartCard": "sc",
  "OpenIddictConstants.AuthenticationMethodReferences.SoftwareKey": "swk",
  "OpenIddictConstants.AuthenticationMethodReferences.Telephone": "tel",
  "OpenIddictConstants.AuthenticationMethodReferences.UserPresence": "user",
  "OpenIddictConstants.AuthenticationMethodReferences.Voiceprint": "vbm",
  "OpenIddictConstants.AuthenticationMethodReferences.WindowsIntegratedAuthentication": "wia",
  "OpenIddictConstants.AuthorizationTypes.AdHoc": "ad-hoc",
  "OpenIddictConstants.AuthorizationTypes.Permanent": "permanent",
  "OpenIddictConstants.Claims.AccessTokenHash": "at_hash",
  "OpenIddictConstants.Claims.Active": "active",
  "OpenIddictConstants.Claims.Address": "address",
  "OpenIddictConstants.Claims.Audience": "aud",
  "OpenIddictConstants.Claims.AuthenticationContextReference": "acr",
  "OpenIddictConstants.Claims.AuthenticationMethodReference": "amr",
  "OpenIddictConstants.Claims.AuthenticationTime": "auth_time",
  "OpenIddictConstants.Claims.AuthorizationServer": "as",
  "OpenIddictConstants.Claims.AuthorizedParty": "azp",
  "OpenIddictConstants.Claims.Birthdate": "birthdate",
  "OpenIddictConstants.Claims.ClientId": "client_id",
  "OpenIddictConstants.Claims.CodeHash": "c_hash",
  "OpenIddictConstants.Claims.Country": "country",
  "OpenIddictConstants.Claims.Email": "email",
  "OpenIddictConstants.Claims.EmailVerified": "email_verified",
  "OpenIddictConstants.Claims.ExpiresAt": "exp",
  "OpenIddictConstants.Claims.FamilyName": "family_name",
  "OpenIddictConstants.Claims.Formatted": "formatted",
  "OpenIddictConstants.Claims.Gender": "gender",
  "OpenIddictConstants.Claims.GivenName": "given_name",
  "OpenIddictConstants.Claims.IssuedAt": "iat",
  "OpenIddictConstants.Claims.Issuer": "iss",
  "OpenIddictConstants.Claims.Locale": "locale",
  "OpenIddictConstants.Claims.Locality": "locality",
  "OpenIddictConstants.Claims.JwtId": "jti",
  "OpenIddictConstants.Claims.KeyId": "kid",
  "OpenIddictConstants.Claims.MiddleName": "middle_name",
  "OpenIddictConstants.Claims.Name": "name",
  "OpenIddictConstants.Claims.Nickname": "nickname",
  "OpenIddictConstants.Claims.Nonce": "nonce",
  "OpenIddictConstants.Claims.NotBefore": "nbf",
  "OpenIddictConstants.Claims.PhoneNumber": "phone_number",
  "OpenIddictConstants.Claims.PhoneNumberVerified": "phone_number_verified",
  "OpenIddictConstants.Claims.Picture": "picture",
  "OpenIddictConstants.Claims.PostalCode": "postal_code",
  "OpenIddictConstants.Claims.PreferredUsername": "preferred_username",
  "OpenIddictConstants.Claims.Profile": "profile",
  "OpenIddictConstants.Claims.Region": "region",
  "OpenIddictConstants.Claims.RequestForgeryProtection": "rfp",
  "OpenIddictConstants.Claims.Role": "role",
  "OpenIddictConstants.Claims.Scope": "scope",
  "OpenIddictConstants.Claims.StreetAddress": "street_address",
  "OpenIddictConstants.Claims.Subject": "sub",
  "OpenIddictConstants.Claims.TargetLinkUri": "target_link_uri",
  "OpenIddictConstants.Claims.TokenType": "token_type",
  "OpenIddictConstants.Claims.TokenUsage": "token_usage",
  "OpenIddictConstants.Claims.UpdatedAt": "updated_at",
  "OpenIddictConstants.Claims.Username": "username",
  "OpenIddictConstants.Claims.Website": "website",
  "OpenIddictConstants.Claims.Zoneinfo": "zoneinfo",
  "OpenIddictConstants.Claims.Prefixes.Private": "oi_",
  "OpenIddictConstants.Claims.Private.AccessTokenLifetime": "oi_act_lft",
  "OpenIddictConstants.Claims.Private.Audience": "oi_aud",
  "OpenIddictConstants.Claims.Private.AuthorizationCodeLifetime": "oi_auc_lft",
  "OpenIddictConstants.Claims.Private.AuthorizationId": "oi_au_id",
  "OpenIddictConstants.Claims.Private.ClaimDestinationsMap": "oi_cl_dstn",
  "OpenIddictConstants.Claims.Private.CodeChallenge": "oi_cd_chlg",
  "OpenIddictConstants.Claims.Private.CodeChallengeMethod": "oi_cd_chlg_meth",
  "OpenIddictConstants.Claims.Private.CodeVerifier": "oi_cd_vrf",
  "OpenIddictConstants.Claims.Private.CreationDate": "oi_crt_dt",
  "OpenIddictConstants.Claims.Private.DeviceCodeId": "oi_dvc_id",
  "OpenIddictConstants.Claims.Private.DeviceCodeLifetime": "oi_dvc_lft",
  "OpenIddictConstants.Claims.Private.EndpointType": "oi_ept_typ",
  "OpenIddictConstants.Claims.Private.ExpirationDate": "oi_exp_dt",
  "OpenIddictConstants.Claims.Private.GrantType": "oi_grt_typ",
  "OpenIddictConstants.Claims.Private.HostProperties": "oi_hst_props",
  "OpenIddictConstants.Claims.Private.IdentityTokenLifetime": "oi_idt_lft",
  "OpenIddictConstants.Claims.Private.InstanceId": "oi_instc_id",
  "OpenIddictConstants.Claims.Private.Issuer": "oi_iss",
  "OpenIddictConstants.Claims.Private.Nonce": "oi_nce",
  "OpenIddictConstants.Claims.Private.PostLogoutRedirectUri": "oi_pstlgt_reduri",
  "OpenIddictConstants.Claims.Private.ProviderName": "oi_prvd_name",
  "OpenIddictConstants.Claims.Private.Presenter": "oi_prst",
  "OpenIddictConstants.Claims.Private.RedirectUri": "oi_reduri",
  "OpenIddictConstants.Claims.Private.RefreshTokenLifetime": "oi_reft_lft",
  "OpenIddictConstants.Claims.Private.Resource": "oi_rsrc",
  "OpenIddictConstants.Claims.Private.ResponseType": "oi_rsp_typ",
  "OpenIddictConstants.Claims.Private.SigningAlgorithm": "oi_sign_alg",
  "OpenIddictConstants.Claims.Private.Scope": "oi_scp",
  "OpenIddictConstants.Claims.Private.StateTokenLifetime": "oi_stet_lft",
  "OpenIddictConstants.Claims.Private.TokenId": "oi_tkn_id",
  "OpenIddictConstants.Claims.Private.TokenType": "oi_tkn_typ",
  "OpenIddictConstants.Claims.Private.UserCodeLifetime": "oi_usrc_lft",
  "OpenIddictConstants.ClientAssertionTypes.JwtBearer": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  "OpenIddictConstants.ClientAssertionTypes.Saml2Bearer": "urn:ietf:params:oauth:client-assertion-type:saml2-bearer",
  "OpenIddictConstants.ClientAuthenticationMethods.ClientSecretBasic": "client_secret_basic",
  "OpenIddictConstants.ClientAuthenticationMethods.ClientSecretJwt": "client_secret_jwt",
  "OpenIddictConstants.ClientAuthenticationMethods.ClientSecretPost": "client_secret_post",
  "OpenIddictConstants.ClientAuthenticationMethods.PrivateKeyJwt": "private_key_jwt",
  "OpenIddictConstants.ClientTypes.Confidential": "confidential",
  "OpenIddictConstants.ClientTypes.Public": "public",
  "OpenIddictConstants.CodeChallengeMethods.Plain": "plain",
  "OpenIddictConstants.CodeChallengeMethods.Sha256": "S256",
  "OpenIddictConstants.ConsentTypes.Explicit": "explicit",
  "OpenIddictConstants.ConsentTypes.External": "external",
  "OpenIddictConstants.ConsentTypes.Implicit": "implicit",
  "OpenIddictConstants.ConsentTypes.Systematic": "systematic",
  "OpenIddictConstants.Destinations.AccessToken": "access_token",
  "OpenIddictConstants.Destinations.IdentityToken": "id_token",
  "OpenIddictConstants.Errors.AccessDenied": "access_denied",
  "OpenIddictConstants.Errors.AccountSelectionRequired": "account_selection_required",
  "OpenIddictConstants.Errors.AuthorizationPending": "authorization_pending",
  "OpenIddictConstants.Errors.ConsentRequired": "consent_required",
  "OpenIddictConstants.Errors.ExpiredToken": "expired_token",
  "OpenIddictConstants.Errors.InsufficientAccess": "insufficient_access",
  "OpenIddictConstants.Errors.InsufficientScope": "insufficient_scope",
  "OpenIddictConstants.Errors.InteractionRequired": "interaction_required",
  "OpenIddictConstants.Errors.InvalidClient": "invalid_client",
  "OpenIddictConstants.Errors.InvalidGrant": "invalid_grant",
  "OpenIddictConstants.Errors.InvalidRequest": "invalid_request",
  "OpenIddictConstants.Errors.InvalidRequestObject": "invalid_request_object",
  "OpenIddictConstants.Errors.InvalidRequestUri": "invalid_request_uri",
  "OpenIddictConstants.Errors.InvalidScope": "invalid_scope",
  "OpenIddictConstants.Errors.InvalidToken": "invalid_token",
  "OpenIddictConstants.Errors.LoginRequired": "login_required",
  "OpenIddictConstants.Errors.MissingToken": "missing_token",
  "OpenIddictConstants.Errors.RegistrationNotSupported": "registration_not_supported",
  "OpenIddictConstants.Errors.RequestNotSupported": "request_not_supported",
  "OpenIddictConstants.Errors.RequestUriNotSupported": "request_uri_not_supported",
  "OpenIddictConstants.Errors.ServerError": "server_error",
  "OpenIddictConstants.Errors.SlowDown": "slow_down",
  "OpenIddictConstants.Errors.TemporarilyUnavailable": "temporarily_unavailable",
  "OpenIddictConstants.Errors.UnauthorizedClient": "unauthorized_client",
  "OpenIddictConstants.Errors.UnsupportedGrantType": "unsupported_grant_type",
  "OpenIddictConstants.Errors.UnsupportedResponseType": "unsupported_response_type",
  "OpenIddictConstants.Errors.UnsupportedTokenType": "unsupported_token_type",
  "OpenIddictConstants.GrantTypes.AuthorizationCode": "authorization_code",
  "OpenIddictConstants.GrantTypes.ClientCredentials": "client_credentials",
  "OpenIddictConstants.GrantTypes.DeviceCode": "urn:ietf:params:oauth:grant-type:device_code",
  "OpenIddictConstants.GrantTypes.Implicit": "implicit",
  "OpenIddictConstants.GrantTypes.Password": "password",
  "OpenIddictConstants.GrantTypes.RefreshToken": "refresh_token",
  "OpenIddictConstants.JsonWebTokenTypes.AccessToken": "at+jwt",
  "OpenIddictConstants.JsonWebTokenTypes.Jwt": "JWT",
  "OpenIddictConstants.JsonWebTokenTypes.Prefixes.Application": "application/",
  "OpenIddictConstants.JsonWebTokenTypes.Private.AuthorizationCode": "oi_auc+jwt",
  "OpenIddictConstants.JsonWebTokenTypes.Private.DeviceCode": "oi_dvc+jwt",
  "OpenIddictConstants.JsonWebTokenTypes.Private.RefreshToken": "oi_reft+jwt",
  "OpenIddictConstants.JsonWebTokenTypes.Private.StateToken": "oi_stet+jwt",
  "OpenIddictConstants.JsonWebTokenTypes.Private.UserCode": "oi_usrc+jwt",
  "OpenIddictConstants.Metadata.AcrValuesSupported": "acr_values_supported",
  "OpenIddictConstants.Metadata.AuthorizationEndpoint": "authorization_endpoint",
  "OpenIddictConstants.Metadata.AuthorizationResponseIssParameterSupported": "authorization_response_iss_parameter_supported",
  "OpenIddictConstants.Metadata.ClaimsLocalesSupported": "claims_locales_supported",
  "OpenIddictConstants.Metadata.ClaimsParameterSupported": "claims_parameter_supported",
  "OpenIddictConstants.Metadata.ClaimsSupported": "claims_supported",
  "OpenIddictConstants.Metadata.ClaimTypesSupported": "claim_types_supported",
  "OpenIddictConstants.Metadata.CodeChallengeMethodsSupported": "code_challenge_methods_supported",
  "OpenIddictConstants.Metadata.DeviceAuthorizationEndpoint": "device_authorization_endpoint",
  "OpenIddictConstants.Metadata.DeviceAuthorizationEndpointAuthMethodsSupported": "device_authorization_endpoint_auth_methods_supported",
  "OpenIddictConstants.Metadata.DisplayValuesSupported": "display_values_supported",
  "OpenIddictConstants.Metadata.EndSessionEndpoint": "end_session_endpoint",
  "OpenIddictConstants.Metadata.GrantTypesSupported": "grant_types_supported",
  "OpenIddictConstants.Metadata.IdTokenEncryptionAlgValuesSupported": "id_token_encryption_alg_values_supported",
  "OpenIddictConstants.Metadata.IdTokenEncryptionEncValuesSupported": "id_token_encryption_enc_values_supported",
  "OpenIddictConstants.Metadata.IdTokenSigningAlgValuesSupported": "id_token_signing_alg_values_supported",
  "OpenIddictConstants.Metadata.IntrospectionEndpoint": "introspection_endpoint",
  "OpenIddictConstants.Metadata.IntrospectionEndpointAuthMethodsSupported": "introspection_endpoint_auth_methods_supported",
  "OpenIddictConstants.Metadata.IntrospectionEndpointAuthSigningAlgValuesSupported": "introspection_endpoint_auth_signing_alg_values_supported",
  "OpenIddictConstants.Metadata.Issuer": "issuer",
  "OpenIddictConstants.Metadata.JwksUri": "jwks_uri",
  "OpenIddictConstants.Metadata.OpPolicyUri": "op_policy_uri",
  "OpenIddictConstants.Metadata.OpTosUri": "op_tos_uri",
  "OpenIddictConstants.Metadata.RequestObjectEncryptionAlgValuesSupported": "request_object_encryption_alg_values_supported",
  "OpenIddictConstants.Metadata.RequestObjectEncryptionEncValuesSupported": "request_object_encryption_enc_values_supported",
  "OpenIddictConstants.Metadata.RequestObjectSigningAlgValuesSupported": "request_object_signing_alg_values_supported",
  "OpenIddictConstants.Metadata.RequestParameterSupported": "request_parameter_supported",
  "OpenIddictConstants.Metadata.RequestUriParameterSupported": "request_uri_parameter_supported",
  "OpenIddictConstants.Metadata.RequireRequestUriRegistration": "require_request_uri_registration",
  "OpenIddictConstants.Metadata.ResponseModesSupported": "response_modes_supported",
  "OpenIddictConstants.Metadata.ResponseTypesSupported": "response_types_supported",
  "OpenIddictConstants.Metadata.RevocationEndpoint": "revocation_endpoint",
  "OpenIddictConstants.Metadata.RevocationEndpointAuthMethodsSupported": "revocation_endpoint_auth_methods_supported",
  "OpenIddictConstants.Metadata.RevocationEndpointAuthSigningAlgValuesSupported": "revocation_endpoint_auth_signing_alg_values_supported",
  "OpenIddictConstants.Metadata.ScopesSupported": "scopes_supported",
  "OpenIddictConstants.Metadata.ServiceDocumentation": "service_documentation",
  "OpenIddictConstants.Metadata.SubjectTypesSupported": "subject_types_supported",
  "OpenIddictConstants.Metadata.TokenEndpoint": "token_endpoint",
  "OpenIddictConstants.Metadata.TokenEndpointAuthMethodsSupported": "token_endpoint_auth_methods_supported",
  "OpenIddictConstants.Metadata.TokenEndpointAuthSigningAlgValuesSupported": "token_endpoint_auth_signing_alg_values_supported",
  "OpenIddictConstants.Metadata.UiLocalesSupported": "ui_locales_supported",
  "OpenIddictConstants.Metadata.UserinfoEncryptionAlgValuesSupported": "userinfo_encryption_alg_values_supported",
  "OpenIddictConstants.Metadata.UserinfoEncryptionEncValuesSupported": "userinfo_encryption_enc_values_supported",
  "OpenIddictConstants.Metadata.UserinfoEndpoint": "userinfo_endpoint",
  "OpenIddictConstants.Metadata.UserinfoSigningAlgValuesSupported": "userinfo_signing_alg_values_supported",
  "OpenIddictConstants.Parameters.AccessToken": "access_token",
  "OpenIddictConstants.Parameters.Active": "active",
  "OpenIddictConstants.Parameters.AcrValues": "acr_values",
  "OpenIddictConstants.Parameters.Assertion": "assertion",
  "OpenIddictConstants.Parameters.Audience": "audience",
  "OpenIddictConstants.Parameters.Claims": "claims",
  "OpenIddictConstants.Parameters.ClaimsLocales": "claims_locales",
  "OpenIddictConstants.Parameters.ClientAssertion": "client_assertion",
  "OpenIddictConstants.Parameters.ClientAssertionType": "client_assertion_type",
  "OpenIddictConstants.Parameters.ClientId": "client_id",
  "OpenIddictConstants.Parameters.ClientSecret": "client_secret",
  "OpenIddictConstants.Parameters.Code": "code",
  "OpenIddictConstants.Parameters.CodeChallenge": "code_challenge",
  "OpenIddictConstants.Parameters.CodeChallengeMethod": "code_challenge_method",
  "OpenIddictConstants.Parameters.CodeVerifier": "code_verifier",
  "OpenIddictConstants.Parameters.DeviceCode": "device_code",
  "OpenIddictConstants.Parameters.Display": "display",
  "OpenIddictConstants.Parameters.Error": "error",
  "OpenIddictConstants.Parameters.ErrorDescription": "error_description",
  "OpenIddictConstants.Parameters.ErrorUri": "error_uri",
  "OpenIddictConstants.Parameters.ExpiresIn": "expires_in",
  "OpenIddictConstants.Parameters.GrantType": "grant_type",
  "OpenIddictConstants.Parameters.IdentityProvider": "identity_provider",
  "OpenIddictConstants.Parameters.IdToken": "id_token",
  "OpenIddictConstants.Parameters.IdTokenHint": "id_token_hint",
  "OpenIddictConstants.Parameters.Interval": "interval",
  "OpenIddictConstants.Parameters.Iss": "iss",
  "OpenIddictConstants.Parameters.LoginHint": "login_hint",
  "OpenIddictConstants.Parameters.Keys": "keys",
  "OpenIddictConstants.Parameters.MaxAge": "max_age",
  "OpenIddictConstants.Parameters.Nonce": "nonce",
  "OpenIddictConstants.Parameters.Password": "password",
  "OpenIddictConstants.Parameters.PostLogoutRedirectUri": "post_logout_redirect_uri",
  "OpenIddictConstants.Parameters.Prompt": "prompt",
  "OpenIddictConstants.Parameters.Realm": "realm",
  "OpenIddictConstants.Parameters.RedirectUri": "redirect_uri",
  "OpenIddictConstants.Parameters.RefreshToken": "refresh_token",
  "OpenIddictConstants.Parameters.Registration": "registration",
  "OpenIddictConstants.Parameters.Request": "request",
  "OpenIddictConstants.Parameters.RequestId": "request_id",
  "OpenIddictConstants.Parameters.RequestUri": "request_uri",
  "OpenIddictConstants.Parameters.Resource": "resource",
  "OpenIddictConstants.Parameters.ResponseMode": "response_mode",
  "OpenIddictConstants.Parameters.ResponseType": "response_type",
  "OpenIddictConstants.Parameters.Scope": "scope",
  "OpenIddictConstants.Parameters.State": "state",
  "OpenIddictConstants.Parameters.Token": "token",
  "OpenIddictConstants.Parameters.TokenType": "token_type",
  "OpenIddictConstants.Parameters.TokenTypeHint": "token_type_hint",
  "OpenIddictConstants.Parameters.UiLocales": "ui_locales",
  "OpenIddictConstants.Parameters.UserCode": "user_code",
  "OpenIddictConstants.Parameters.Username": "username",
  "OpenIddictConstants.Parameters.VerificationUri": "verification_uri",
  "OpenIddictConstants.Parameters.VerificationUriComplete": "verification_uri_complete",
  "OpenIddictConstants.Permissions.Endpoints.Authorization": "ept:authorization",
  "OpenIddictConstants.Permissions.Endpoints.Device": "ept:device",
  "OpenIddictConstants.Permissions.Endpoints.Introspection": "ept:introspection",
  "OpenIddictConstants.Permissions.Endpoints.Logout": "ept:logout",
  "OpenIddictConstants.Permissions.Endpoints.Revocation": "ept:revocation",
  "OpenIddictConstants.Permissions.Endpoints.Token": "ept:token",
  "OpenIddictConstants.Permissions.GrantTypes.AuthorizationCode": "gt:authorization_code",
  "OpenIddictConstants.Permissions.GrantTypes.ClientCredentials": "gt:client_credentials",
  "OpenIddictConstants.Permissions.GrantTypes.DeviceCode": "gt:urn:ietf:params:oauth:grant-type:device_code",
  "OpenIddictConstants.Permissions.GrantTypes.Implicit": "gt:implicit",
  "OpenIddictConstants.Permissions.GrantTypes.Password": "gt:password",
  "OpenIddictConstants.Permissions.GrantTypes.RefreshToken": "gt:refresh_token",
  "OpenIddictConstants.Permissions.Prefixes.Endpoint": "ept:",
  "OpenIddictConstants.Permissions.Prefixes.GrantType": "gt:",
  "OpenIddictConstants.Permissions.Prefixes.ResponseType": "rst:",
  "OpenIddictConstants.Permissions.Prefixes.Scope": "scp:",
  "OpenIddictConstants.Permissions.ResponseTypes.Code": "rst:code",
  "OpenIddictConstants.Permissions.ResponseTypes.CodeIdToken": "rst:code id_token",
  "OpenIddictConstants.Permissions.ResponseTypes.CodeIdTokenToken": "rst:code id_token token",
  "OpenIddictConstants.Permissions.ResponseTypes.CodeToken": "rst:code token",
  "OpenIddictConstants.Permissions.ResponseTypes.IdToken": "rst:id_token",
  "OpenIddictConstants.Permissions.ResponseTypes.IdTokenToken": "rst:id_token token",
  "OpenIddictConstants.Permissions.ResponseTypes.None": "rst:none",
  "OpenIddictConstants.Permissions.ResponseTypes.Token": "rst:token",
  "OpenIddictConstants.Permissions.Scopes.Address": "scp:address",
  "OpenIddictConstants.Permissions.Scopes.Email": "scp:email",
  "OpenIddictConstants.Permissions.Scopes.Phone": "scp:phone",
  "OpenIddictConstants.Permissions.Scopes.Profile": "scp:profile",
  "OpenIddictConstants.Permissions.Scopes.Roles": "scp:roles",
  "OpenIddictConstants.Prompts.Consent": "consent",
  "OpenIddictConstants.Prompts.Login": "login",
  "OpenIddictConstants.Prompts.None": "none",
  "OpenIddictConstants.Prompts.SelectAccount": "select_account",
  "OpenIddictConstants.Properties.Destinations": ".destinations",
  "OpenIddictConstants.Requirements.Features.ProofKeyForCodeExchange": "ft:pkce",
  "OpenIddictConstants.Requirements.Prefixes.Feature": "ft:",
  "OpenIddictConstants.ResponseModes.FormPost": "form_post",
  "OpenIddictConstants.ResponseModes.Fragment": "fragment",
  "OpenIddictConstants.ResponseModes.Query": "query",
  "OpenIddictConstants.ResponseTypes.Code": "code",
  "OpenIddictConstants.ResponseTypes.IdToken": "id_token",
  "OpenIddictConstants.ResponseTypes.None": "none",
  "OpenIddictConstants.ResponseTypes.Token": "token",
  "OpenIddictConstants.Schemes.Basic": "Basic",
  "OpenIddictConstants.Schemes.Bearer": "Bearer",
  "OpenIddictConstants.Scopes.Address": "address",
  "OpenIddictConstants.Scopes.Email": "email",
  "OpenIddictConstants.Scopes.OfflineAccess": "offline_access",
  "OpenIddictConstants.Scopes.OpenId": "openid",
  "OpenIddictConstants.Scopes.Phone": "phone",
  "OpenIddictConstants.Scopes.Profile": "profile",
  "OpenIddictConstants.Scopes.Roles": "roles",
  "OpenIddictConstants.Statuses.Inactive": "inactive",
  "OpenIddictConstants.Statuses.Redeemed": "redeemed",
  "OpenIddictConstants.Statuses.Rejected": "rejected",
  "OpenIddictConstants.Statuses.Revoked": "revoked",
  "OpenIddictConstants.Statuses.Valid": "valid",
  "OpenIddictConstants.SubjectTypes.Pairwise": "pairwise",
  "OpenIddictConstants.SubjectTypes.Public": "public",
  "OpenIddictConstants.TokenFormats.Jwt": "urn:ietf:params:oauth:token-type:jwt",
  "OpenIddictConstants.TokenFormats.Saml1": "urn:ietf:params:oauth:token-type:saml1",
  "OpenIddictConstants.TokenFormats.Saml2": "urn:ietf:params:oauth:token-type:saml2",
  "OpenIddictConstants.TokenFormats.Private.DataProtection": "urn:openiddict:params:oauth:token-type:dp",
  "OpenIddictConstants.TokenTypeHints.AccessToken": "access_token",
  "OpenIddictConstants.TokenTypeHints.AuthorizationCode": "authorization_code",
  "OpenIddictConstants.TokenTypeHints.ClientAssertionToken": "client_assertion_token",
  "OpenIddictConstants.TokenTypeHints.DeviceCode": "device_code",
  "OpenIddictConstants.TokenTypeHints.IdToken": "id_token",
  "OpenIddictConstants.TokenTypeHints.RefreshToken": "refresh_token",
  "OpenIddictConstants.TokenTypeHints.StateToken": "state_token",
  "OpenIddictConstants.TokenTypeHints.UserinfoToken": "userinfo_token",
  "OpenIddictConstants.TokenTypeHints.UserCode": "user_code",
  "OpenIddictConstants.TokenTypes.Bearer": "Bearer"
}
```
