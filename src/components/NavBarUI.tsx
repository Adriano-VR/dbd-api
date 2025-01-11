import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
 
  } from "@nextui-org/react";
  
  export const AcmeLogo = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
      <path fill="#fff" d="M22.463,27.062l-0.179-0.352c-0.131,0-0.199-0.003-0.259,0c-0.071,0.003-0.153-0.109-0.153-0.109	s-0.115,0.103-0.33,0.086l-0.061,1.091c0,0,0.253,0.041,0.261,0.099c0.007,0.047-0.051,0.121-0.115,0.121	c-0.064,0-0.107-0.075-0.107-0.075l-0.055-0.008l-0.302,4.391l-0.034-4.51l-0.228-0.084l-0.095,0.45l-0.009,4.02l-0.303,0.99	l-0.007,1.293l0.108,0.438l0.004,0.734l-0.14,0.518l-0.014,1.919L20.206,41l-0.144-1.972l-0.148-0.407l0.007-3.332l-0.071-0.629	c0,0-0.089,2.054-0.119,2.821l-0.227-3.336l0.026-2.188l-0.194-0.794l-0.003-1.757l-0.302-0.889l0-1.607	c0,0-0.324-0.087-0.448-0.192c-0.116-0.097-0.267-0.241-0.267-0.241l-0.404,0.01l-1.297-0.699l-0.177-0.021l-0.22-0.333l0.246,0.252	c0,0,0.901,0.195,1.229,0.247c0.13,0.021,0.315,0.043,0.231-0.213c-0.006-0.019,0.01-0.05,0.022-0.072	c0.09-0.167,0.117-0.304-0.136-0.317c-0.022-0.001-0.092-0.044-0.097-0.061c-0.021-0.08-0.038-0.213-0.125-0.206	c-0.166,0.013-0.352-0.08-0.458-0.112c-0.096-0.028-0.188,0.001-0.188,0.001s-0.106-0.115-0.157-0.129	c-0.085-0.022-0.13-0.005-0.195-0.011c-0.266-0.024-0.305,0.116-0.384,0.324c-0.263-0.357-0.378-0.229-0.567-0.324	c-0.099-0.049-0.283-0.114-0.283-0.114s-0.141,0.063-0.212,0.122c-0.034,0.028-0.136,0.031-0.155,0.006	c-0.097-0.131-0.237-0.205-0.424-0.182c-0.153,0.019-0.302-0.066-0.302-0.066l-0.012,0.399l-0.212,0.644l-0.057,1.391l-0.116,0.57	l-0.034-2.992l-0.081-0.004l0.007,4.037l0.035,0.066l0.007,0.487l-0.182,0.429l-0.02,0.449L13.67,30.2l-0.276,5.529l-0.048-3.772	l-0.073-0.156l-0.081,2.351l-0.231,0.733l0.021,1.859l-0.227,0.477v0.699l0.031,0.115l-0.196,2.356l-0.15-2.578l-0.165-0.841	l-0.015-1.633l-0.116-0.396l0.002-1.803l-0.177-1.234l-0.001-2.706l-0.113-0.419l0.01-1.626l-0.094-0.394l-0.303,5.377l-0.054-6.687	l-0.12-0.116c0,0-0.002-0.797-0.002-1.158c-0.442,0.077-0.814-0.085-1.193-0.248c-0.175-0.076-0.621-0.033-0.752-0.1	c-0.134-0.069-0.283-0.182-0.283-0.182s-0.28,0.029-0.441-0.023c-0.318-0.043-0.384-0.158-0.524-0.296	c-0.454-0.447-0.964-0.75-1.602-0.797c-0.207-0.015-0.365-0.119-0.515-0.268c-0.255-0.252-0.57-0.356-0.93-0.31	c-0.085,0.011-0.181,0.002-0.261-0.028c-0.287-0.107-0.57-0.227-0.854-0.344c-0.105-0.044-0.31-0.154-0.31-0.154	s-0.09,0.049-0.135,0.078c-0.022,0.014-0.081-0.004-0.105-0.027c-0.197-0.189-0.382-0.382-0.401-0.689	c-0.007-0.11,0.019-0.171-0.026-0.216c-0.148-0.15-0.333-0.328-0.331-0.538c0.002-0.236-0.013-0.56-0.005-0.796	c0.012-0.395,0.193-0.671,0.52-0.901c0.166-0.117,0.33-0.189,0.517-0.206c0.223-0.02,0.47,0.028,0.678,0.039	c0.56,0.029,0.424,0.085,0.57,0.105c0.106,0.015,0.264,0.015,0.371,0.007c0.773-0.031,0.841,0.044,1.256,0.337	c0.377,0.267,0.816,0.099,1.031,0.252c0.07,0.05,0.252,0.273,0.474,0.35c0.336,0.116,0.435,0.09,0.641,0.145	c0.617,0.165,0.762,0.169,1.107,0.151l0.033,0.054l0.141,0.02l0.108-0.088l1.063,0.021l-0.064-0.977l-0.214-0.677l0.293-1.199	l0-1.41l0.041-0.034l0.002-0.157l-0.043-0.053c0-0.086,0.001-0.141,0.001-0.141l0.044-0.008l0.002-0.237l-0.057-0.056l0.007-0.507	l0.282-0.621l0.031-0.578l0.375-0.301c0,0,0.197-0.038,0.268-0.065c0.284-0.109,0.436-0.197,0.436-0.197	c0.561-0.048,0.85-0.185,0.85-0.185l0.108-0.367c0.044,0.146,0.151,0.55,0.151,0.55l0.207-0.079c0,0,0.121,0.226,0.246,0.242	l0.089-0.377l0.135,0.044l0.112-1.216l0.175,2.176l0.074,0.17c0,0,0.051-0.368,0.066-0.441c0.013,0.203,0.105,0.818,0.105,0.818	s0.269,0.508,0.348,0.764c0,0-0.087,0.281-0.158,0.707c-0.095,0.121-0.259,0.237-0.244,0.587c0.014,0.323,0.061,0.591,0.061,0.591	l-0.135,0.161l0.016,2.427l-0.384,1.461l0.993,0.085l0.356,0.167l0.463-0.013l0.893,0.222l0.164-0.037l0.355,0.212l0.22-0.02	c0,0,0.031,0.042,0.066,0.054l-0.046,0.199l0.062,0.084l0.174,0.02l0.344,0.29l0.211-0.11l-0.134-2.847l0.121-0.228l-0.002-0.841	l-0.379-1.101l-0.01-2.013l-0.103-0.12l-0.03,1.015l-0.146-1.715l-0.172-0.276l-0.001-0.385l-0.045-0.024	c0.001-0.077,0.043-0.302,0.043-0.302l-0.069-0.089l0.114-1.135c0,0,0.191-0.072,0.358-0.49c0.142-0.357,0.282-0.479,0.497-0.663	c0.137-0.118,0.255-0.261,0.397-0.372c0.16-0.125,0.2-0.266,0.507-0.338c0.255-0.059,0.443-0.337,0.443-0.337l0.091,0.106	l0.212-0.632l0.148-0.051L20.668,7l0.117,2.06l0.099,0.016l0.096-0.719l0.13,1.309l0.08,0.029l0.027-0.397l0.105-0.137l0.076-0.835	l0.089,1.151l0.05,0.161l0.051-0.182l0.059,0.596l0.199,0.121l0.002,0.237l0.199,0.311c0,0,0.029,0.373,0.025,0.471	c-0.004,0.097-0.01,0.291-0.01,0.291l0.07,0.316l-0.115,0.201l-0.005,0.123l0.046,0.039l0.009,1.131l-0.119,0.576l0.048,0.313	l-0.206,3.773l-0.039-2.784l-0.141,0.64l-0.01,2.76l0.184,0.616l0.013,3.077c0,0,0.119-0.06,0.276-0.054	c0.226,0.008,0.417,0.192,0.748,0.249c0.108,0.077,0.264,0.259,0.384,0.316c0.034,0.016,0.26,0.062,0.26,0.062l0.232,0.217	c0.221-0.02,0.372,0.024,0.527,0.101c0.293,0.077,0.542,0.209,0.706,0.469c0.111,0.177,0.263,0.281,0.37,0.343	c0.107,0.063,0.589,0.052,0.589,0.052l-0.006-2.925l-0.25-0.957l-0.022-2.148l0.272-0.545l-0.024-1.815l-0.079-0.268l0.005-0.646	l-0.068,0.086c0,0-0.049,2.018-0.072,2.723c-0.01,0-0.195-3.698-0.195-3.698l-0.167-0.343c0,0,0.155-0.428,0.155-0.5	c0-0.174-0.066-0.255-0.066-0.255l-0.022-0.641c0,0,0.128-0.275,0.183-0.622c0.038-0.239,0.04-0.524,0.04-0.524l0.471-0.575	l0.012-0.429l0.195-0.228l0.098-1.871l0.101,1.409l0.204,0.755l0.098-0.106v-0.49l0.109,0.194l0.039-0.813l0.047,0.717l0.163,0.303	l0.221-0.058l0.478,0.283l0.177-0.006l0.096-0.345l0.103,0.535l0.158,0.109l0.054,0.179c0,0,0.221,0.134,0.263,0.179	c0.109,0.163,0.315,0.738,0.315,0.738l0.053,0.666c-0.341,0.734-0.379,1.093-0.377,1.538c0.002,0.524-0.092,1.677-0.092,1.677	l0.207,0.956l-0.148,6.021l-0.121,0.563c0,0-0.003-2.874-0.003-4.166l-0.043-0.079l-0.164,0.765l-0.004,3.968l-0.085,0.73	L28.187,24.8c0,0,0.104,0.082,0.254,0.114c0.341,0.269,0.752,0.329,1.21,0.255c0.031-0.005,0.064-0.002,0.096-0.004	c0.173-0.011,0.298,0.057,0.36,0.229c0.056,0.158,0.165,0.202,0.327,0.21c0.186,0.01,0.267-0.01,0.451,0.031	c0.124,0.028,0.143,0.167,0.473,0.167c0.214,0.01,0.388,0.099,0.562,0.213c0.132,0.087,0.452,0.238,0.452,0.238l-0.057-2.138	l0.039-1.972l-0.104-0.462l-0.059-0.07l-0.12,1.39l-0.277-1.88l-0.014-2.227l0.164-0.581l0-0.886l-0.133-0.665L31.83,16.5	l-0.081-0.047l-0.005-0.17l-0.038-0.063l0.237-1.234l0.327-0.291l0.267-0.686l0.065,0.259l0.066,0.043l0.1-1.669l0.205,1.275	l0.15,0.131l0.118-0.056l0.161-2.236l0.129,2.075l0.089-0.841l0.069,1.007l0.079-0.104l0.066,0.126l0.086,0.005l0.06,0.106	l0.144-0.007c0.123,0.126,0.302,0.167,0.379,0.221c0.123,0.087,0.29,0.112,0.29,0.112s0.243,0.376,0.353,0.635	c0.087,0.205,0.214,0.637,0.214,0.637l-0.032,0.719l0.081,0.26l-0.207,0.565l0.241,0.356l-0.295,6.693l-0.116-4.39l-0.066,0.26	l0.008,1.208l-0.264,0.613c0,0-0.013,2.053-0.002,2.986c0.004,0.322-0.012,0.505-0.012,0.505l-0.295,0.737l-0.005,0.495l0.228,0.126	c0.366-0.063,0.761-0.045,1.082,0.168c0.119,0.079,0.27,0.111,0.411,0.148c0.196,0.052,0.151,0.003,0.352,0.03	c0.069,0.009,0.313,0.159,0.382,0.121c0.072-0.039,0.138-0.235,0.243-0.254c0.105-0.019,0.216,0.161,0.217,0.239	c0.001,0.073,0.007,0.206,0.007,0.206s0.259,0.147,0.381,0.144c0.532,0,0.812,0.199,1.262,0.285c0.326,0.062,0.471,0.081,0.791,0.17	c0.113,0.031,0.319,0.052,0.428,0.149c0.045,0.04,0.029,0.144,0.262,0.211c0.127,0.037,0.5,0.033,0.739,0.176	c0.456,0.273,0.766,0.356,1.09,0.332c0.115-0.008,0.256,0.008,0.349,0.071c0.299,0.201,0.626,0.288,0.973,0.326	c0.078,0.009,0.19,0.069,0.266,0.091c0,0.012-0.134,0.079-0.281,0.077c-0.107-0.001-0.224-0.069-0.291-0.067	c-0.368,0.01-0.313-0.024-0.555-0.076c-0.13-0.028-0.146,0.015-0.229,0.118c-0.082,0.102-0.214,0.182-0.322,0.162	c-0.122-0.023-0.225-0.157-0.436-0.187c-0.493-0.072-0.388-0.193-0.791-0.348c-0.106-0.04-0.409-0.07-0.524-0.077	c-0.455,0-0.271-0.199-0.533-0.219s-0.269-0.19-0.378-0.226c-0.09-0.03-0.112,0.027-0.376,0.015	c-0.057-0.003-0.143,0.009-0.185-0.026c-0.386-0.317-0.864-0.242-1.302-0.333c-0.441-0.023-0.543-0.145-0.776-0.155	c-0.163-0.007-0.463,0.142-0.463,0.142s-0.014,0.139,0.005,0.195c0.071,0.223,0.27,0.321,0.568,0.276	c0.184-0.028,0.358-0.068,0.465,0.147c0.009,0.018,0.043,0.029,0.067,0.032c0.087,0.016,0.19-0.002,0.271,0.013	c0.099,0.019,0.174,0.072,0.264,0.09c1.893,0.384,1.892,0.588,2.306,0.588c0.239,0,0.319,0.025,0.68,0.025	c0.052,0,0.144,0.222,0.791,0.374c0.155,0.051,0.214,0.09,0.775,0.09c0.123,0,0.567,0.285,0.789,0.295	c0.052,0.002,0.174-0.007,0.176-0.087c0.002-0.066-0.065-0.13-0.116-0.154c-0.121-0.058-0.254-0.086-0.379-0.135	c-0.064-0.025-0.127-0.06-0.182-0.103c-0.023-0.018-0.042-0.046-0.031-0.103c0.012-0.057,0.117-0.018,0.117-0.018	s0.213,0.187,0.765,0.271c0.151,0.065,0.526,0.336,0.683,0.386c0.417-0.003,0.549,0.061,0.65,0.148	c0.053,0.045,0.105,0.061,0.213,0.081c0.138,0.026,0.43-0.037,0.413,0.032c-0.014,0.12-0.083,0.189-0.225,0.155	c-0.099-0.023-0.202-0.046-0.293-0.09c-0.22-0.108-0.434-0.214-0.694-0.181c-0.085,0.011-0.184-0.047-0.269-0.087	c-0.192-0.091-0.376-0.108-0.567,0.008c-0.205,0.125-0.419,0.087-0.629,0.007c-0.155-0.059-0.46-0.206-0.46-0.206	s-0.337-0.014-0.467,0.03c0.003-0.098-0.01-0.233-0.158-0.197s-0.078,0.12-0.019,0.17c-0.112,0.01-0.242,0.078-0.355,0.067	c-0.113-0.01-0.209-0.098-0.321-0.241c-0.046-0.059-0.118-0.136-0.185-0.146c-0.041-0.006-0.066,0.045-0.121,0.047	c-0.049,0.002-0.166-0.139-0.256-0.151c-0.176-0.024-0.309-0.109-0.407-0.145c-0.185-0.066-0.315-0.05-0.315-0.05	s-0.156-0.099-0.234-0.127c-0.224-0.081-0.257-0.045-0.269,0.188c0.018,0.209-0.079,0.282-0.135,0.4	c-0.009,0.018-0.093,0.034-0.174-0.05c0.002-0.02,0.005-0.04,0.007-0.06c0.061-0.042,0.146-0.07,0.177-0.129	c0.033-0.062,0.042-0.116,0.022-0.187c-0.01-0.037-0.03-0.125-0.083-0.143c-0.031-0.011-0.135,0.063-0.167,0.054	c-0.046-0.012-0.07-0.146-0.142-0.087c-0.072,0.06-0.024,0.124-0.013,0.181c0.037,0.182-0.051,0.323-0.221,0.331	c-0.101,0.004-0.163-0.034-0.136-0.152c0.011-0.051,0.022-0.102,0.032-0.154c0.032-0.169-0.034-0.26-0.034-0.26	s-0.554-0.193-0.709-0.221c-0.091-0.016-0.201,0.029-0.219,0.083c-0.059,0.182-0.023,0.222,0.068,0.343	c0.02,0.026,0.046,0.064,0.078,0.084c0.085,0.054,0.166,0.099,0.09,0.226c-0.072,0.12-0.153,0.186-0.299,0.145	c-0.155-0.057-0.21-0.108-0.458-0.112c-0.078-0.023-0.162-0.053-0.22-0.106c-0.204-0.187-0.461-0.24-0.729-0.24	c-0.066,0-0.133-0.052-0.172-0.104c-0.126-0.172-0.224-0.213-0.415-0.218c-0.147-0.005-0.369,0.004-0.515-0.012	c-0.124,0.008-0.298-0.027-0.298-0.027l-0.022-0.146l-0.295-0.015l0.11,0.989l-0.366,5.915l-0.102-4.284l-0.057-0.01l-0.094,0.376	v2.58l-0.259,0.775l-0.3,3.792l-0.241-3.779l-0.02-2.052l-0.185-0.727l0.007-1.108l0.111-0.439l0-1.949l-0.182-0.523	c0,0-0.035-0.002-0.175,0.035c-0.058,0.015-0.192-0.026-0.192-0.026l-0.059,2.121l-0.059-2.106c-0.147,0.083-0.215,0.129-0.306,0.2	c-0.304,0.24-0.611,0.357-0.836,0.326c-0.139-0.019-0.223,0.06-0.303,0.068c-0.042,0.004-0.097-0.018-0.109-0.047	c-0.059-0.147-0.183-0.165-0.309-0.195c-0.23-0.054-0.458-0.12-0.688-0.177c-0.359-0.088-0.718-0.119-1.072,0.031	c-0.033,0.014-0.08,0.031-0.112,0.011c-0.16-0.105-0.314-0.043-0.462-0.003c-0.275,0.074-0.292-0.13-0.292-0.13l-0.069-0.063	l-0.225,0.876l0.008,3.999l-0.32,0.761l0,1.046l-0.325,2.706l-0.212-3.585l0.028-2.055l-0.208-0.568c0,0-0.135,2.233-0.192,3.134	l-0.174-3.096l-0.206-0.74l0.131-0.669l0.008-2.188L26.07,28.37c0,0-0.138-0.388-0.232-0.388s-0.863-0.047-0.863-0.047	s-0.56,0.174-0.82,0.281c-0.161,0.066-0.244,0.03-0.412,0.03c-0.022,0-0.079,0.055-0.144,0.102c-0.112,0.08-0.212,0.091-0.307-0.016	c-0.134-0.153-0.257-0.148-0.257-0.148s-0.224,0.091-0.246,0.086c-0.084-0.019-0.167-0.041-0.246-0.076	c-0.01-0.004,0.002-0.12,0.002-0.12l0.195-0.105l0.13,0.047l0.078,0.062l0.12-0.022l0.107,0.07c0,0,0.07-0.014,0.091-0.01	c0.014,0.003,0.037-0.218,0.037-0.218l0.027,0.239c0.128,0.029,0.155-0.145,0.155-0.223c0-0.102-0.062-0.215-0.062-0.215	l-0.05-0.017l-0.078,0.086l-0.07-0.136l-0.206-0.135l-0.325-0.014L22.463,27.062z M22.58,27.541c0,0,0.246,0.141,0.193,0.182	c-0.021,0.016-0.126-0.098-0.234-0.096c-0.082,0.001-0.19,0.114-0.19,0.114l-0.159-0.003l-0.205,0.194l-0.118-0.004l-0.079,0.079	l0.021-0.114c0,0,0.219-0.202,0.243-0.239c0.051-0.079,0.084-0.338,0.084-0.338s0.079,0.025,0.185,0.025l0.095-0.19l0.144,0.212	L22.58,27.541z M29.517,27.06l-0.026,0.278c0,0,0.146,0.025,0.261,0.038c0.057,0.006,0.11,0.104,0.104,0.339	c0.112,0.061,0.236,0.047,0.313,0.027c0.099-0.025,0.193-0.078,0.292-0.092c0.149-0.021,0.327-0.074,0.446-0.016	c0.489,0.24,0.983,0.162,1.48,0.105c0.007-0.074,0.006-0.178,0.004-0.222c-0.005-0.13-0.055-0.089-0.238-0.049	c-0.146,0.032-0.231-0.022-0.309-0.132c-0.075-0.105-0.157-0.206-0.238-0.306c-0.008-0.01-0.034-0.005-0.06-0.008	c-0.012,0.057-0.024,0.11-0.031,0.146c-0.182,0.027-0.14-0.132-0.221-0.162c-0.096-0.035-0.215,0-0.305-0.043	c-0.258-0.124-0.509-0.26-0.798-0.096c-0.015,0.008-0.04,0.007-0.057,0c-0.118-0.048-0.367-0.099-0.367-0.099	s-0.112,0.094-0.385,0.093c-0.378,0.037-0.697-0.063-0.887-0.44c-0.04-0.079-0.11-0.146-0.177-0.205	c-0.039-0.035-0.101-0.043-0.152-0.063c-0.01,0.016-0.021,0.032-0.031,0.049c0.03,0.035,0.054,0.081,0.091,0.103	c0.172,0.102,0.269,0.212,0.386,0.421c0.103,0.139,0.265,0.185,0.36,0.283C29.277,27.006,29.362,27.042,29.517,27.06z M34.421,28.134c0,0-0.045,0.27,0.04,0.412c0,0,0.187-0.002,0.432,0.004c0.247,0.006,0.489,0.079,0.734,0.113	c0.063,0.009,0.155,0.018,0.188-0.018c0.043-0.047,0.063-0.141,0.053-0.209c-0.027-0.178-0.144-0.255-0.379-0.236	C35.134,28.229,34.78,28.321,34.421,28.134z M18.104,25.735c-0.002,0.186,0.121,0.337,0.237,0.37	c0.188,0.054,0.189-0.152,0.205-0.294c0.001-0.012,0.041-0.123,0.04-0.133c-0.013-0.09-0.023-0.114-0.074-0.163	c-0.055-0.053-0.188-0.073-0.259-0.042C18.176,25.507,18.105,25.592,18.104,25.735z M20.983,26.752l0.005,0.852l0.126,0.041	l-0.017-0.802L20.983,26.752z M2.245,19.848c-0.125-0.133-0.173-0.276-0.31-0.382c-0.046-0.035-0.111,0.013-0.154-0.035	c-0.079-0.09-0.155-0.186-0.24-0.189c-0.051-0.002-0.109,0.067-0.161,0.082c-0.1,0.028-0.222,0.067-0.277,0.15	c-0.07,0.106-0.06,0.245-0.093,0.368c-0.064,0.238-0.005,0.441,0.216,0.539c0.294,0.13,0.523,0.38,0.883,0.114	c0.114-0.084,0.236,0.016,0.243-0.303C2.355,20.001,2.32,19.937,2.245,19.848z M45.892,30.61c0.005,0.035,0.043,0.068,0.071,0.075	c0.171,0.044,0.277,0.07,0.352,0.29c0.016,0.047,0.112,0.065,0.215,0.124c0.061,0.035,0.085,0.131,0.146,0.155	c0.031,0.012,0.093,0.012,0.12,0.014c0.191,0.018,0.461,0.118,0.625,0.191c0.015,0.007,0.133-0.057,0.23-0.059	c0.054-0.001,0.09,0.057,0.126,0.061c0.078,0.008,0.135-0.113,0.205-0.18c0.014-0.014-0.044-0.163-0.088-0.175	c-0.206-0.057-0.28-0.093-0.391-0.119c-0.115-0.025-0.445,0.028-0.515-0.047c-0.291-0.31-0.667-0.393-1.074-0.379	C45.898,30.561,45.89,30.592,45.892,30.61z M1.847,18.061c-0.036-0.169-0.261-0.275-0.408-0.193	c-0.122,0.069-0.174,0.127-0.325,0.206c-0.129,0.067-0.325,0.166-0.266,0.383c0.062,0.228,0.211,0.368,0.403,0.37	C1.66,18.829,1.936,18.475,1.847,18.061z M5.464,22.276c-0.091-0.16-0.293-0.181-0.383-0.181c-0.08,0-0.061,0.079-0.19,0.076	c-0.271-0.007-0.304,0.079-0.308,0.116c-0.042,0.409,0.039,0.478,0.314,0.484c0.227,0.005,0.472-0.03,0.636-0.211	c0.093-0.103,0.132-0.102,0.194-0.158C5.655,22.36,5.521,22.376,5.464,22.276z M39.679,30.826c0.155,0.124,0.327,0.227,0.501,0.322	c0.095,0.052,0.22-0.043,0.217-0.145c-0.001-0.038-0.045-0.088-0.047-0.118c-0.015-0.207-0.003-0.218-0.264-0.315	c-0.094-0.037-0.177-0.101-0.267-0.15c-0.163-0.088-0.212,0.003-0.266,0.052C39.655,30.493,39.502,30.729,39.679,30.826z M0.621,18.401c-0.064-0.208-0.223-0.269-0.404-0.295c-0.15-0.021-0.245,0.153-0.208,0.251c0.058,0.159,0.306,0.343,0.425,0.314	C0.65,18.674,0.686,18.614,0.621,18.401z M43.986,29.59c-0.08,0.008-0.136,0.06-0.061,0.148c0.123,0.144,0.558,0.248,0.818,0.188	c0.058-0.013,0.076-0.067,0.115-0.094C44.582,29.664,44.302,29.558,43.986,29.59z M15.241,25.099	c-0.028,0.09,0.149,0.142,0.378,0.253c0.218,0.106,0.484,0.27,0.619,0.357C15.973,25.449,15.308,24.881,15.241,25.099z M48,30.945	c-0.176-0.072-0.606-0.251-0.606-0.251l-0.122,0.098l-0.273-0.058l0.025,0.074C47.025,30.808,47.664,30.964,48,30.945z M39.31,30.826c-0.214-0.15-0.428-0.225-0.711-0.211C38.767,30.803,39.271,30.983,39.31,30.826z M6.726,18.434	c-0.004-0.133-0.004-0.211-0.096-0.221c-0.09,0-0.143,0.089-0.163,0.149c-0.049,0.149,0.101,0.256,0.303,0.221	C6.748,18.542,6.728,18.502,6.726,18.434z M45.126,30.016c0.258,0.187,0.399,0.274,0.645,0.123c-0.2-0.049-0.381-0.146-0.668-0.158	C45.103,29.982,45.112,30.006,45.126,30.016z M38.404,30.545c0.015-0.086-0.23-0.088-0.23-0.088	C38.314,30.667,38.389,30.631,38.404,30.545z M11.384,19.569v-1.454l-0.118,1.4L11.384,19.569z"></path>
      </svg>
    );
  };
  
  export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}: {size?: number, strokeWidth?: number, width?: number, height?: number, [key: string]: unknown}) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  };
  
  export default function App() {
    return (
      <Navbar isBordered maxWidth="2xl"  >
        <NavbarContent justify="center">
          <NavbarBrand className="mr-4">
            <AcmeLogo />
           
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4">
            <NavbarItem isActive>
              <Link aria-current="page" color="primary" href="#">
                Characters
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link  color="secondary" href="#">
                Perks
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="secondary" href="#">
              Perk Randomiser
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
  
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[15rem] h-10",
              mainWrapper: "h-full",
              input: "text-medium",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
            type="search"
          />
          
        </NavbarContent>
      </Navbar>
    );
  }
  